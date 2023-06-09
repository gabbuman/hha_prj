from django.db.models import Q
from django.shortcuts import render
from django.core import serializers
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import permissions
from rest_framework.decorators import api_view
from django.http import HttpResponse, request
from .serializers import CustomTokenPairSerializer
from django.http import HttpResponse, HttpResponseBadRequest
from datetime import datetime
import datetime as dt
from .models import  Department, MonthlyRecord, CurrentFieldsList, CaseStudy, BiomechanicalSupport
from .models import Points
import json
from django.db.models import Q
import csv
from calendar import monthrange

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

    if (target_field or target_dept or min_year or max_year or min_month or max_month) == None:
        return HttpResponseBadRequest("Parameters are missing.")
    
    if not checkDepartmentExists(target_dept):
        return HttpResponseBadRequest("Invalid department selected. This department does not exist.")

    try:
        min_year = int(request.query_params.get("min_year"))
        max_year = int(request.query_params.get("max_year"))
        min_month = int(request.query_params.get("min_month"))
        max_month = int(request.query_params.get("max_month"))
    except:
        return HttpResponseBadRequest("Date range months and years must be numerical values.")

    start_date = dt.date(min_year,min_month,1)
    end_date = getLastDayOfMonth(dt.date(max_year,max_month,1))

    isValidDateRange = (start_date <= end_date)
    if (not isValidDateRange):
        return HttpResponseBadRequest("Invalid date range selected, start date must be earlier than end date.")

    records_in_date_range_and_dept = list(MonthlyRecord.objects.filter(Q(created_at__gte=start_date), 
        Q(created_at__lte=end_date), Q(department=target_dept)).values())

    if (len(records_in_date_range_and_dept) <= 0):
        return HttpResponse(json.dumps([],indent=4,sort_keys=True,default=str))
    
    responses = []
    for record in records_in_date_range_and_dept:
        year = record['year']
        month = record['month']
        date = dt.date(year,month,1)

        field_answer_list = record['question_answer_list']
        field_answer_selection = [record for record in field_answer_list if target_field in record.values()]
        
        if (len(field_answer_selection) >= 1):
            field_answer_pair = field_answer_selection[0]
            answer = field_answer_pair["answer"]
            responses.append({ "date":date, "answer":answer })

    field_and_responses = {"field": target_field, "department":target_dept, "responses" : responses}

    data = json.dumps(field_and_responses,indent=4,sort_keys=True,default=str)
    return HttpResponse(data, content_type="application/json")

@api_view(['GET'])
def GetQuestionsListByDateRange(request):

    target_dept = request.query_params.get("department")
    min_year = request.query_params.get("min_year")
    max_year = request.query_params.get("max_year")
    min_month = request.query_params.get("min_month")
    max_month = request.query_params.get("max_month")

    if (target_dept or min_year or max_year or min_month or max_month) == None:
        return HttpResponseBadRequest("Parameters are missing.")
    
    if not checkDepartmentExists(target_dept):
        return HttpResponseBadRequest("Invalid department selected. This department does not exist.")

    try:
        min_year = int(request.query_params.get("min_year"))
        max_year = int(request.query_params.get("max_year"))
        min_month = int(request.query_params.get("min_month"))
        max_month = int(request.query_params.get("max_month"))
    except:
        return HttpResponseBadRequest("Date range months and years must be numerical values.")

    start_date = dt.date(min_year,min_month,1)
    end_date = getLastDayOfMonth(dt.date(max_year,max_month,1))

    isValidDateRange = (start_date <= end_date)
    if (not isValidDateRange):
        return HttpResponseBadRequest("Invalid date range selected, start date must be earlier than end date.")

    records_in_date_range_and_dept = list(MonthlyRecord.objects.filter(Q(created_at__gte=start_date), 
        Q(created_at__lte=end_date), Q(department=target_dept)).values())

    if (len(records_in_date_range_and_dept) <= 0):
        return HttpResponse(json.dumps([],indent=4,sort_keys=True,default=str))
    
    record_question_lists = [record["question_answer_list"] for record in records_in_date_range_and_dept]

    all_questions_in_range_list = []
    for question_list in record_question_lists:
        extracted_question_list = [question_answer["question"] for question_answer in question_list]
        if len(all_questions_in_range_list) == 0:
            all_questions_in_range_list = extracted_question_list
        else:
            all_questions_in_range_list = all_questions_in_range_list + extracted_question_list

    all_questions_in_range_set_list = list(set(all_questions_in_range_list))
    all_questions_in_range_set_list.sort()
    
    data = json.dumps(all_questions_in_range_set_list,indent=4,sort_keys=True,default=str)
    return HttpResponse(data, content_type="application/json")

