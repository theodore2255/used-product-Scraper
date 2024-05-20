import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '@/components/Footer';
import SearchBar from '../components/SearchBar';
const Index = () => {
  return (
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col">
      <div class="h-1 bg-gray-200 rounded overflow-hidden">
        <div class="w-24 h-full bg-green-500"></div>
      </div>
      <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
        <h1 class="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Your stop for used products</h1>
        <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Welcome to My Used Product Scrapping Website! We're a dedicated team passionate about connecting sellers of pre-owned 
        items with interested buyers. We offer a diverse selection of used products at competitive prices. Our goal is to ensure a seamless 
        and hassle-free experience for both sellers and buyers alike. </p>
      </div>
    </div>
    <div class="flex flex-wrap justify-center sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://img.freepik.com/premium-vector/car-illustration-logo-design-concept-super-car-logo_695276-1164.jpg?w=740" />
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Used Vehicles</h2>
        <p class="text-base leading-relaxed mt-2">Tested and Certified Vehicles for sale at best prices</p>
        <a class="text-green-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://media.istockphoto.com/id/1057455004/vector/hand-hold-phone-logotype-hand-hold-smartphone.jpg?s=612x612&w=0&k=20&c=-RXiEdROvJMurKjA09aBGn4FJ2_qo_gIRMHdnV92oS4=" />
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Used Phone</h2>
        <p class="text-base leading-relaxed mt-2">Premium Quality</p>
        <a class="text-green-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>

  );
};

export default Index;
