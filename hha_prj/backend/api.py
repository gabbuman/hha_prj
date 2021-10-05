from backend.models import MonthlyRecord, NICUPaeds
from rest_framework import viewsets, permissions
from .serializers import MonthlyRecordSerializer, NICUPaedsSerializer

# MonthlyRecord ViewSet
class MonthlyRecordViewSet(viewsets.ModelViewSet):
    queryset = MonthlyRecord.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = MonthlyRecordSerializer

class NICUPaedsViewSet(viewsets.ModelViewSet):
    queryset = NICUPaeds.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = NICUPaedsSerializer