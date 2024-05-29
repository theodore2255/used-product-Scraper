from rest_framework import serializers
from .models import Car

class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = ['model', 'year', 'kms_driven', 'fuel_type', 'transmission', 'price_rs', 'location', 'link']
