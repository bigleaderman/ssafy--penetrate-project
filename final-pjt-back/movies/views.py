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
import datetime

# Create your views here.
@api_view(['GET'])
def movie(request):
    
    now = datetime.datetime.now().hour 
    if 5 <= now <= 10:
        time_idx = 0
    elif 11 <= now <= 16:
        time_idx = 1
    elif 17 <= now <= 22:
        time_idx = 2
    elif 23 <= now or now <= 4:
        time_idx = 3

    url = 'https://api.openweathermap.org/data/2.5/weather?lat=37&lon=126&appid=bc0f528e6e3d3bf21d81b9d6a5208af3'
    res = requests.get(url).json()
    weather = res.get('weather')[0].get('main')
    weather_list = ['Thunderstorm', 'Drizzle', 'Rain', 'Snow', 'Atmosphere', 'Clear', 'Clouds']
    
    movie_genres_list = [["공포", "스릴러"], ["음악", "애니메이션"], ["범죄", "액션"], ["로멘스", "티비영화"], ["미스테리", "서부"], ["코메디", "드라마"], ["전쟁", "모험"]]
    movie_time_list = ["가족", "역사", "판타지", "다큐멘터리"]
    idx = weather_list.index(weather)
    
    movies_time = Movie.objects.annotate(score_sum=Sum('scores__number', distinct=True)).filter(genres=movie_time_list[time_idx]).order_by('-vote_average')[:10]

    movies_weather = Movie.objects.annotate(score_sum=Sum('scores__number', distinct=True)).filter(Q(genres=movie_genres_list[idx][0]) | Q(genres=movie_genres_list[idx][1])).order_by('-popularity')[:10]
    
    movies_now = Movie.objects.annotate(score_sum=Sum('scores__number', distinct=True)).filter(is_active=1)
    
    movies_top10_popular = Movie.objects.annotate(score_sum=Sum('scores__number', distinct=True)).order_by('-vote_average').order_by('-popularity')[:10]
    
    movies_korea_top10 = Movie.objects.annotate(score_sum=Sum('scores__number', distinct=True)).filter(original_language='ko').order_by('-vote_average')[:10]
    
    movies_animation = Movie.objects.annotate(score_sum=Sum('scores__number', distinct=True)).filter(genres=16).order_by('-popularity')[:10]
    result = list(movies_now) + list(movies_weather) + list(movies_time) + list(movies_top10_popular) + list(movies_korea_top10) + list(movies_animation)
    serializer =  MovieSerializer(result, many=True)
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