@api_view(['GET'])
def GetCurrentFieldList(request):

    department_name = request.query_params.get("department")
    response = []
    if (CurrentFieldsList.objects.filter(department = department_name).exists()):
        field_list = CurrentFieldsList.objects.filter(department = department_name).values()
        question_list = field_list[0]['list']
        response = question_list

    data = json.dumps(response)
    return HttpResponse(data, content_type="application/json")

def retrieveCaseStudiesForPreview(request):
    
    case_studies_list = []

    if (CaseStudy.objects.all().count() == 0):
        data = json.dumps(case_studies_list,indent=4,sort_keys=True,default=str)
        return HttpResponse(data, content_type="application/json")

    case_studies_queryset = CaseStudy.objects.all().values()

    index_of_latest_case_study = CaseStudy.objects.all().count() - 1
    num_of_case_studies_to_retrieve = 4

    while(index_of_latest_case_study >= 0 and num_of_case_studies_to_retrieve != 0):
        case_studies_list.append(case_studies_queryset[index_of_latest_case_study])
        index_of_latest_case_study = index_of_latest_case_study - 1
        num_of_case_studies_to_retrieve = num_of_case_studies_to_retrieve - 1

    data = json.dumps(case_studies_list,indent=4,sort_keys=True,default=str)
    return HttpResponse(data, content_type="application/json")

@api_view(['GET'])
def GetCaseStudies(request):

    case_study_department = request.query_params.get("department")
    case_studies_list = []

    if (CaseStudy.objects.filter(department = case_study_department).exists()):
        case_studies_queryset = CaseStudy.objects.filter(department = case_study_department).values()

        for record in case_studies_queryset:
            case_studies_list.append(record)

    data = json.dumps(case_studies_list,indent=4,sort_keys=True,default=str)
    return HttpResponse(data, content_type="application/json")

@api_view(['GET'])
def GetBiomechanicalforms(request):

    bio_form_dept = request.query_params.get("department")
    bio_form_list = []

    if (BiomechanicalSupport.objects.filter(department = bio_form_dept).exists()):
        bio_form_queryset = BiomechanicalSupport.objects.filter(department = bio_form_dept).values()

        for record in bio_form_queryset:
            bio_form_list.append(record)

    data = json.dumps(bio_form_list,indent=4,sort_keys=True,default=str)
    return HttpResponse(data, content_type="application/json")
    
@api_view(['GET'])
def GetDepartmentReminders(request):

    target_dept = request.query_params.get("department")

    if target_dept == None:
        return HttpResponseBadRequest("Parameters are missing.")
    
    if not checkDepartmentExists(target_dept):
        return HttpResponseBadRequest("Invalid department selected. This department does not exist.")

    # Case Study Count
    today_date = dt.datetime.now() # now() to include time in the datetime object
    start_date = dt.datetime.today().replace(day=1) # today() used to set time of datetime to 0 implicitly
    case_studies_completed = list(CaseStudy.objects.filter(Q(created_at__range=(start_date,today_date)),Q(department=(target_dept))))

    # Monthly Record Status
    current_year = dt.datetime.now().year
    current_month = dt.datetime.now().month
    monthly_record_submitted = list(MonthlyRecord.objects.filter(Q(year=current_year), Q(month=current_month), Q(department=(target_dept))).values())

    # Biomechanical Form Status - TBD

    # Compile response
    response = dict()
    response["case_studies_completed"] = len(case_studies_completed)
    response["monthly_record_subbmited"] = True if len(monthly_record_submitted) > 0 else False
    response["outstanding_biomech_issues"] = "Waiting for biomechanical form model to get this"

    data = json.dumps(response,indent=4,sort_keys=True,default=str)
    return HttpResponse(data, content_type="application/json")

@api_view(['GET'])
def GetAllMonhtlyRecordDataInCSV(request):

    target_dept = request.query_params.get("department")
    
    all_records = MonthlyRecord.objects.all()
    if target_dept:
        if not checkDepartmentExists(target_dept):
            return HttpResponseBadRequest("Invalid department selected. This department does not exist.")
        all_records = MonthlyRecord.objects.filter(Q(department=target_dept))
       
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="monthly_records_export.csv"'
    writer = csv.writer(response)
    writer.writerow(['ID','Month','Year','Questions and Answers List','Department'])
    records_list = all_records.values_list('monthly_record_id','month','year','question_answer_list','department')

    for record in records_list:
        writer.writerow(record)

    return response

