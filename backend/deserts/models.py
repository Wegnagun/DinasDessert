from django.db import models


class Desert(models.Model):
    """ Модель Десертов """

    name = models.CharField(
        max_length=250,
        unique=True,
        verbose_name='Наименование десерта',
        error_messages={
            'unique': "Десерт с таким названием уже создан."
        },
    )
    text = models.TextField(
        verbose_name='Описание десерта'
    )
    image = models.ImageField(
        blank=True,
        verbose_name='Изображение',
        upload_to='deserts/images'
    )
    pub_date = models.DateTimeField(
        verbose_name='Дата публикации',
        auto_now_add=True
    )

    class Meta:
        ordering = ('-pub_date',)
        verbose_name = 'Рецепт'
        verbose_name_plural = 'Рецепты'

    def __str__(self):
        return self.name
