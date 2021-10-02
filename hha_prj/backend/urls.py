from rest_framework import routers
from .api import MonthlyRecordViewSet

router = routers.DefaultRouter()
router.register('api/monthly_records', MonthlyRecordViewSet, 'monthly_records')

urlpatterns = router.urls