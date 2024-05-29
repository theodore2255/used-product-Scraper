from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import CarSerializer
from .scraper import scrape_cars

class CarListView(APIView):
    def get(self, request):
        model = request.GET.get('model')
        location = request.GET.get('location')

        if not model or not location:
            return Response({"error": "Model and location are required parameters."}, status=status.HTTP_400_BAD_REQUEST)

        cars_data = scrape_cars(model, location)
        return Response(cars_data, status=status.HTTP_200_OK)
