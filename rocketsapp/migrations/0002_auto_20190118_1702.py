# Generated by Django 2.1.5 on 2019-01-19 01:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('rocketsapp', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='customerID',
            new_name='customer_ID',
        ),
    ]