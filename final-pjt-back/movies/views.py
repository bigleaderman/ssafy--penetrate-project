from math import dist
from django.shortcuts import get_object_or_404
from django.db.models import Sum

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Movie, Score
from .serializers.movies import MovieSerializer
from .serializers.score import ScoreSerializer
from django.db.models import Q
import requests

# Create your views here.
@api_view(['GET'])
def movie(request):
    url = 'https://api.openweathermap.org/data/2.5/weather?lat=37&lon=126&appid=bc0f528e6e3d3bf21d81b9d6a5208af3'
    res = requests.get(url).json()
    weather = res.get('weather')[0].get('main')
    print(weather)
    weather_list = ['Thunderstorm', 'Drizzle', 'Rain', 'Snow', 'Atmosphere', 'Clear', 'Clouds']
    movie_genres_list = [[27, 53], [10402], [80, 28], [10749], [9648, 37], [35, 18], [10752, 12]]
    idx = weather_list.index(weather)
    if len(movie_genres_list[idx]) == 1:
        movies_weather = Movie.objects.annotate(score_sum=Sum('scores__number', distinct=True)).filter(genres=movie_genres_list[idx][0]).order_by('-vote_average')[:10]
    else:
        movies_weather = Movie.objects.annotate(score_sum=Sum('scores__number', distinct=True)).filter(Q(genres=movie_genres_list[idx][0]) | Q(genres=movie_genres_list[idx][1])).order_by('-vote_average')[:10]
    
    movies_now = Movie.objects.annotate(score_sum=Sum('scores__number', distinct=True)).filter(is_active=1)
    
    movies_top10_popular = Movie.objects.annotate(score_sum=Sum('scores__number', distinct=True)).order_by('-vote_average')[:10]
    
    movies_korea_top10 = Movie.objects.annotate(score_sum=Sum('scores__number', distinct=True)).filter(original_language='ko').order_by('-vote_average')[:10]
    
    movies_animation = Movie.objects.annotate(score_sum=Sum('scores__number', distinct=True)).filter(genres=16).order_by('-vote_average')[:10]
    result = list(movies_now) + list(movies_top10_popular) + list(movies_korea_top10) + list(movies_animation) + list(movies_weather)
    serializer = MovieSerializer(result, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_score(request, movie_pk):
    user = request.user
    movie = get_object_or_404(Movie, pk=movie_pk)
    score = movie.scores.filter(user=user).first()
    if not score:
        serializer = ScoreSerializer(data = request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(movie=movie, user=user)

            scores = movie.scores.all()
            serializer = ScoreSerializer(scores, many=True)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
        serializer = ScoreSerializer(score, data = request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(movie=movie, user=user)

            scores = movie.scores.all()
            serializer = ScoreSerializer(scores, many=True)
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['PUT', 'DELETE'])
def score_update_or_delete(request, movie_pk, score_pk):
    movie = get_object_or_404(Movie, pk=movie_pk)
    score = get_object_or_404(Score, pk=score_pk)

    def update_score():
        if request.user == score.user:
            serializer = ScoreSerializer(score, request.data)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                scores = movie.scores.all()
                serializer = ScoreSerializer(scores, many=True)
                return Response(serializer.data)

    def delete_score():
        if request.user == score.user:
            score.delete()
            scores = movie.scores.all()
            serializer = ScoreSerializer(scores, many=True)
            return Response(serializer.data)
    
    if request.method == 'PUT':
        return update_score()
    elif request.method == 'DELETE':
        return delete_score()