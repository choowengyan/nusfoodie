from django.db import models

# Create your models here.

class Location(models.Model):
    locationName = models.CharField(max_length=255)

    class Meta:
        verbose_name_plural = 'Locations'
        ordering = ['id']

    def __str__(self):
        return self.locationName

class Establishment(models.Model):
    locationId = models.ForeignKey(Location, on_delete=models.CASCADE)
    establishmentName = models.CharField(max_length=255)
    openingHours = models.CharField(max_length=255)
    # imageId = models.ImageField(upload_to='django_static/img/establishment_logos')

    def __str__(self):
        return self.establishmentName


class Stall(models.Model):
    establishmentId = models.ForeignKey(Establishment, on_delete=models.CASCADE)
    stallName = models.CharField(max_length=255)
    # imageId = models.ImageField(upload_to='django_static/img/stall_logos')

    def __str__(self):
        return self.stallName

class Genre(models.Model):
    genreName = models.CharField(max_length=255)

    def __str__(self):
        return self.genreName

class FoodItem(models.Model):
    locationId = models.ForeignKey(Location, on_delete=models.CASCADE)
    establishmentId = models.ForeignKey(Establishment, on_delete=models.CASCADE)
    stallId = models.ForeignKey(Stall, on_delete=models.CASCADE)
    genreId = models.ForeignKey(Genre, on_delete=models.CASCADE)
    foodName = models.CharField(max_length=255)
    # imageId = models.ImageField(upload_to='django_static/img/food_logos')

    def __str__(self):
        return self.foodName