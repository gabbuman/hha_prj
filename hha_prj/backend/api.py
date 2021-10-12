from backend.models import MaternityMonthlyRecord, MonthlyRecord, RehabMonthlyRecord,PatientCaseStudyRecord, StaffRecognitionCaseStudyRecord, CommunityHealthMonthlyRecord, CustomUser, NICUPaedsMonthlyRecord
from rest_framework import viewsets, permissions
from rest_framework import viewsets, permissions
from .serializers import MaternityMonthlyRecordSerializer, MonthlyRecordSerializer, RehabMonthlyRecordSerializer, PatientCaseStudyRecordSerializer, StaffRecognitionCaseStudyRecordSerializer, CustomUserSerializer, NICUPaedsMonthlyRecordSerializer, CommunityHealthMonthlyRecordSerializer


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
