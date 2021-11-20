from django.db.models import Q
from django.shortcuts import render
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import permissions
from django.http import HttpResponse
from .serializers import CustomTokenPairSerializer
from django.http import HttpResponse
from datetime import datetime
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

def GetMonthlyRecordData(self):
    minYear = self.kwargs.get('minYear')
    minMonth = self.kwargs.get('minMonth')
    maxYear = self.kwargs.get('maxYear')
    maxMonth = self.kwargs.get('maxMonth')

    return MonthlyRecord.objects.filter(Q(year__gte=minYear), Q(month__gte=minMonth), 
        Q(year__lte=maxYear), Q(month__lte=maxMonth))