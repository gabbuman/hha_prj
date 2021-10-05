from backend.models import MaternityMonthlyRecord, MonthlyRecord
from rest_framework import viewsets, permissions
from .serializers import MaternityMonthlyRecordSerializer, MonthlyRecordSerializer

# MonthlyRecord ViewSet
class MonthlyRecordViewSet(viewsets.ModelViewSet):
    queryset = MonthlyRecord.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = MonthlyRecordSerializer

class MaternityMonthlyRecordViewSet(viewsets.ModelViewSet):
    queryset =  MaternityMonthlyRecord.objects()
    permission_class = [
        permissions.AllowAny
    ]
    serializer_class = MaternityMonthlyRecordSerializer