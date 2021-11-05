from django.shortcuts import render
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import permissions
from .serializers import CustomTokenPairSerializer

from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from .models import Department, MonthlyRecordPrimaryData, DischargedAlivePatientRecord
from .serializers import DepartmentSerializer, MonthlyRecordPrimaryDataSerializer, DischargedAlivePatientRecordSerializer

from django.views.decorators.csrf import csrf_exempt


# Create your views here.
class ObtainTokenPairWithUsernameView(TokenObtainPairView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = CustomTokenPairSerializer