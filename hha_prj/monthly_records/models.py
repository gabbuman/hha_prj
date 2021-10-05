from django.db import models

# Create your models here.
class MonthlyRecord(models.Model):
    description = models.CharField(max_length=100, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

class RehabMonthlyRecord(models.Model):
    month_name = models.CharField(max_length=15)
    beds_available = models.PositiveIntegerField()
    bed_days = models.PositiveIntegerField()
    patient_days = models.PositiveIntegerField()
    hospitalized = models.PositiveIntegerField()
    discharged_alive = models.PositiveIntegerField()
    died_before_48_h = models.PositiveIntegerField()
    died_after_48_h = models.PositiveIntegerField()
    days_hospitalized = models.PositiveIntegerField()
    referrals = models.PositiveIntegerField()
    transfers = models.PositiveIntegerField()
    self_discharged = models.PositiveIntegerField()
    stayed_in_the_ward = models.PositiveIntegerField()
    admissions = models.PositiveIntegerField()

    def __str__(self):
        return 'Rehab Record'