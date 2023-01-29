from rest_framework import viewsets
from .models import Dessert
from .serializers import DessertSerializer


class DessertViewSet(viewsets.ModelViewSet):
    """ Контроллер десертов """
    queryset = Dessert.objects.all()
    serializer_class = DessertSerializer