def checkDepartmentExists(department):
    return len(list(Department.objects.filter(Q(name=department)))) >= 1

def getLastDayOfMonth(date_value):
    return date_value.replace(day = monthrange(date_value.year, date_value.month)[1])

@api_view(['GET'])
def UpdateCaseStudyPoints(request):

    case_study_points = Points.objects.get(id = 1).case_studies # retrieve the amount of case study points to be added
    case_study_department = request.query_params.get("department")

    if case_study_department is None:
        return HttpResponseBadRequest("Parameters are missing.")
    
    if not checkDepartmentExists(case_study_department):
        return HttpResponseBadRequest("Invalid department selected. This department does not exist.")

    # Add specified points to the department
    AddPoints(case_study_department,case_study_points)

    # Just to view the department after it's points have been updated
    department_list = []
    department_queryset = Department.objects.filter(name = case_study_department).values()
    department_list.append(department_queryset[0])
    data = json.dumps(department_list,indent=4,sort_keys=True,default=str)
    return HttpResponse(data, content_type="application/json")

@api_view(['GET'])
def UpdateMonthlyRecordPoints(request):
    monthly_record_department = request.query_params.get("department")

    if monthly_record_department is None:
        return HttpResponseBadRequest("Parameters are missing.")
    
    if not checkDepartmentExists(monthly_record_department):
        return HttpResponseBadRequest("Invalid department selected. This department does not exist.")

    # Reset points to default if a department missed a submission from previous month or
    # Reset points to default if all departments submitted on time and now the points have become 0
    CheckIfDeparmentMissedSubmission()

    monthly_record_points = Points.objects.get(id = 1).monthly_record # retrieve the amount of monthly record submission points to be added

    # Add specified points to the department
    AddPoints(monthly_record_department,monthly_record_points)

    # Reduce the points gained by 1 for the next department submitting the monthly record
    UpdatePointsTable()

    # Just to view the department after it's points have been updated
    department_list = []
    department_queryset = Department.objects.filter(name = monthly_record_department).values()
    department_list.append(department_queryset[0])
    data = json.dumps(department_list,indent=4,sort_keys=True,default=str)

    return HttpResponse(data, content_type="application/json")

def CheckIfDeparmentMissedSubmission():
    points_record = Points.objects.get(id = 1)
    last_update_month = points_record.last_update_month
    last_update_year = points_record.last_update_year
    current_month = int(datetime.now().strftime('%m'))
    current_year = int(datetime.now().strftime('%Y'))

    # Reset points to default if a department missed a submission from previous month or
    # Reset points to default if all departments submitted on time and now the points have become 0
    if((points_record.monthly_record == 0) or ((points_record.monthly_record != 0) and (last_update_month != current_month))):

        if(current_year != last_update_year):
            ResetDepartmentPointsToZero()
            points_record.last_update_year = current_year

        points_record.monthly_record = Department.objects.all().count()
        points_record.last_update_month = datetime.now().strftime('%m')
        points_record.save()

def ResetDepartmentPointsToZero():
    department_query_set = Department.objects.all().values()
    for department in department_query_set:
        department_record = Department.objects.get(name = department['name'])
        department_record.points = 0
        department_record.save()

def AddPoints(department,points):
        target_department = Department.objects.get(name = department)
        target_department.points = target_department.points + points
        target_department.save() 
   
def UpdatePointsTable():
    points_record = Points.objects.get(id = 1)

    # Decrement monthly record points by one after each department submits a monthly record form
    points_record.monthly_record = points_record.monthly_record - 1
    points_record.last_update_month = datetime.now().strftime('%m')
    points_record.save()

def UpdatePointsAfterDepartmentAdded():
    points_record  = Points.objects.get(id = 1)
    points_record.monthly_record = points_record.monthly_record + 1
    points_record.save()

def RetrieveDepartmentRankingList(request):
    department_query_set = Department.objects.all().order_by('-points')
    departments = []
    department_list = []

    for department_record in department_query_set:
        departments.append(department_record)

    for department in departments:
        department_query_set = Department.objects.filter(Q(name = department)).values()
        points = department_query_set[0]['points']
        department_list.append({"Department":department,"Points":points})

    data = json.dumps(department_list,indent=4,sort_keys=True,default=str)
    return HttpResponse(data, content_type="application/json")