from django.db import models

# Create your models here.
class MonthlyRecord(models.Model):
    description = models.CharField(max_length=100, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

class CaseStudy(models.Model):
    description = models.CharField(max_length=100, blank=True)
    photo_url = models.CharField(max_length=200, blank=True)
    video_url = models.CharField(max_length=200, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)