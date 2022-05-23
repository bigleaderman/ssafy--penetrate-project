from rest_framework import serializers
from ..models import Movie
from .score import ScoreSerializer



class MovieSerializer(serializers.ModelSerializer):
    scores = ScoreSerializer(many=True, read_only=True)
    score_count = serializers.IntegerField(source='scores.count', read_only=True)
    score_sum = serializers.IntegerField()


    class Meta:
        model = Movie
        fields = ('pk', 'adult', 'backdrop_path', 'original_language', 'overview',
        'popularity', 'poster_path', 'released_date', 'title', 'vote_average', 'genres', 'actors', 'director', 'scores', 'score_count','score_sum')