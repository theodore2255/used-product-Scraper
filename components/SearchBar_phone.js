import React, { useState } from 'react';

const brandsData = {
  "Apple": {
    models: ["iPhone 13", "iPhone 12", "iPhone 11"]
  },
  "Samsung": {
    models: ["Galaxy S21", "Galaxy S20", "Galaxy Note 20"]
  },
  "OnePlus": {
    models: ["9 Pro", "9", "8T"]
  },
  // Add more brands and models as needed
};

const UsedSmartphoneSearchBar = () => {
  const [Brand, setBrand] = useState('');
  const [Model, setModel] = useState('');
  const [Storage, setStorage] = useState('');
  const [Condition, setCondition] = useState('');
  const [Location, setLocation] = useState('');
  const [RAM, setRAM] = useState('');

  const handleBrandChange = (e) => {
    setBrand(e.target.value);
    setModel('');
  };

  const handleSearch = () => {
    // Implement your search logic here
    console.log({ Brand, Model, Storage, Condition, Location, RAM });
  };

  const models = Brand ? brandsData[Brand].models : [];

  const storageOptions = ["2GB","4GB","8GB","16GB","32GB","64GB", "128GB", "256GB", "512GB"];

  const conditions = ["Bad", "Fair", "Good","Flawless"];

  const ramOptions = ["4GB", "6GB", "8GB", "12GB", "16GB"];

  return (
    <div className='ms-8 px-10 mt-12 padding-x padding-y max-width flex items-center justify-center scale-110'>
      <div className='home__text-container'>
        <select 
          value={Brand} 
          onChange={handleBrandChange} 
          className="p-2 border rounded mb-4"
        >
          <option value="">Select Brand</option>
          {Object.keys(brandsData).map((brand) => (
            <option key={brand} value={brand}>{brand}</option>
          ))}
        </select>
        <select 
          value={Model} 
          onChange={(e) => setModel(e.target.value)} 
          className="p-2 border rounded mb-4"
        >
          <option value="">Select Model</option>
          {models.map((model) => (
            <option key={model} value={model}>{model}</option>
          ))}
        </select>
        <select 
          value={Storage} 
          onChange={(e) => setStorage(e.target.value)} 
          className="p-2 border rounded mb-4"
        >
          <option value="">Select Storage</option>
          {storageOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <select 
          value={RAM} 
          onChange={(e) => setRAM(e.target.value)} 
          className="p-2 border rounded mb-4"
        >
          <option value="">Select RAM</option>
          {ramOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <select 
          value={Condition} 
          onChange={(e) => setCondition(e.target.value)} 
          className="p-2 border rounded mb-4"
        >
          <option value="">Select Condition</option>
          {conditions.map((condition) => (
            <option key={condition} value={condition}>{condition}</option>
          ))}
        </select>
        <input 
          type="text" 
          placeholder="Location" 
          value={Location} 
          onChange={(e) => setLocation(e.target.value)} 
          className="p-2 border rounded mb-4" 
        />
        <button 
          onClick={handleSearch} 
          className="bg-red-400 hover:bg-red-500 text-white px-10 py-2 rounded"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default UsedSmartphoneSearchBar;
