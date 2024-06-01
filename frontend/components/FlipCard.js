import React from 'react';

const FlipCard = ({ data }) => {
  const handleButtonClick = () => {
    window.location.href = data.Link;
  };

  return (
    <div className="mt-5 mr-5 mb-8 w-[400px] h-[350px] bg-transparent cursor-pointer group perspective">
      <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
        <div className="absolute backface-hidden border-2 w-full h-full">
          <h4 className="text-black text-xl font-bold">{data.Car}
            <p className="text-black text-lg font-semibold">{data.Price_Rs}</p>
          </h4>
          <img src={data.image} className="w-full h-full object-cover" alt={data.Car} />
        </div>
        <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-blue-200 overflow-hidden">
          <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
            <h1 className="text-3xl font-semibold">{data.Car}</h1>
            <p className="my-2"><b>Price:</b> {data.Price_Rs}</p>
            <p className="my-2"><b>Year:</b> {data.Year}</p>
            <p className="my-2"><b>Kilometers:</b> {data.KmS_Driven}</p>
            <p className="my-2"><b>Fuel Type:</b> {data.Fuel_Type}</p>
            <button 
              className="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125"
              onClick={handleButtonClick}
            >
              <div className="text-blue-500 cursor-pointer underline hover:text-blue-700">Go to page</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
