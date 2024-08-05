import React from 'react';

// Define the background image URL here
const backgroundImage = '/section1.png'; // Update the path accordingly

function Section1() {
  return (
    <div 
      className="relative w-full h-[729px] bg-cover bg-center"
      style={{ 
        backgroundImage: `url(${backgroundImage})`, 
      }}
    >
      <div className="absolute inset-0  bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-full h-[729px] text-white text-center px-4">
        <p className="text-sm mb-2">From a single desk to a whole building. The choice is yours.</p>
        <h1 className="text-4xl font-bold mb-6">Discover the Ultimate Workspace Solution</h1>
        <div className="w-full max-w-xl mx-auto mb-8 flex">
          <input 
            type="text" 
            placeholder="Search City" 
            className="w-full p-2 rounded-l-lg border border-gray-300"
          />
          <button className="p-2 bg-blue-500 text-white rounded-r-lg ml-2">Search</button>
        </div>
        <div className="w-full max-w-xl mx-auto">
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {['Delhi', 'Noida', 'Bangalore', 'Mumbai', 'Hyderabad', 'Chennai'].map(city => (
              <div 
                key={city} 
                className="flex flex-col items-center p-4 bg-white bg-opacity-25 rounded-md hover:bg-opacity-50 transition h-32"
              >
                <div className="w-16 h-16 bg-white flex items-center justify-center rounded-full mb-2">
                  <img 
                    src={`/${city.toLowerCase()}.png`} 
                    alt={city} 
                    className="w-12 h-12 object-cover"
                  />
                </div>
                <p className="text-sm">{city}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
