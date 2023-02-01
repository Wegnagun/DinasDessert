from rest_framework import viewsets
from rest_framework.permissions import IsAdminUser

from .models import User
from .serializers import UserSerializer


class UsersViewSet(viewsets.GenericViewSet):
    """ Контроллер пользователей. """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    search_fields = ('username',)
    permission_classes = (IsAdminUser,)
