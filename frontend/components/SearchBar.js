import { useState } from 'react';

const brandsData = {
  "Maruti Suzuki": {
    models: ["Alto", "Swift", "Baleno"]
  },
  "Hyundai": {
    models: ["i10", "i20", "Creta"]
  },
  "Tata Motors": {
    models: ["Nano", "Tiago", "Nexon"]
  },
  "Mahindra": {
    models: ["Thar", "XUV500", "Scorpio"]
  },
  "Toyota": {
    models: ["Corolla", "Fortuner", "Innova"]
  },
  "Kia": {
    models: ["Seltos", "Sonet", "Carnival"]
  },
  "Honda": {
    models: ["City", "Civic", "CR-V"]
  },
  "Ford": {
    models: ["Figo", "EcoSport", "Endeavour"]
  },
  "Renault": {
    models: ["Kwid", "Duster", "Triber"]
  },
  "Nissan": {
    models: ["Micra", "Sunny", "Kicks"]
  },
  "Volkswagen": {
    models: ["Polo", "Vento", "Tiguan"]
  },
  "Skoda": {
    models: ["Rapid", "Octavia", "Superb"]
  },
  "MG": {
    models: ["Hector", "Gloster", "Astor"]
  },
  "Jeep": {
    models: ["Compass", "Wrangler", "Cherokee"]
  },
  "Mercedes-Benz": {
    models: ["A-Class", "C-Class", "E-Class"]
  },
  "BMW": {
    models: ["X1", "X3", "X5"]
  },
  "Audi": {
    models: ["A3", "Q3", "Q7"]
  },
  "Volvo": {
    models: ["XC40", "XC60", "XC90"]
  },
  "Lexus": {
    models: ["ES", "RX", "NX"]
  },
  "Jaguar": {
    models: ["XE", "XF", "F-Pace"]
  },
  "Land Rover": {
    models: ["Defender", "Discovery", "Range Rover"]
  },
  "Porsche": {
    models: ["Cayenne", "Macan", "Panamera"]
  },
  "Mini": {
    models: ["Cooper", "Countryman", "Clubman"]
  },
  "Fiat": {
    models: ["Punto", "Linea", "500"]
  },
  "Datsun": {
    models: ["Go", "Go+", "Redi-Go"]
  },
  "Isuzu": {
    models: ["D-Max", "MU-X"]
  }
};

const SearchBar = () => {
  const [Brand, setBrand] = useState('');
  const [Year, setYear] = useState('');
  const [Model, setModel] = useState('');
  const [Kilometers, setKilometers] = useState('');
  const [Owner, setOwner] = useState('');
  const [Car_location, setCar_location] = useState('');

  const handleBrandChange = (e) => {
    setBrand(e.target.value);
    setModel('');
  };

  const handleModelChange = (e) => {
    setModel(e.target.value);
  };

  const handleSearch = () => {
    // Implement your search logic here
    console.log({ Brand, Year, Model, Kilometers, Owner, Car_location });
  };

  const models = Brand ? brandsData[Brand].models : [];

  const kmRanges = [
    { label: '0 - 10,000', value: '0-10000' },
    { label: '10,001 - 20,000', value: '10001-20000' },
    { label: '20,001 - 30,000', value: '20001-30000' },
    { label: '30,001 - 40,000', value: '30001-40000' },
    { label: '40,001 - 50,000', value: '40001-50000' },
    { label: '50,001 - 100,000', value: '50001-100000' },
    { label: '100,001 - 200,000', value: '100001-200000' },
    { label: '200,000 above', value: '200001 above' },
  ];

  return (
    <div className='ms-8 px-10 mt-12 padding-x padding-y max-width flex items-center justify-center scale-110'  id="discover">
      <div className='home__text-container '>
        <select 
          value={Year} 
          onChange={(e) => setYear(e.target.value)} 
          className="p-2 border rounded mb-4"
        >
          <option value="2024">2024</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
        <option value="2017">2017</option>
        <option value="2016">2016</option>
        <option value="2015">2015</option>
        <option value="2014">2014</option>
        <option value="2013">2013</option>
        <option value="2012">2012</option>
        <option value="2011">2011</option>
        <option value="2010">2010</option>
        <option value="2009">2009</option>
        <option value="2008">2008</option>
        <option value="2007">2007</option>
        <option value="2006">2006</option>
        <option value="2005">2005</option>
        <option value="2004">2004</option>
        <option value="2003">2003</option>
        <option value="2002">2002</option>
        <option value="2001">2001</option>
        <option value="2000">2000</option>
        <option value="1999">1999</option>
        <option value="1998">1998</option>
        <option value="1997">1997</option>
        <option value="1996">1996</option>
        <option value="1995">1995</option>
        <option value="1994">1994</option>
        <option value="1993">1993</option>
        <option value="1992">1992</option>
        <option value="1991">1991</option>
        <option value="1990">1990</option>
        <option value="1989">1989</option>
        <option value="1988">1988</option>
        <option value="1987">1987</option>
        <option value="1986">1986</option>
        <option value="1985">1985</option>
        <option value="1984">1984</option>
        <option value="1983">1983</option>
        <option value="1982">1982</option>
        <option value="1981">1981</option>
        <option value="1980">1980</option>
        </select>
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
          onChange={handleModelChange} 
          className="p-2 border rounded mb-4"
        >
          <option value="">Select Model</option>
          {models.map((model) => (
            <option key={model} value={model}>{model}</option>
          ))}
        </select>
        <select 
          value={Kilometers} 
          onChange={(e) => setKilometers(e.target.value)} 
          className="p-2 border rounded mb-4"
        >
          <option value="">Select Kilometers Driven</option>
          {kmRanges.map(range => (
            <option key={range.value} value={range.value}>{range.label}</option>
          ))}
        </select>
        <select 
          value={Owner} 
          onChange={(e) => setOwner(e.target.value)} 
          className="p-2 border rounded mb-4"
        >
          <option value="">Select Owner</option>
          <option value="First">First</option>
          <option value="Second">Second</option>
          <option value="Third">Third</option>
        </select>
        <input 
          type="text" 
          placeholder="Car Location" 
          value={Car_location} 
          onChange={(e) => setCar_location(e.target.value)} 
          className="p-2 border rounded mb-4 " 
        />
        <button 
          
          onClick={handleSearch} 
          className="bg-red-400  hover:bg-red-500 text-white px-10 py-2 rounded"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
