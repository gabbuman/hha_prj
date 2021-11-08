from django.utils.module_loading import import_string
from rest_framework import routers
from .api import CaseStudyTypeViewSet, CaseStudyViewSet
from .api import CurrentFieldListVietSet, MonthlyRecordViewSet 
from .api import CustomUserViewSet
from .api import DepartmentViewSet, RoleViewSet
from .views import ObtainTokenPairWithUsernameView, CheckCurrentMonthAdmissionStatus
from django.urls import path
from django.urls.conf import include
from rest_framework_simplejwt.views import TokenRefreshView
from django.conf import settings
from django.conf.urls.static import static

from django.conf.urls import url
from backend import views

router = routers.DefaultRouter()
router.register('api/current_field_list', CurrentFieldListVietSet, "current_field_list")
router.register('api/monthly_records', MonthlyRecordViewSet, 'monthly_records')
router.register('api/user', CustomUserViewSet, 'user'),
router.register('api/department', DepartmentViewSet, 'department'),
router.register('api/role', RoleViewSet, 'role')
router.register('api/case_study_type', CaseStudyTypeViewSet, 'case_study_type')
router.register('api/case_study', CaseStudyViewSet, 'case_study')

urlpatterns = [
    path('', include(router.urls)),
    path('api/token/refresh', TokenRefreshView),
    path('api/token/obtain', ObtainTokenPairWithUsernameView.as_view()),
    path('api/check_current_month_submission_status', CheckCurrentMonthAdmissionStatus)
]