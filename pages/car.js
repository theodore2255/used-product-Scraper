import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '@/components/Footer';
import SearchBar from '../components/SearchBar';
const Car = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Hero />
      <SearchBar />
        <Footer />
      </div>

  );
};

export default Car;
