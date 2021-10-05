from rest_framework import routers
from .api import MaternityMonthlyRecordViewSet, MonthlyRecordViewSet

router = routers.DefaultRouter()
router.register('api/monthly_records', MonthlyRecordViewSet, 'monthly_records')
router.register('api/maternity', MaternityMonthlyRecordViewSet, 'maternity')
urlpatterns = router.urls