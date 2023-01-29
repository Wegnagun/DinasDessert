# Generated by Django 4.1.5 on 2023-01-29 11:26

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Dessert',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(error_messages={'unique': 'Десерт с таким названием уже создан.'}, max_length=250, unique=True, verbose_name='Наименование десерта')),
                ('text', models.TextField(verbose_name='Описание десерта')),
                ('image', models.ImageField(blank=True, upload_to='desserts/images', verbose_name='Изображение')),
                ('pub_date', models.DateTimeField(auto_now_add=True, verbose_name='Дата публикации')),
            ],
            options={
                'verbose_name': 'Десерт',
                'verbose_name_plural': 'Десерты',
                'ordering': ('-pub_date',),
            },
        ),
    ]
