from django.contrib import admin
from django.contrib.auth.models import Group
from .models import Desert


@admin.register(Desert)
class DesertAdmin(admin.ModelAdmin):
    list_display = ('name', 'text', 'image', 'pub_date')


admin.site.unregister(Group)
