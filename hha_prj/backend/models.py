from django.db import models

# Create your models here.
class MonthlyRecord(models.Model):
    description = models.CharField(max_length=100, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

class NICUPaeds(models.Model):
    month = models.CharField(max_length=100,blank=False,auto_created=True)
    year = models.PositiveSmallIntegerField(blank=False)
    Beds_available = models.PositiveSmallIntegerField(blank=False,default=0)
    Bed_days = models.PositiveSmallIntegerField(blank=False,default=0)
    Patient_days = models.PositiveSmallIntegerField(blank=False,default=0)
    Hospitalized = models.PositiveSmallIntegerField(blank=False,default=0)
    Discharged_alive = models.PositiveSmallIntegerField(blank=False,default=0)
    Died_before_48h = models.PositiveSmallIntegerField(blank=False,default=0)
    Died_after_48h = models.PositiveSmallIntegerField(blank=False,default=0)
    Days_hospitalised = models.PositiveSmallIntegerField(blank=False,default=0)
    Referrals = models.PositiveSmallIntegerField(blank=False,default=0)
    Transfers = models.PositiveSmallIntegerField(blank=False,default=0)
    Self_discharged = models.PositiveSmallIntegerField(blank=False,default=0)
    Stayed_ward = models.PositiveSmallIntegerField(blank=False,default=0)
    Admissions = models.PositiveSmallIntegerField(blank=False,default=0)