// components/SearchBar.js
import React from 'react';

const SearchBar = ({ model, setModel, location, setLocation, handleSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <div className="flex justify-center items-center p-4">
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="text"
          placeholder="Enter car model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="border rounded p-2 m-2"
        />
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border rounded p-2 m-2"
        />
        <button type="submit" className="bg-blue-500 text-white rounded p-2 m-2">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
