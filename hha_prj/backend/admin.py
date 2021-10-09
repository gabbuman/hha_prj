from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import CustomUser
from .forms import CustomUserChangeForm, CustomUserCreationForm

class CustomUserAdmin(UserAdmin):
    model = CustomUser
    change_form = CustomUserCreationForm
    create_form = CustomUserCreationForm

    # What is displayed on the admin change list page
    list_display = ('username', 'is_staff', 'is_active')
    list_filter = ('username', 'is_staff', 'is_active')
    