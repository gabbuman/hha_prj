from rest_framework import routers
from .api import CommunityHealthMonthlyRecordViewset, MonthlyRecordViewSet, RehabMonthlyRecordViewset, MaternityMonthlyRecordViewSet

router = routers.DefaultRouter()
router.register('api/monthly_records', MonthlyRecordViewSet, 'monthly_records')
router.register('api/rehab_records', RehabMonthlyRecordViewset, 'rehab_record')
router.register('api/maternity', MaternityMonthlyRecordViewSet, 'maternity')
router.register('api/community_health', CommunityHealthMonthlyRecordViewset, 'community_health_record')

urlpatterns = router.urls