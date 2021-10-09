from django.utils.module_loading import import_string
from rest_framework import routers
from .api import MonthlyRecordViewSet, RehabMonthlyRecordViewset, MaternityMonthlyRecordViewSet, CustomUserViewSet
from .views import ObtainTokenPairWithUsernameView
from django.urls import path
from django.urls.conf import include
from rest_framework_simplejwt import views

router = routers.DefaultRouter()
router.register('api/monthly_records', MonthlyRecordViewSet, 'monthly_records')
router.register('api/rehab_records', RehabMonthlyRecordViewset, 'rehab_record')
router.register('api/maternity', MaternityMonthlyRecordViewSet, 'maternity')
router.register('api/user', CustomUserViewSet, 'user')

urlpatterns = [
    path('', include(router.urls)),
    #path('api/token/refresh', views.TokenRefresh.as_view()),
    path('api/token/obtain', ObtainTokenPairWithUsernameView)
]