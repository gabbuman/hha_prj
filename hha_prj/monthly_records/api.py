from monthly_records.models import MonthlyRecord, CaseStudy
from rest_framework import viewsets, permissions
from .serializers import MonthlyRecordSerializer, CaseStudySerializer

# MonthlyRecord ViewSet
class MonthlyRecordViewSet(viewsets.ModelViewSet):
    queryset = MonthlyRecord.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = MonthlyRecordSerializer

# CaseStudy ViewSet
class CaseStudyViewSet(viewsets.ModelViewSet):
    queryset = CaseStudy.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = CaseStudySerializer