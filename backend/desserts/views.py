from rest_framework import viewsets

from .models import Dessert, Ingredient
from .permissions import IsAdminOrReadOnly
from .serializers import DessertSerializer, IngredientSerializer


class DessertViewSet(viewsets.ModelViewSet):
    """ Контроллер десертов. """

    queryset = Dessert.objects.all()
    serializer_class = DessertSerializer
    permission_classes = (IsAdminOrReadOnly,)


class IngredientViewSet(viewsets.ModelViewSet):
    """ Контроллер ингредиентов. """

    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer
    filterset_fields = ('name',)
    search_fields = ('^name',)
