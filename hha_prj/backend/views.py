from django.shortcuts import render
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import permissions
from .serializers import CustomTokenPairSerializer

from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from .models import Department, MonthlyRecordPrimaryData
from .serializers import DepartmentSerializer, MonthlyRecordPrimaryDataSerializer

from django.views.decorators.csrf import csrf_exempt


# Create your views here.
class ObtainTokenPairWithUsernameView(TokenObtainPairView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = CustomTokenPairSerializer

@csrf_exempt
def departmentApi(request,id=0):
    if request.method=='GET':
        departments = Department.objects.all()
        departments_serializer=DepartmentSerializer(departments,many=True)
        return JsonResponse(departments_serializer.data,safe=False)
    elif request.method=='POST':
        department_data=JSONParser().parse(request)
        departments_serializer=DepartmentSerializer(data=department_data)
        if departments_serializer.is_valid():
            departments_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='DELETE':
        department=Department.objects.get(DepartmentId=id)
        department.delete()
        return JsonResponse("Deleted Successfully",safe=False)

@csrf_exempt
def monthlyRecordPrimaryDataApi(request,created=0):
    if request.method=='GET':
        monthly_records = MonthlyRecordPrimaryData.objects.all()
        monthly_records_serializer=MonthlyRecordPrimaryDataSerializer(monthly_records,many=True)
        return JsonResponse(monthly_records_serializer.data,safe=False)
    elif request.method=='POST':
        department_data=JSONParser().parse(request)
        monthly_records_serializer=MonthlyRecordPrimaryDataSerializer(data=department_data)
        if monthly_records_serializer.is_valid():
            monthly_records_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        print(monthly_records_serializer.errors)
        return JsonResponse(monthly_records_serializer.errors,safe=False)
    elif request.method=='DELETE':
        monthly_records=MonthlyRecordPrimaryData.objects.get(created_at=created)
        monthly_records.delete()
        return JsonResponse("Deleted Successfully",safe=False)