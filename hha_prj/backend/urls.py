from rest_framework import routers
from .api import MonthlyRecordViewSet, NICUPaedsViewSet

router = routers.DefaultRouter()
router.register('api/monthly_records', MonthlyRecordViewSet, 'monthly_records')
router.register('api/nicu_paed', NICUPaedsViewSet, 'nicu_paed')
urlpatterns = router.urls