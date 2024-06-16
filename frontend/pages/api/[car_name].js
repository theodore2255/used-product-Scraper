// pages/api/[car_name].js

import axios from 'axios';

export default async function handler(req, res) {
  const { car_name } = req.query;

  try {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/cars/api/${car_name}/`);
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching cars:", error);
    res.status(500).json({ error: 'Error fetching cars' });
  }
}
