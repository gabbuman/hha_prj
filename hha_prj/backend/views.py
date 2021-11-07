from django.shortcuts import render
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import permissions
from .serializers import CustomTokenPairSerializer
from django.http import HttpResponse
from datetime import datetime
from .models import AnswerList

from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

# Create your views here.
class ObtainTokenPairWithUsernameView(TokenObtainPairView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = CustomTokenPairSerializer

def CheckCurrentMonthAdmissionStatus():
    current_year = datetime.now().strftime('%Y')
    current_month = datetime.now().strftime('%m')

    if AnswerList.objects.filter(year = current_year,month = current_month).exists():
        html = "<html><body>Present</body></html>"
    else:
        html = "<html><body>Absent</body></html>"

    return HttpResponse(html)