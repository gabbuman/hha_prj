from django.utils.module_loading import import_string
from rest_framework import routers
from .api import CommunityHealthMonthlyRecordViewset, MonthlyRecordViewSet 
from .api import RehabMonthlyRecordViewset, MaternityMonthlyRecordViewSet
from .api import CustomUserViewSet, NICUPaedsMonthlyRecordViewSet, PatientCaseStudyRecordViewSet
from .api import StaffRecognitionCaseStudyViewSet, DepartmentViewSet, RoleViewSet
from .api import MonthlyRecordPrimaryDataViewSet, DischargedAlivePatientRecordViewSet, PatientDiedBefore48hRecordsViewSet, PatientDiedAfter48hRecordsViewSet, SelfDischargedRecordsViewSet, StayedInTheWardRecordsViewSet, AdmissionRecordsViewSet
from .views import ObtainTokenPairWithUsernameView
from django.urls import path
from django.urls.conf import include
from rest_framework_simplejwt.views import TokenRefreshView

from django.conf.urls import url
from .views import departmentApi, monthlyRecordPrimaryDataApi

router = routers.DefaultRouter()
router.register('api/monthly_records', MonthlyRecordViewSet, 'monthly_records')
router.register('api/rehab_records', RehabMonthlyRecordViewset, 'rehab_record')
router.register('api/maternity', MaternityMonthlyRecordViewSet, 'maternity')
router.register('api/patient_case_study', PatientCaseStudyRecordViewSet, 'patient_case_study')
router.register('api/staff_recognition_case_study', StaffRecognitionCaseStudyViewSet, 'staff_recognition_case_study')
router.register('api/community_health', CommunityHealthMonthlyRecordViewset, 'community_health_record')
router.register('api/nicu_paed', NICUPaedsMonthlyRecordViewSet, 'nicu_paed')
router.register('api/user', CustomUserViewSet, 'user'),
router.register('api/department', DepartmentViewSet, 'department'),
router.register('api/role', RoleViewSet, 'role')
router.register('api/monthly_record_primary_data', MonthlyRecordPrimaryDataViewSet, 'monthly_record_primary_data')
router.register('api/discharged_alive_patient_record', DischargedAlivePatientRecordViewSet, 'discharged_alive_patient_record')
router.register('api/patient_died_before_48h_records', PatientDiedBefore48hRecordsViewSet, 'patient_died_before_48h_records')
router.register('api/patient_died_after_48h_records', PatientDiedAfter48hRecordsViewSet, 'patient_died_after_48h_records')
router.register('api/self_discharged_records', SelfDischargedRecordsViewSet, 'self_dicharged_records')
router.register('api/stayed_in_the_ward_records', StayedInTheWardRecordsViewSet, 'stayed_in_the_ward_records')
router.register('api/admission_records', AdmissionRecordsViewSet, 'admission_records')

urlpatterns = [
    path('', include(router.urls)),
    path('api/token/refresh', TokenRefreshView),
    path('api/token/obtain', ObtainTokenPairWithUsernameView.as_view()),
    url(r'^department$',departmentApi),
    url(r'^department/([0-9]+)$',departmentApi),
    url(r'^monthlyRecordPrimaryData$',monthlyRecordPrimaryDataApi),
    url(r'^monthlyRecordPrimaryData/([0-9]+)$',monthlyRecordPrimaryDataApi),

]