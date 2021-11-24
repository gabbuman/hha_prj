from django.shortcuts import render
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import permissions
from django.http import HttpResponse
from .serializers import CustomTokenPairSerializer
from django.http import HttpResponse
from datetime import datetime
from .models import  CurrentFieldsList, MonthlyRecord

from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
import json
from rest_framework import viewsets
from django.db.models import Q
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

def GetCurrentFieldList(request,department_name):

    response = []
    
    if (not CurrentFieldsList.objects.filter(department = department_name).exists()):
        data = json.dumps(response)
        return HttpResponse(data, content_type="application/json")

    field_list = CurrentFieldsList.objects.filter(department = department_name).values()

    question_list = field_list[0]['list']
    response.append({"list": question_list})

    data = json.dumps(response,indent=4,default=str)
    return HttpResponse(data, content_type="application/json")
