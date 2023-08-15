from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('',views.index,name='index'),
path('planet/<int:planet_id>/', views.planet_detail, name='planet_detail'),

]