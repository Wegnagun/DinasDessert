from rest_framework import viewsets

from desserts.permissions import IsAdminOrReadOnly
from .models import News
from .serializers import NewsSerializer


class NewsViewSet(viewsets.ModelViewSet):
    """ Контроллер новостей. """

    queryset = News.objects.all()
    serializer_class = NewsSerializer
    permission_classes = (IsAdminOrReadOnly,)
