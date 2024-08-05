import React from 'react';
import Image from 'next/image'; // Next.js Image component

function Section8() {
  return (
    <div className="bg-white md:items-start p-6 md:p-12 rounded-lg shadow-lg">
      <div className="flex flex-col m-auto md:flex-row items-center max-w-6xl md:space-x-36">
        
        {/* Left Section - Image */}
        <div className="md:w-[433px] md:h-[476px] w-full mb-6 md:mb-0 flex justify-center md:justify-start">
          {/* Placeholder for the image */}
          <div className="relative w-full h-full">
            <Image 
              src="/section8.png" 
              alt="Office Space" 
              layout="fill" 
              objectFit="cover" 
              className="rounded-lg" 
            />
          </div>
        </div>

        {/* Right Section - Text Content */}
        <div className="md:flex-1 w-full text-gray-700">
        <h1 className="text-[36px] font-light leading-[24px] mb-4" style={{ fontFamily: 'Assistant', textAlign: 'left' }}>
            Why Opt for Launchwise?
          </h1>
          <p className="mb-4">
            Delegate workspace customization and management to us, allowing you to concentrate on your core business activities while we ensure your workspace is primed for growth.
          </p>

          <div className="mb-4">
            <h3 className="text-xl font-semibold flex items-center">
              {/* Icon Placeholder */}
              <span className="mr-2">🗺️</span>
              Prime Nationwide Options
            </h3>
            <p className="text-gray-600">
              Explore our diverse and unparalleled portfolio of office spaces, offering the finest options strategically located across the nation.
            </p>
          </div>

          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Comprehensive Office Solutions</li>
            <li>Strategically Located Premium Spaces</li>
            <li>Cost-Effective Solutions with Modern Amenities</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Section8;
