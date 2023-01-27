from django.contrib import admin
from django.contrib.auth.models import Group
from .models import Dessert


@admin.register(Dessert)
class DessertAdmin(admin.ModelAdmin):
    list_display = ('name', 'text', 'image', 'pub_date')


admin.site.unregister(Group)
