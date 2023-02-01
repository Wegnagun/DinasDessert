from rest_framework import serializers

from .models import News


class NewsSerializer(serializers.ModelSerializer):
    """ Сериализатор модели новостей"""
    # pub_date = serializers.DateTimeField(format="%d-%m-%Y")

    class Meta:
        model = News
        fields = (
            'id',
            'title',
            'text',
            'pub_date',
            'image'
        )
