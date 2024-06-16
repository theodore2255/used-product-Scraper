# backend/cars/views.py

from rest_framework import generics
from .models import Car
from .serializers import CarSerializer

class CarList(generics.ListAPIView):
    queryset = Car.objects.all()
    serializer_class = CarSerializer
