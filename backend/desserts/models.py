from django.db import models


class Dessert(models.Model):
    """ Модель Десертов. """

    name = models.CharField(
        max_length=50,
        unique=True,
        verbose_name='Наименование десерта',
        error_messages={
            'unique': "Десерт с таким названием уже создан."
        },
    )
    short_description = models.TextField(
        max_length=100,
        verbose_name='Художественное описание десерта для карточки'
    )
    text = models.TextField(
        max_length=250,
        verbose_name='Описание десерта'
    )
    image = models.ImageField(
        blank=True,
        verbose_name='Изображение',
        upload_to='desserts/images'
    )
    pub_date = models.DateTimeField(
        blank=True,
        verbose_name='Дата публикации',
        auto_now_add=True
    )

    class Meta:
        ordering = ('-pub_date',)
        verbose_name = 'Десерт'
        verbose_name_plural = 'Десерты'

    def __str__(self):
        return self.name


class Ingredient(models.Model):
    """ Модель ингредиентов. """

    name = models.CharField(
        max_length=250,
        unique=True,
        verbose_name='Наименование ингредиента',
        db_index=True,
    )

    class Meta:
        verbose_name = 'Ингредиент'
        verbose_name_plural = 'Ингредиенты'
        ordering = ('name',)

    def __str__(self):
        return self.name


class IngredientInRecipe(models.Model):
    """ Модель ингредиентов в рецепте. """

    dessert_parent = models.ForeignKey(
        Dessert,
        on_delete=models.CASCADE,
        verbose_name='Рецепт',
        related_name='+'
    )
    ingredient = models.ForeignKey(
        Ingredient,
        on_delete=models.CASCADE,
        verbose_name='Название ингредиента в рецепте',
        related_name='+'
    )

    class Meta:
        verbose_name = 'Ингредиент в рецепте'
        verbose_name_plural = 'Ингредиенты в рецептах'
        constraints = [
            models.UniqueConstraint(
                fields=['ingredient', 'dessert_parent'],
                name='dessert_ingredient_unique',
            )
        ]

    def __str__(self) -> str:
        return (
            f"{self.ingredient} в рецепте {self.dessert_parent}"
        )
