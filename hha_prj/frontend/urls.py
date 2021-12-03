from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('header', views.index),
    path('login', views.index),
    path('register', views.index),
    path('rank', views.index),
    path('dptcard', views.index),
    path('homepage', views.index),
    path('cspreview', views.index),
    path('vernavbar', views.index),
    path('monthlyrecord', views.index),  
    path('dptrecordpage', views.index),
    path('createdepartment', views.index), 
    path('dpttableview', views.index),    
    path('dptgraphview', views.index),
    path('csinput', views.index),
    path('csindividual', views.index),
    path('actioncard', views.index),
    path('questionlist', views.index),    
    path('csgridview', views.index)  
]
