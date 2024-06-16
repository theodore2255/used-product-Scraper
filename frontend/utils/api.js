// frontend/utils/api.js

export const fetchCars = async (model, location) => {
  const response = await fetch(`/api/cars/?model=${model}&location=${location}`);
  if (!response.ok) {
    throw new Error('Failed to fetch car details');
  }
  return response.json();
};
