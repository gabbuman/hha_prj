from backend.models import MaternityMonthlyRecord, MonthlyRecord, RehabMonthlyRecord, NICUPaedsMonthlyRecord
from rest_framework import viewsets, permissions
from .serializers import MaternityMonthlyRecordSerializer, MonthlyRecordSerializer, RehabMonthlyRecordSerializer, NICUPaedsMonthlyRecordSerializer

# MonthlyRecord ViewSet
class MonthlyRecordViewSet(viewsets.ModelViewSet):
    queryset = MonthlyRecord.objects.all()
    permission_classes = [
        permissions.AllowAny
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
