"use client"; // Add this line at the top

import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    image: '/dabur.png', // Replace with actual path
    text: "The LaunchWise team is very professional and 100% transparent. We would surely recommend them to everyone who wants to have a new business setup or those who already have a company. Their experts are thorough with all corners of business. They have surely earned us as their permanent client.",
    author: "Sunil Duggal, CEO, Dabur Healthcare",
  },
  {
    id: 2,
    image: '//dabur.png', // Replace with actual path
    text: "Another testimonial text here.",
    author: "Another Person, Position, Company",
  },
  {
    id: 3,
    image: '//dabur.png', // Replace with actual path
    text: "Yet another testimonial text here.",
    author: "Yet Another Person, Position, Company",
  },
];

const Section7 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className='bg-white mt-6'>
    <div className="bg-white py-12 ">
      <h2 className="text-3xl font-bold text-center mb-12">CLIENT TESTIMONIAL</h2>
      
      <div className="relative flex items-center justify-center">
        
        {/* Left Arrow */}
        <button
          className="absolute left-0 transform -translate-y-1/2 p-3 bg-gray-200 rounded-full hover:bg-gray-300"
          onClick={goToPrevious}
        >
          <FaChevronLeft className="text-gray-600" />
        </button>

        {/* Testimonial Content */}
        <div className="flex flex-col md:flex-row items-center text-center justify-between md:text-left space-y-6 md:space-y-0 md:space-x-6 max-w-7xl mx-auto">
          <img
            src={testimonials[currentIndex].image}
            alt="Client logo"
            className="w-32 h-32 object-contain mr-9"
          />
          <div className="flex flex-col maxwidth-[300px]">
            <p className="text-gray-600">{testimonials[currentIndex].text}</p>
            <p className="font-semibold mt-4">{testimonials[currentIndex].author}</p>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          className="absolute right-0 transform -translate-y-1/2 p-3 bg-gray-200 rounded-full hover:bg-gray-300"
          onClick={goToNext}
        >
          <FaChevronRight className="text-gray-600" />
        </button>
      </div>
    </div>
    </div>
  );
};

export default Section7;