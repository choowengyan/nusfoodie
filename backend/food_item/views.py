from django.shortcuts import get_object_or_404
from django.db.models import Count, Subquery, OuterRef
from django.db.models import Case, When, F
from django.contrib.postgres.search import SearchQuery, SearchRank, SearchVector
from django.http import JsonResponse, HttpResponse
from django.contrib.auth.models import User

from rest_framework import status, mixins, generics, viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.response import Response
from rest_framework.generics import ListAPIView, RetrieveAPIView, ListCreateAPIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework.exceptions import NotFound
from rest_framework.parsers import JSONParser
from rest_framework.decorators import APIView

from .models import Establishment, Location, Stall, Genre, FoodItem
from .serializers import UsersSerializer, EstablishmentSerializer, LocationSerializer, StallSerializer, GenreSerializer, FoodItemSerializer

# class FoodListAPIViewSet(viewsets.ModelViewSet):
#     queryset = FoodItem.objects.all()
#     serializer_class = FoodItemSerializer

# compare_param = openapi.Parameter('compare', openapi.IN_QUERY, description="Compare 2 programmes (format: ?compare=id,id)", type=openapi.TYPE_STRING)
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UsersSerializer


class FoodListAPIView(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin):
    queryset = FoodItem.objects.all()
    serializer_class = FoodItemSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = (TokenAuthentication,)

    def get(self, request):        
       return self.list(request)

    def post(self, request):
        return self.create(request)

class FoodDetailsAPIView(generics.GenericAPIView, mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin):
    queryset = FoodItem.objects.all()
    serializer_class = FoodItemSerializer
    authentication_classes = (TokenAuthentication,)
    lookup_field = 'id'

    def get(self, request, id):
        return self.retrieve(request, id=id)

    def put(self, request, id):
        return self.update(request, id=id)

    def delete(self, request, id):
        return self.destroy(request, id=id)

class StallListAPIView(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin):
    queryset = Stall.objects.all()
    serializer_class = StallSerializer
    authentication_classes = (TokenAuthentication,)

    def get(self, request):        
       return self.list(request)

    def post(self, request):
        return self.create(request)

class GenreListAPIView(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer
    authentication_classes = (TokenAuthentication,)

    def get(self, request):        
       return self.list(request)

    def post(self, request):
        return self.create(request)

class LocationListAPIView(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer
    authentication_classes = (TokenAuthentication,)

    def get(self, request):        
       return self.list(request)

    def post(self, request):
        return self.create(request)

class EstablishmentListAPIView(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin):
    queryset = Establishment.objects.all()
    serializer_class = EstablishmentSerializer
    authentication_classes = (TokenAuthentication,)

    def get(self, request):        
       return self.list(request)

    def post(self, request):
        return self.create(request)

class EstablishmentDetailsAPIView(generics.GenericAPIView, mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin):
    queryset = Establishment.objects.all()
    serializer_class = EstablishmentSerializer
    authentication_classes = (TokenAuthentication,)
    # lookup_field = 'id'

    def get(self, request, pk):
        return self.retrieve(request, pk=pk)

    def put(self, request, pk):
        return self.update(request, pk=pk)

    def delete(self, request, pk):
        return self.destroy(request, pk=pk)

class FoodListAPIView2(APIView):
    def get(self, request):        
        foodItems = FoodItem.objects.all()
        serializer = FoodItemSerializer(foodItems, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = FoodItemSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class FoodDetailsAPIView2(APIView):
    def get_object(self, id):
        try:
            return FoodItem.objects.get(id=id)

        except FoodItem.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
    
    def get(self, request, id):
        item = self.get_object(id)
        serializer = FoodItemSerializer(item)
        return Response(serializer.data, status=status.HTTP_200_OK)

class StallListAPIView2(APIView):
    def get(self, request):        
        stalls = Stall.objects.all()
        serializer = StallSerializer(stalls, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = StallSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class EstablishmentListAPIView2(APIView):
    def get(self, request):        
        establishments = Establishment.objects.all()
        serializer = EstablishmentSerializer(establishments, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = EstablishmentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class EstablishmentDetailsAPIView2(APIView):
    def get_object(self, pk):
        try:
            return Establishment.objects.get(pk=pk)

        except Establishment.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
    
    def get(self, request, pk):
        establishment = self.get_object(pk)
        serializer = EstablishmentSerializer(establishment)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        establishment = self.get_object(pk)
        serializer = EstablishmentSerializer(establishment, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

    def delete(self, request, pk):
        establishment = self.get_object(pk)
        establishment.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class LocationListAPIView2(APIView):
    def get(self, request):        
        locations = Location.objects.all()
        serializer = LocationSerializer(locations, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = LocationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class GenreListAPIView2(APIView):
    def get(self, request):        
        genres = Genre.objects.all()
        serializer = GenreSerializer(genres, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = GenreSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

