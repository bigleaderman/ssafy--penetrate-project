from rest_framework import serializers
from django.contrib.auth import get_user_model
from ..models import Score

User = get_user_model()


class ScoreSerializer(serializers.ModelSerializer):

    class Meta:
        model = Score
        fields = ('pk', 'number', 'content',)
