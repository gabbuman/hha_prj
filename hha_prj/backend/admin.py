from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import CustomUser
from .models import CaseStudy
from .forms import CustomUserChangeForm, CustomUserCreationForm

class CustomUserAdmin(UserAdmin):
    model = CustomUser
    change_form = CustomUserChangeForm
    create_form = CustomUserCreationForm

    ordering = ('username',)
    search_fields = ('username',)

    # What is displayed on the admin change list page
    list_display = ('username', 'is_staff', 'is_active')
    list_filter = ('username', 'is_staff', 'is_active')

    change_fieldsets = (
        (None, {('username', 'password')}),
        ('Permissions', {'fields': ('is_staff', 'is_active')}),
    )
    create_fieldsets = (
        (None, {
            'classes': ('collapse', 'extrapretty'),
            'fields': ('username','password', 'is_staff', 'is_active')
        })
    )

admin.site.register(CustomUser, CustomUserAdmin)
