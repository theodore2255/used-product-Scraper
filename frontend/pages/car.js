// frontend/pages/CarPage.js

import { useState } from 'react';
import { fetchCars } from '../utils/api';
import FlipCard from '../components/FlipCard';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';

const CarPage = () => {
  const [model, setModel] = useState('');
  const [location, setLocation] = useState('');
  const [cars, setCars] = useState([]);

  const handleSearch = async () => {
    try {
      const carDetails = await fetchCars(model, location);
      console.log('Fetched car details:', carDetails);
      setCars(carDetails);
    } catch (error) {
      console.error('Error fetching car details:', error);
      setCars([]);
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Hero />
      <SearchBar
        model={model}
        setModel={setModel}
        location={location}
        setLocation={setLocation}
        handleSearch={handleSearch}
      />
      <main className="flex flex-wrap justify-center items-center gap-4 p-4">
        {cars.length === 0 ? (
          <p>No cars found.</p>
        ) : (
          cars.map((car, index) => (
            <FlipCard key={index} data={car} />
          ))
        )}
      </main>
    </div>
  );
};

export default CarPage;
