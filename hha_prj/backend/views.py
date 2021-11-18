from django.db.models import fields
from django.db.models.expressions import Case
from django.http import response
from django.shortcuts import render
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import permissions
from django.http import HttpResponse
from .serializers import CustomTokenPairSerializer
from django.http import HttpResponse
from datetime import datetime
from .models import  MonthlyRecord
from .models import CaseStudy

from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
import json
from rest_framework import viewsets

#Imported for this branch
from django.core import serializers
from .serializers import CaseStudySerializer
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

    
def retrieveCaseStudiesForPreview(request):

    case_studies = CaseStudy.objects.all()
    if (case_studies.count() >= 4):
        index_recent_case_study = case_studies.count() - 1
        case_study = serializers.serialize( "json", [case_studies[index_recent_case_study],case_studies[index_recent_case_study - 1],case_studies[index_recent_case_study - 2],case_studies[index_recent_case_study - 3]])
        return JsonResponse(json.loads(case_study), safe=False)
    elif (case_studies.count() == 3):
        index_recent_case_study = case_studies.count() - 1
        case_study = serializers.serialize( "json", [case_studies[index_recent_case_study],case_studies[index_recent_case_study - 1],case_studies[index_recent_case_study - 2]])
        return JsonResponse(json.loads(case_study), safe=False)
    elif (case_studies.count() == 2):
        index_recent_case_study = case_studies.count() - 1
        case_study = serializers.serialize( "json", [case_studies[index_recent_case_study],case_studies[index_recent_case_study - 1]])
        return JsonResponse(json.loads(case_study), safe=False)
    elif (case_studies.count() == 1):
        index_recent_case_study = case_studies.count() - 1
        case_study = serializers.serialize( "json", [case_studies[index_recent_case_study]])
        return JsonResponse(json.loads(case_study), safe=False)
        
    return HttpResponse(json.dumps("Empty"), content_type="application/json")

