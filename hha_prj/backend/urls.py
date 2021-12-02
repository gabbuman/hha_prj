from django.utils.module_loading import import_string
from rest_framework import routers
from .api import CaseStudyTypeViewSet, CaseStudyViewSet, DischargedAliveRehabGreenDataViewSet,StayedInWardRehabGreenDataViewSet
from .api import CurrentFieldListViewSet, MonthlyRecordViewSet 
from .api import CustomUserViewSet
from .api import DepartmentViewSet, RoleViewSet
from .views import ObtainTokenPairWithUsernameView, CheckCurrentMonthAdmissionStatus
from .views import GetRecordDataByDateRange, GetCurrentFieldList, retrieveCaseStudiesForPreview, GetCaseStudies
from .views import GetQuestionsListByDateRange, DepartmentHomepageReminders

from django.urls import path
from django.urls.conf import include
from rest_framework_simplejwt.views import TokenRefreshView
from django.conf import settings
from django.conf.urls.static import static
from django.conf.urls import url
from backend import views


router = routers.DefaultRouter()
router.register('api/current_field_list', CurrentFieldListViewSet, "current_field_list")
router.register('api/monthly_records', MonthlyRecordViewSet, 'monthly_records')
router.register('api/discharged_alive_rehab_green_data', DischargedAliveRehabGreenDataViewSet, 'discharged_alive_rehab_green_data')
router.register('api/user', CustomUserViewSet, 'user'),
router.register('api/department', DepartmentViewSet, 'department'),
router.register('api/role', RoleViewSet, 'role')
router.register('api/case_study_type', CaseStudyTypeViewSet, 'case_study_type')
router.register('api/case_study', CaseStudyViewSet, 'case_study')
router.register('api/stayed_in_ward_rehab_green_data', StayedInWardRehabGreenDataViewSet, 'stayed_in_ward_rehab_green_data')

urlpatterns = [
    path('', include(router.urls)),
    path('api/token/refresh', TokenRefreshView),
    path('api/token/obtain', ObtainTokenPairWithUsernameView.as_view()),
    path('api/check_current_month_submission_status', CheckCurrentMonthAdmissionStatus),
    path('api/graph_data/', GetRecordDataByDateRange),  
    path('api/get_current_field_list/', GetCurrentFieldList),
    path('api/retrieve_case_studies_for_preview', retrieveCaseStudiesForPreview),
    path('api/get_case_studies/', GetCaseStudies),
    path('api/questions_by_date_range/', GetQuestionsListByDateRange),
    path('api/get_case_study_status/', DepartmentHomepageReminders)
]