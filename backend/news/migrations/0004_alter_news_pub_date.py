# Generated by Django 4.1.5 on 2023-02-01 17:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('news', '0003_alter_news_text'),
    ]

    operations = [
        migrations.AlterField(
            model_name='news',
            name='pub_date',
            field=models.DateTimeField(auto_now_add=True, null=True, verbose_name='Дата публикации'),
        ),
    ]
