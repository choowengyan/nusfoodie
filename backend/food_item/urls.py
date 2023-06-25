from django.urls import path, include
from .views import UserViewSet, StallListAPIView, EstablishmentListAPIView, EstablishmentDetailsAPIView, FoodListAPIView, FoodDetailsAPIView, LocationListAPIView, GenreListAPIView
from rest_framework.routers import DefaultRouter

app_name = 'food_item'

router = DefaultRouter()
router.register('users', UserViewSet, basename='users')

urlpatterns = [
    # # path('', StallListAPIView.as_view()),
    path('stalls/', StallListAPIView.as_view(), name='list-stalls'),
    path('locations/', LocationListAPIView.as_view(), name='list-locations'),
    path('establishments/', EstablishmentListAPIView.as_view(), name='list-establishment'),
    path('establishments/<int:pk>/', EstablishmentDetailsAPIView.as_view(), name='establishment-details'),
    path('genre/', GenreListAPIView.as_view(), name='list-genre'),
    path('foodItems/', FoodListAPIView.as_view(), name='list-food'),
    path('foodItems/<int:id>/', FoodDetailsAPIView.as_view(), name='food-details'),
    path('api/', include(router.urls)),
]


