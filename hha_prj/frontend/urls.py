from django.urls import path
from django.conf.urls import url
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
    path('dataentry', views.index),  
    path('dptpage', views.index),
    path('createdepartment', views.index), 
    path('dpttableview', views.index),    
    path('dptgraphview', views.index),
    path('csinput', views.index),
    path('csindividual', views.index),
    path('actioncard', views.index),
    path('questionlist', views.index),    
    path('csgridview', views.index),
    # url(r'^.*', views.index),
    path('csedit', views.index)  
]
