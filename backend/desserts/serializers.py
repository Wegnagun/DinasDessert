from rest_framework import serializers

from .models import Dessert


class DessertSerializer(serializers.ModelSerializer):
    """ Сериализатор модели десертов"""

    class Meta:
        model = Dessert
        fields = (
            'id',
            'name',
            'text',
            'pub_date',
            'image'
        )
