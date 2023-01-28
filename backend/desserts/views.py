from rest_framework import viewsets
from .models import Dessert


class DessertViewSet(viewsets.ModelViewSet):
    """ Контроллер десертов """
    queryset = Dessert.objects.all()
