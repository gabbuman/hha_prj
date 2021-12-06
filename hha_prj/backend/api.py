from backend.models import MonthlyRecord, CustomUser, Department, Role, CurrentFieldsList, CaseStudy, CaseStudyType,DischargedAliveRehabGreenData,StayedInWardRehabGreenData, BiomechanicalSupport
from backend.models import Points
from rest_framework import viewsets, permissions
from .serializers import BiomechanicalSupportSerializer, CaseStudySerializer, CaseStudyTypeSerializer, CurrentFieldListSerializer, DepartmentSerializer, MonthlyRecordSerializer, CustomUserSerializer, RoleSerializer,DischargedAliveRehabGreenDataSerializer, StayedInWardRehabGreenDataSerializer,StayedInWardRehabGreenDataSerializer
from .serializers import PointsSerializer
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
    lookup_fields = ('month','year')
    lookup_url_kwargs = ('month','year')

class DischargedAliveRehabGreenDataViewSet(viewsets.ModelViewSet):
    queryset = DischargedAliveRehabGreenData.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = DischargedAliveRehabGreenDataSerializer
class StayedInWardRehabGreenDataViewSet(viewsets.ModelViewSet):
    queryset = StayedInWardRehabGreenData.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = StayedInWardRehabGreenDataSerializer
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

class BiomechanicalSupportViewSet(viewsets.ModelViewSet):
    queryset = BiomechanicalSupport.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = BiomechanicalSupportSerializer

class PointsViewSet(viewsets.ModelViewSet):
    queryset = Points.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = PointsSerializer