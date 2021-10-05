from django.db import models

# Create your models here.
class MonthlyRecord(models.Model):
    description = models.CharField(max_length=100, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

class RehabMonthlyRecord(models.Model):
    month_name = models.CharField(max_length=15)
    beds_available = models.PositiveSmallIntegerField()
    bed_days = models.PositiveSmallIntegerField()
    patient_days = models.PositiveSmallIntegerField()
    hospitalized = models.PositiveSmallIntegerField()
    discharged_alive = models.PositiveSmallIntegerField()
    died_before_48_h = models.PositiveSmallIntegerField()
    died_after_48_h = models.PositiveSmallIntegerField()
    days_hospitalized = models.PositiveSmallIntegerField()
    referrals = models.PositiveSmallIntegerField()
    transfers = models.PositiveSmallIntegerField()
    self_discharged = models.PositiveSmallIntegerField()
    stayed_in_the_ward = models.PositiveSmallIntegerField()
    admissions = models.PositiveSmallIntegerField()

    def __str__(self):
        return 'Rehab Record'