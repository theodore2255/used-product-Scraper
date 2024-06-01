// components/SearchBar.js
const SearchBar = ({ model, setModel, location, setLocation, handleSearch }) => {
  return (
    <div className="flex justify-center items-center p-4">
      <input
        type="text"
        placeholder="Enter model"
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
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white rounded p-2 m-2"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
