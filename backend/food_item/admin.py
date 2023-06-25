from django.contrib import admin
from .models import Establishment, Stall, Location, FoodItem, Genre
# Register your models here.

admin.site.register(Location)
admin.site.register(Establishment)
admin.site.register(Stall)
admin.site.register(Genre)
# admin.site.register(FoodItem)

@admin.register(FoodItem)
class FoodItemModel(admin.ModelAdmin): 
    list_display = ('foodName', 'genreId', 'locationId', 'establishmentId', 'stallId')