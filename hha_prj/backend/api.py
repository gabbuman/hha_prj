from backend.models import MaternityMonthlyRecord, MonthlyRecord, RehabMonthlyRecord, CustomUser
from rest_framework import viewsets, permissions
from .serializers import MaternityMonthlyRecordSerializer, MonthlyRecordSerializer, RehabMonthlyRecordSerializer, CustomUserSerializer

# MonthlyRecord ViewSet
class MonthlyRecordViewSet(viewsets.ModelViewSet):
    queryset = MonthlyRecord.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = MonthlyRecordSerializer

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

# Custom User Viewset
class CustomUserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = CustomUserSerializer
