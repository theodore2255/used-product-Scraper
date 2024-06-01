from django.db import models

class Car(models.Model):
    model = models.CharField(max_length=100)
    year = models.IntegerField()
    kms_driven = models.IntegerField()
    fuel_type = models.CharField(max_length=50)
    transmission = models.CharField(max_length=50)
    price_rs = models.IntegerField()
    location = models.CharField(max_length=100)
    link = models.URLField()

    def __str__(self):
        return f"{self.model} - {self.location}"
