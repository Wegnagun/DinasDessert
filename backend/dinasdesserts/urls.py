from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from desserts.views import DessertViewSet, IngredientViewSet
from news.views import NewsViewSet

admin.site.site_header = 'DinasDesserts - Десерты Дины'
admin.site.index_title = 'Разделы админки DinasDesserts'
admin.site.site_title = 'Админка сайта DinasDesserts'

router = routers.DefaultRouter()
router.register('desserts', DessertViewSet, basename='desserts')
router.register('news', NewsViewSet, basename='news')
router.register('ingredients', IngredientViewSet, basename='ingredients')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('users.urls')),
    path('api/', include(router.urls)),
]
