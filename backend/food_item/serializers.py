from rest_framework import serializers
from rest_framework.authtoken.views import Token
from django.contrib.auth.models import User

from .models import Establishment, Stall, Location, FoodItem, Genre


class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password']

        extra_kwargs = {'password':{
            'write-only': True,
            'required': True
        }}
    
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = ['id', 'locationName']

class EstablishmentSerializer(serializers.ModelSerializer):
    locationId = LocationSerializer(read_only=True)

    class Meta:
        model = Establishment
        fields = ['id', 'establishmentName', 'openingHours', 'locationId']

class StallSerializer(serializers.ModelSerializer):
    establishmentId = EstablishmentSerializer(read_only=True)

    class Meta:
        model = Stall
        fields = ['id', 'stallName', 'establishmentId']

class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = ['id', 'genreName']

class FoodItemSerializer(serializers.ModelSerializer):
    establishmentId = EstablishmentSerializer(read_only=True)
    locationId = LocationSerializer(read_only=True)
    genreId = GenreSerializer(read_only=True)
    stallId = StallSerializer(read_only=True)

    class Meta:
        model = FoodItem
        # fields = [ 
        #     'id', 'foodName',
        #     'locationId', 'establishmentId', 
        #     'stallId', 'genreId']
        fields = '__all__'

