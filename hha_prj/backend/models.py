from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.fields.json import JSONExact, JSONField
from django.db.models.fields.related import ForeignKey
from django.utils.translation import gettext as _ # aliasing gettext as _
from .managers import CustomUserManager


class Department(models.Model):
    name = models.CharField(unique=True, primary_key=True, max_length=50)
    created_at = models.DateTimeField(editable=False, auto_now_add=True)
    image = models.ImageField(upload_to="uploads/", null=True, default="uploads/default.jpg")
    
    def __str__(self):
        return self.name 

class Role(models.Model):
    name = models.CharField(unique=True, primary_key=True, max_length=50)
    created_at = models.DateTimeField(editable=False, auto_now_add=True)
    
    def __str__(self):
        return self.name 

class CustomUser(AbstractUser):
    username = models.CharField(_('username'), unique=True, max_length=50)
    department = models.ForeignKey(Department, on_delete=models.PROTECT, default="Rehab", blank=True)
    role = models.ForeignKey(Role, on_delete=models.PROTECT, default="Staff", blank=True)
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()
    
    def __str__(self):
        return "%s %s" % (self.username, self.department)

class MonthlyRecord(models.Model):
    monthly_record_id = models.AutoField(primary_key=True)
    department = models.ForeignKey(Department, on_delete=models.PROTECT)
    class Months(models.IntegerChoices):
        January = 1
        February = 2
        March = 3
        April = 4
        May = 5
        June = 6
        July = 7
        August = 8
        September = 9
        October = 10
        November = 11
        December = 12

    month = models.IntegerField(choices=Months.choices)
    year = models.PositiveSmallIntegerField()

    question_answer_list = models.JSONField()
    class Meta:
        unique_together = ('month', 'year',)
        
class CurrentFieldsList(models.Model):
    list = models.JSONField(null=False,blank=False)
    department = models.OneToOneField(Department, on_delete=models.PROTECT)
    created_at = models.DateTimeField(editable=False, auto_now_add=True)
    
    def __str__(self):
        return self.name 
class DischargedAliveRehabGreenData(models.Model):
    monthly_record_id = models.ForeignKey(MonthlyRecord, on_delete=models.PROTECT)

    patient_discharged_diagnosis = models.CharField(max_length=20)
    patient_num_days_in_rehab = models.PositiveSmallIntegerField() 
    discharge_reason = models.CharField(max_length =100)
    discharge_outcome_ADLs_self_care = models.CharField(max_length=50)
    discharge_outcome_transfers_mobility = models.CharField(max_length=50)
    mobility_aid_device_given = models.CharField(max_length=50)
    discharge_location = models.CharField(max_length=50)
    discharge_employment_status = models.CharField(max_length=50)

class StayedInWardRehabGreenData(models.Model):
    monthly_record_id = models.ForeignKey(MonthlyRecord, on_delete=models.PROTECT)

    # Reason Not Yet Discharged
    not_ready_from_therapy_standpoint = models.PositiveSmallIntegerField()
    wound_care = models.PositiveSmallIntegerField()
    other_medical_reason = models.PositiveSmallIntegerField()
    financial_or_no_place_to_discharge = models.PositiveSmallIntegerField()

    # Length Of Stay of Current Inpatients
    _1_to_3_months = models.PositiveSmallIntegerField()
    _3_to_6_months = models.PositiveSmallIntegerField()
    _6_months_to_1_year = models.PositiveSmallIntegerField()
    _1_to_2_years = models.PositiveSmallIntegerField()
    _2_to_3_years = models.PositiveSmallIntegerField()
    more_than_3_years = models.PositiveSmallIntegerField()

class CaseStudyType(models.Model):
    name = models.CharField(unique=True, primary_key=True, max_length=50)
    created_at = models.DateTimeField(editable=False, auto_now_add=True)
    
    def __str__(self):
        return self.name 

class CaseStudy(models.Model):
    department = models.ForeignKey(Department, on_delete=models.PROTECT, default="Rehab", blank=True)
    type = models.ForeignKey(CaseStudyType, on_delete=models.PROTECT, default="Patient Story", blank=True)
    title = models.CharField(max_length=50, null=False, blank=False, default="Case Study Title")
    description = models.CharField(max_length=1000, null=False, blank=False, default="This is a description of a case study")
    image = models.ImageField(upload_to="uploads/", null=True, default="uploads/default.jpg")
    created_at = models.DateTimeField(editable=False, auto_now_add=True)

class BiomechanicalSupport(models.Model):
    department = models.ForeignKey(Department, on_delete=models.PROTECT)
    name = models.CharField(max_length=50, null=False, blank=False, default="Biomechanical Equipment name")
    description = models.CharField(max_length=1000, null=False, blank=False, default="A description of Biomechanical issue")
    image = models.ImageField(upload_to="uploads/", null=True, default="uploads/default.jpg")
    created_at = models.DateTimeField(editable=False, auto_now_add=True)