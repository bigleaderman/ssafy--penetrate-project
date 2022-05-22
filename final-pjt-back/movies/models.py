from django.db import models
from django.conf import settings
from django.core.validators import MinValueValidator, MaxValueValidator


# Create your models here.
class Genre(models.Model):
    name = models.CharField(max_length=50)

class Movie(models.Model):
    adult = models.BooleanField(default=False)
    backdrop_path = models.CharField(max_length=100)
    original_language = models.CharField(max_length=10)
    overview = models.TextField()
    popularity = models.FloatField()
    poster_path = models.CharField(max_length=100)
    released_date = models.DateField()
    title = models.CharField(max_length=50)
    vote_average = models.FloatField()
    is_active = models.BooleanField()
    genres = models.ManyToManyField(Genre)

class Score(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='scores')
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE, related_name='scores')
    number = models.IntegerField(default=0, validators=[MinValueValidator(0),MaxValueValidator(5)])
