from backend.models import MaternityMonthlyRecord, MonthlyRecord, RehabMonthlyRecord,PatientCaseStudyRecord, StaffRecognitionCaseStudyRecord, CommunityHealthMonthlyRecord, CustomUser, NICUPaedsMonthlyRecord, Department, Role
from rest_framework import viewsets, permissions
from .serializers import DepartmentSerializer, MaternityMonthlyRecordSerializer, MonthlyRecordSerializer, RehabMonthlyRecordSerializer, PatientCaseStudyRecordSerializer, StaffRecognitionCaseStudyRecordSerializer, CustomUserSerializer, NICUPaedsMonthlyRecordSerializer, CommunityHealthMonthlyRecordSerializer, RoleSerializer
from backend.models import MonthlyRecordPrimaryData, DischargedAlivePatientRecord, PatientDiedBefore48hRecords, PatientDiedAfter48hRecords, SelfDischargedRecords, StayedInTheWardRecords, AdmissionRecords
from .serializers import  MonthlyRecordPrimaryDataSerializer, DischargedAlivePatientRecordSerializer, PatientDiedBefore48hRecordsSerializer, PatientDiedAfter48hRecordsSerializer, SelfDischargedRecordsSerializer, StayedInTheWardRecordsSerializer, AdmissionRecordsSerializer
# MonthlyRecord ViewSet
class MonthlyRecordViewSet(viewsets.ModelViewSet):
    queryset = MonthlyRecord.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = MonthlyRecordSerializer

# NICU Paeds Monthly Record Viewset
class NICUPaedsMonthlyRecordViewSet(viewsets.ModelViewSet):
    queryset = NICUPaedsMonthlyRecord.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = NICUPaedsMonthlyRecordSerializer
# Rehab Monthly Record Viewset
class RehabMonthlyRecordViewset(viewsets.ModelViewSet):
    queryset = RehabMonthlyRecord.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = RehabMonthlyRecordSerializer

# Maternity Month Record Viewset
class MaternityMonthlyRecordViewSet(viewsets.ModelViewSet):
    queryset =  MaternityMonthlyRecord.objects.all()
    permission_class = [
        permissions.AllowAny
    ]
    serializer_class = MaternityMonthlyRecordSerializer

# Patient Case Study Record ViewSet
class PatientCaseStudyRecordViewSet(viewsets.ModelViewSet):
    queryset = PatientCaseStudyRecord.objects.all()
    permission_class = [
        permissions.AllowAny
    ]
    serializer_class = PatientCaseStudyRecordSerializer

# Staff Recognition Case Study Record ViewSet
class StaffRecognitionCaseStudyViewSet(viewsets.ModelViewSet):
    queryset = StaffRecognitionCaseStudyRecord.objects.all()
    permission_class = [
        permissions.AllowAny
    ]
    serializer_class = StaffRecognitionCaseStudyRecordSerializer

#Community Health Record Viewset
class CommunityHealthMonthlyRecordViewset(viewsets.ModelViewSet):
    queryset = CommunityHealthMonthlyRecord.objects.all()
    permission_class = [
        permissions.AllowAny
    ]
    serializer_class = CommunityHealthMonthlyRecordSerializer

# Custom User Viewset
class CustomUserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = CustomUserSerializer

class DepartmentViewSet(viewsets.ModelViewSet):
    queryset = Department.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = DepartmentSerializer
    lookup_field = 'name'
    lookup_url_kwarg = 'name'

class RoleViewSet(viewsets.ModelViewSet):
    queryset = Role.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = RoleSerializer
    lookup_field = 'name'
    lookup_url_kwarg = 'name'


class MonthlyRecordPrimaryDataViewSet(viewsets.ModelViewSet):
    queryset = MonthlyRecordPrimaryData.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = MonthlyRecordPrimaryDataSerializer

class DischargedAlivePatientRecordViewSet(viewsets.ModelViewSet):
    queryset = DischargedAlivePatientRecord.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = DischargedAlivePatientRecordSerializer

class PatientDiedBefore48hRecordsViewSet(viewsets.ModelViewSet):
    queryset = PatientDiedBefore48hRecords.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = PatientDiedBefore48hRecordsSerializer

class PatientDiedAfter48hRecordsViewSet(viewsets.ModelViewSet):
    queryset = PatientDiedAfter48hRecords.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = PatientDiedAfter48hRecordsSerializer

class SelfDischargedRecordsViewSet(viewsets.ModelViewSet):
    queryset = SelfDischargedRecords.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = SelfDischargedRecordsSerializer

class StayedInTheWardRecordsViewSet(viewsets.ModelViewSet):
    queryset = StayedInTheWardRecords.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = StayedInTheWardRecordsSerializer

class AdmissionRecordsViewSet(viewsets.ModelViewSet):
    queryset = AdmissionRecords.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = AdmissionRecordsSerializer