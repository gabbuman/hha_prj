<<<<<<< HEAD:hha_prj/monthly_records/api.py
from monthly_records.models import MonthlyRecord, RehabMonthlyRecord
=======
from backend.models import MonthlyRecord
>>>>>>> 2bc00b32138ca2c68f5f7075526b60230d88ef83:hha_prj/backend/api.py
from rest_framework import viewsets, permissions
from .serializers import MonthlyRecordSerializer, RehabMonthlyRecordSerializer

# MonthlyRecord ViewSet
class MonthlyRecordViewSet(viewsets.ModelViewSet):
    queryset = MonthlyRecord.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = MonthlyRecordSerializer

# RehabMonthlyRecord Viewset
class RehabMonthlyRecordViewset(viewsets.ModelViewSet):
    queryset = RehabMonthlyRecord.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = RehabMonthlyRecordSerializer