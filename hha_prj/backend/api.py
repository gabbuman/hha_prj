from backend.models import MonthlyRecord, CustomUser, Department, Role, CurrentFieldsList, CaseStudy, CaseStudyType,Points
from rest_framework import viewsets, permissions


from .serializers import CaseStudySerializer, CaseStudyTypeSerializer, CurrentFieldListSerializer, DepartmentSerializer, MonthlyRecordSerializer, CustomUserSerializer, PointsSerializer, RoleSerializer

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

class MonthlyRecordViewSet(viewsets.ModelViewSet):
    queryset = MonthlyRecord.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = MonthlyRecordSerializer
    lookup_fields = ('department')
    lookup_url_kwargs = ('department')

class CurrentFieldListViewSet(viewsets.ModelViewSet):
    queryset = CurrentFieldsList.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = CurrentFieldListSerializer
    lookup_field = 'department'
    lookup_url_kwarg = 'department'

class CaseStudyTypeViewSet(viewsets.ModelViewSet):
    queryset = CaseStudyType.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = CaseStudyTypeSerializer
    lookup_field = 'name'
    lookup_url_kwarg = 'name'

class CaseStudyViewSet(viewsets.ModelViewSet):
    queryset = CaseStudy.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = CaseStudySerializer

class PointsViewSet(viewsets.ModelViewSet):
    queryset = Points.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = PointsSerializer