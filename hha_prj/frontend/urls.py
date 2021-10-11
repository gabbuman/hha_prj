from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('header', views.index),
    path('login', views.index),
    path('rank', views.index),
    path('dptcard', views.index),
    path('cspreview', views.index),
    path('vernavbar', views.index),
    path('monthlyrecord', views.index),
    path('dptrecordpage', views.index)    
]