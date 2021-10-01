from django.apps import AppConfig


class MonthlyRecordsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'monthly_records'

class CaseStudyConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'case_study'
