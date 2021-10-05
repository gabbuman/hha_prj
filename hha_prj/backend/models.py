from django.db import models

# Create your models here.
class MonthlyRecord(models.Model):
    description = models.CharField(max_length=100, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

class NICUPaeds(models.Model):
    month = models.CharField(max_length=100,blank=False,auto_created=True)
    year = models.PositiveSmallIntegerField(blank=True)
    Beds_available = models.PositiveSmallIntegerField(blank=True)
    Bed_days = models.PositiveSmallIntegerField(blank=True)
    Patient_days = models.PositiveSmallIntegerField(blank=True)
    Hospitalized = models.PositiveSmallIntegerField(blank=True)
    Discharged_alive = models.PositiveSmallIntegerField(blank=True)
    Died_before_48h = models.PositiveSmallIntegerField(blank=True)
    Died_after_48h = models.PositiveSmallIntegerField(blank=True)
    Days_hospitalised = models.PositiveSmallIntegerField(blank=True)
    Referrals = models.PositiveSmallIntegerField(blank=True)
    Transfers = models.PositiveSmallIntegerField(blank=True)
    Self_discharged = models.PositiveSmallIntegerField(blank=True)
    Stayed_ward = models.PositiveSmallIntegerField(blank=True)
    Admissions = models.PositiveSmallIntegerField(blank=True)