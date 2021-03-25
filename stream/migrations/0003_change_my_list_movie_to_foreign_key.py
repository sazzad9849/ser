# Generated by Django 3.1.5 on 2021-03-25 12:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("stream", "0002_add_moviedb_categories"),
    ]

    operations = [
        migrations.AlterField(
            model_name="mylist",
            name="movie",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="my_list",
                to="stream.movie",
            ),
        ),
        migrations.AlterField(
            model_name="usermoviehistory",
            name="movie",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE, to="stream.movie"
            ),
        ),
    ]