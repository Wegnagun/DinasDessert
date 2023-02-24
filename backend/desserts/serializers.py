from rest_framework import serializers

from .models import Dessert, Ingredient, IngredientInRecipe


class DessertSerializer(serializers.ModelSerializer):
    """ Сериализатор десертов. """

    ingredients = serializers.SerializerMethodField()

    class Meta:
        model = Dessert
        fields = (
            'id',
            'name',
            'text',
            'pub_date',
            'image',
            'ingredients'
        )

    @staticmethod
    def get_ingredients(obj):
        ingredients = IngredientInRecipe.objects.filter(dessert_parent=obj)
        return IngredientInRecipeSerializer(ingredients, many=True).data


class IngredientSerializer(serializers.ModelSerializer):
    """ Сериализатор модели ингредиентов. """

    class Meta:
        model = Ingredient
        fields = (
            'id',
            'name'
        )


class IngredientInRecipeSerializer(serializers.ModelSerializer):
    """ Сериализатор ингредиентов в дессерте. """

    id = serializers.PrimaryKeyRelatedField(
        source='ingredient',
        read_only=True
    )
    name = serializers.SlugRelatedField(
        source='ingredient',
        slug_field='name',
        read_only=True,
    )

    class Meta:
        model = IngredientInRecipe
        fields = ('id', 'name')


class AddIngredientSerializer(serializers.ModelSerializer):
    """ Сериализатор добавления ингредиентов. """

    id = serializers.PrimaryKeyRelatedField(
        source='ingredient', queryset=Ingredient.objects.all()
    )

    class Meta:
        model = IngredientInRecipe
        fields = ('id')

    def create(self, validated_data):
        return IngredientInRecipe.objects.create(
            ingredient=validated_data.get('id')
        )
