import axios from 'axios';

const API_URL = 'http://localhost:8000/api/cars/';

export const fetchCars = async (model, location) => {
  try {
    const response = await axios.get(API_URL, {
      params: { model, location }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching car details:', error);
    return [];
  }
};