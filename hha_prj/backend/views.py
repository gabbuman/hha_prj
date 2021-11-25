from django.db.models import Q
from django.shortcuts import render
from django.core import serializers
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import permissions
from rest_framework.decorators import api_view
from django.http import HttpResponse, request
from .serializers import CustomTokenPairSerializer
from django.http import HttpResponse, HttpResponseBadRequest
import datetime
from .models import  Department, MonthlyRecord


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

@api_view(['GET'])
def GetRecordDataByDateRange(request):

    target_field = request.query_params.get("field")
    target_dept = request.query_params.get("department")
    min_year = request.query_params.get("min_year")
    max_year = request.query_params.get("max_year")
    min_month = request.query_params.get("min_month")
    max_month = request.query_params.get("max_month")

    if (target_field or target_dept or min_year or max_year or min_month or max_month) is None:
        return HttpResponseBadRequest("Parameters are missing.")
    
    department_exists = len(list(Department.objects.filter(Q(name=target_dept)))) >= 1
    if not department_exists:
        return HttpResponseBadRequest("Invalid department selected. This department does not exist.")

    try:
        min_year = int(request.query_params.get("min_year"))
        max_year = int(request.query_params.get("max_year"))
        min_month = int(request.query_params.get("min_month"))
        max_month = int(request.query_params.get("max_month"))
    except:
        return HttpResponseBadRequest("Date range months and years must be numerical values.")

    isValidDate = (min_year < max_year) or ((min_year is max_year) and (min_month < max_month))
    if (not isValidDate):
        return HttpResponseBadRequest("Invalid date range selected, start date must be earlier than end date.")

    records_in_date_range_and_dept = list(MonthlyRecord.objects.filter(Q(year__gte=min_year), Q(month__gte=min_month),
        Q(year__lte=max_year), Q(month__lte=max_month), Q(department=target_dept)).values())

    if (len(records_in_date_range_and_dept) <= 0):
        return HttpResponse(json.dumps([],indent=4,sort_keys=True,default=str))
    
    responses = []
    for record in records_in_date_range_and_dept:
        year = record['year']
        month = record['month']
        date = datetime.date(year,month,1)

        field_answer_list = record['question_answer_list']
        field_answer_selection = [record for record in field_answer_list if target_field in record.values()]
        
        if (len(field_answer_selection) <= 0):
            return HttpResponse(json.dumps([],indent=4,sort_keys=True,default=str))

        field_answer_pair = field_answer_selection[0]
        answer = field_answer_pair["answer"]

        responses.append({ "date":date, "answer":answer })

    field_and_responses = {"field": target_field, "department":target_dept, "responses" : responses}

    data = json.dumps(field_and_responses,indent=4,sort_keys=True,default=str)
    return HttpResponse(data, content_type="application/json")



