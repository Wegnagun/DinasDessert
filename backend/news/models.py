from django.db import models


class News(models.Model):
    """ Модель Новостей """

    title = models.CharField(
        max_length=250,
        verbose_name='Заголовок новости'
    )
    text = models.TextField(
        max_length=1000,
        verbose_name='Текст новости'
    )
    pub_date = models.DateTimeField(
        null=True,
        blank=True,
        verbose_name='Дата публикации',
        auto_now_add=True
    )
    image = models.ImageField(
        blank=True,
        verbose_name='Изображение',
        upload_to='news/images'
    )

    class Meta:
        ordering = ('-pub_date',)
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'

    def __str__(self):
        return self.title
