from rest_framework import routers
from .api import MonthlyRecordViewSet, RehabMonthlyRecordViewset, MaternityMonthlyRecordViewSet

router = routers.DefaultRouter()
router.register('api/monthly_records', MonthlyRecordViewSet, 'monthly_records')
router.register('api/rehab_records', RehabMonthlyRecordViewset, 'rehab_record')
router.register('api/maternity', MaternityMonthlyRecordViewSet, 'maternity')

urlpatterns = router.urls