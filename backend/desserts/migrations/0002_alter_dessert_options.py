# Generated by Django 4.1.5 on 2023-01-27 16:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('desserts', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='dessert',
            options={'ordering': ('-pub_date',), 'verbose_name': 'Десерт', 'verbose_name_plural': 'Десерты'},
        ),
    ]