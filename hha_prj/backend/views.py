from django.db.models import Q
from django.shortcuts import render
from django.core import serializers
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import permissions
from django.http import HttpResponse
from .serializers import CustomTokenPairSerializer
from django.http import HttpResponse, HttpResponseBadRequest
import datetime
from .models import  MonthlyRecord

from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
import json
from rest_framework import viewsets

class ObtainTokenPairWithUsernameView(TokenObtainPairView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = CustomTokenPairSerializer

def CheckCurrentMonthAdmissionStatus(request):
    current_year = datetime.now().strftime('%Y')
    current_month = datetime.now().strftime('%m')

    if MonthlyRecord.objects.filter(year = current_year,month = current_month).exists():
        response = True
    else:
        response = False

    return HttpResponse(json.dumps(response), content_type="application/json")

def GetRecordDataByDateRange(request, dept, min_year, min_month, max_year, max_month, field):

    isValidDate = (min_year < max_year) or ((min_year is max_year) and (min_month < max_month))
    if (not isValidDate):
        return HttpResponseBadRequest("Invalid date range selected")

    record_list = list(MonthlyRecord.objects.filter(Q(year__gte=min_year), Q(month__gte=min_month),
        Q(year__lte=max_year), Q(month__lte=max_month), Q(department=dept)).values())

    target_field = field.replace("$$$", " ") # Enable white space passing by an alias "$$$"

    response = []
    for dictionary in record_list:
        year = dictionary['year']
        month = dictionary['month']
        date = datetime.date(year,month,1)

        question_answer_list = dictionary['question_answer_list']
        question_answer_selection = [dictionary for dictionary in question_answer_list if target_field in dictionary.values()]
        question_answer_pair = question_answer_selection[0]
        answer = question_answer_pair["answer"]

        response.append({ "date":date, "answer":answer })

    question_and_response = {"question": target_field, "response" : response}

    data = json.dumps(question_and_response,indent=4,sort_keys=True,default=str)
    return HttpResponse(data, content_type="application/json")



