from django.db.models import Q
from django.shortcuts import render
from django.core import serializers
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import permissions
from django.http import HttpResponse
from .serializers import CustomTokenPairSerializer
from django.http import HttpResponse
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

def GetAllRecordData(request):
    record_list = list(MonthlyRecord.objects.all().values())
    data = json.dumps(record_list)
    return HttpResponse(data, content_type="application/json")

def GetRecordDataByDateRange(request, min_year, min_month, max_year, max_month, field):
    record_list = list(MonthlyRecord.objects.filter(Q(year__gte=min_year), Q(month__gte=min_month),
        Q(year__lte=max_year), Q(month__lte=max_month)).values())

    formatted_field = field.replace("$$$", " ") # Enable white space passing by an alias "$$$"

    response = []
    for dictionary in record_list:
        year = dictionary['year']
        month = dictionary['month']
        date = datetime.date(year,month,1)

        nested_question_answer_list = dictionary['question_answer_list']
        nested_question_answer = [dictionary for dictionary in nested_question_answer_list if formatted_field in dictionary.values()]
        question_answer_pair = nested_question_answer[0]
        answer = question_answer_pair["answer"]

        response.append({ "date":date, "question":formatted_field, "answer":answer })

    data = json.dumps(response,indent=4,sort_keys=True,default=str)
    return HttpResponse(data, content_type="application/json")



