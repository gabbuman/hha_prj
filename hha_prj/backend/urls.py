from django.utils.module_loading import import_string
from rest_framework import routers
from .api import AnswerListViewSet, CommunityHealthMonthlyRecordViewset, MonthlyRecordViewSet , CurrentFieldListVietSet
from .api import RehabMonthlyRecordViewset, MaternityMonthlyRecordViewSet
from .api import CustomUserViewSet, NICUPaedsMonthlyRecordViewSet, PatientCaseStudyRecordViewSet
from .api import StaffRecognitionCaseStudyViewSet, DepartmentViewSet, RoleViewSet
from .views import ObtainTokenPairWithUsernameView, CheckCurrentMonthAdmissionStatus
from django.urls import path
from django.urls.conf import include
from rest_framework_simplejwt.views import TokenRefreshView

from django.conf.urls import url
from backend import views

router = routers.DefaultRouter()
router.register('api/current_field_list', CurrentFieldListVietSet, "current_field_list")
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
router.register('api/answer_list', AnswerListViewSet, 'answer_list')


urlpatterns = [
    path('', include(router.urls)),
    path('api/token/refresh', TokenRefreshView),
    path('api/token/obtain', ObtainTokenPairWithUsernameView.as_view()),
    path('api/check_current_month_submission_status', CheckCurrentMonthAdmissionStatus)
]