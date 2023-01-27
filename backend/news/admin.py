from django.contrib import admin

from .models import News


@admin.register(News)
class DessertAdmin(admin.ModelAdmin):
    list_display = ('title', 'text', 'image', 'pub_date')
