from rest_framework import routers
from .api import MonthlyRecordViewSet, CaseStudyViewSet

router = routers.DefaultRouter()
router.register('api/monthly_records', MonthlyRecordViewSet, 'monthly_records')
router.register('api/case_studies', CaseStudyViewSet, 'monthly_records')

urlpatterns = router.urls