from django.shortcuts import render
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import permissions
from .serializers import CustomTokenPairSerializer
from django.http import HttpResponse
from datetime import datetime
from .models import AnswerList

from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
import json

# Create your views here.
class ObtainTokenPairWithUsernameView(TokenObtainPairView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = CustomTokenPairSerializer

def CheckCurrentMonthAdmissionStatus(request):
    current_year = datetime.now().strftime('%Y')
    current_month = datetime.now().strftime('%m')

    if AnswerList.objects.filter(year = current_year,month = current_month).exists():
        response = True
    else:
        response = False

    return HttpResponse(json.dumps(response), content_type="application/json")