from django.db import models

# Create your models here.
class MonthlyRecord(models.Model):
    description = models.CharField(max_length=100, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

class NICUPaeds(models.Model):
    month = models.CharField(max_length=100,blank=False,auto_created=True)
    year = models.IntegerField(blank=True)
    Beds_available = models.IntegerField(blank=True)
    Bed_days = models.IntegerField(blank=True)
    Patient_days = models.IntegerField(blank=True)
    Hospitalized = models.IntegerField(blank=True)
    Discharged_alive = models.IntegerField(blank=True)
    Died_before_48h = models.IntegerField(blank=True)
    Died_after_48h = models.IntegerField(blank=True)
    Days_hospitalised = models.IntegerField(blank=True)
    Referrals = models.IntegerField(blank=True)
    Transfers = models.IntegerField(blank=True)
    Self_discharged = models.IntegerField(blank=True)
    Stayed_ward = models.IntegerField(blank=True)
    Admissions = models.IntegerField(blank=True)