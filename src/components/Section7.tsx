import React from 'react';
import Image from 'next/image';
import { FaPlay } from 'react-icons/fa';

const Section7 = () => {
  return (
    <div style={{ backgroundColor: '#F5F5F5' }} className="flex items-center justify-center py-12 px-2">
      <div className="flex w-full max-w-7xl h-96">
        <div className="flex w-3/5 relative">
          <Image
            src="/section7.png"
            alt="Main Testimonial"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
        <div className="w-2/5 flex flex-col justify-center text-right p-8">
          <h2 className="text-xl font-semibold mb-2">Client Testimonials</h2>
          <p className="text-sm text-gray-600">
            We love hearing feedback from our valued clients. Here's what some of our satisfied customers have to say about our services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section7;