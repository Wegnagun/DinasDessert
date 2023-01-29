from rest_framework import viewsets
from .models import News


class NewsViewSet(viewsets.ModelViewSet):
    """ Контроллер десертов """
    queryset = News.objects.all()
