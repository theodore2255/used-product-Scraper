// pages/car.js
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
    const carDetails = await fetchCars(model, location);
    console.log('Fetched car details:', carDetails); // Add this line
    setCars(carDetails);
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
        {cars.map((car, index) => (
          <FlipCard key={index} data={car} /> 
        ))}
      </main>
    </div>
  );
};

export default CarPage;
