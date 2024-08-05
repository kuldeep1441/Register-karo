import React from 'react';

const property = "h-[204px] rounded-tl-[16px] border-t-2 transform rotate-[0.4deg] flex items-center bg-white shadow-md p-4 max-w-full";

const Section2 = () => {
  return (
    <div className='bg-white max-w-full px-[16px] md:px-[150px] pt-8 pb-8'>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className={property}>
          <img src="/section21.png" alt="Our solutions" className="w-[95px] h-[95px] transform rotate-[0.17deg]" />
          <div className="ml-4 flex flex-col justify-center text-left w-full max-w-[calc(100%-110px)]">
            <h4 className="font-bold border-b-2 border-gray-700 pb-2 mb-2 text-blue-600">Our solutions</h4>
            <p className="relative text-gray-700 after:absolute after:content-['→'] after:text-blue-600 after:text-3xl after:left-0 after:bottom-[-32px]">Browse our full range of products and services</p>
          </div>
        </div>
        <div className={property}>
          <img src="/section22.png" alt="Talk to us" className="w-[95px] h-[95px] transform rotate-[0.17deg]" />
          <div className="ml-4 flex flex-col justify-center text-left w-full max-w-[calc(100%-110px)]">
            <h4 className="font-bold border-b-2 border-gray-700 pb-2 mb-2 text-blue-600">Talk to us</h4>
            <p className="relative text-gray-700 after:absolute after:content-['→'] after:text-blue-600 after:text-3xl after:left-0 after:bottom-[-32px]">Get advice from one of our experts 24/7</p>
          </div>
        </div>
        <div className={property}>
          <img src="/section23.png" alt="Book workspace" className="w-[95px] h-[95px] transform rotate-[0.17deg]" />
          <div className="ml-4 flex flex-col justify-center text-left w-full max-w-[calc(100%-110px)]">
            <h4 className="font-bold border-b-2 border-gray-700 pb-2 mb-2 text-blue-600">Book workspace</h4>
            <p className="relative text-gray-700 after:absolute after:content-['→'] after:text-blue-600 after:text-3xl after:left-0 after:bottom-[-32px]">Book meeting rooms and day offices now</p>
          </div>
        </div>
        <div className={property}>
          <img src="/section24.png" alt="Buy a Membership" className="w-[95px] h-[95px] transform rotate-[0.17deg]" />
          <div className="ml-4 flex flex-col justify-center text-left w-full max-w-[calc(100%-110px)]">
            <h4 className="font-bold border-b-2 border-gray-700 pb-2 mb-2 text-blue-600">Buy a Membership</h4>
            <p className="relative text-gray-700 after:absolute after:content-['→'] after:text-blue-600 after:text-3xl after:left-0 after:bottom-[-32px]">Access thousands of locations on demand</p>
          </div>
        </div>
        <div className={property}>
          <img src="/section25.png" alt="Explore our app" className="w-[95px] h-[95px] transform rotate-[0.17deg]" />
          <div className="ml-4 flex flex-col justify-center text-left w-full max-w-[calc(100%-110px)]">
            <h4 className="font-bold border-b-2 border-gray-700 pb-2 mb-2 text-blue-600">Explore our app</h4>
            <p className="relative text-gray-700 after:absolute after:content-['→'] after:text-blue-600 after:text-3xl after:left-0 after:bottom-[-32px]">Download our app and get started today</p>
          </div>
        </div>
        <div className={property}>
          <img src="/section26.png" alt="Set up a virtual office" className="w-[95px] h-[95px] transform rotate-[0.17deg]" />
          <div className="ml-4 flex flex-col justify-center text-left w-full max-w-[calc(100%-110px)]">
            <h4 className="font-bold border-b-2 border-gray-700 pb-2 mb-2 text-blue-600">Set up a virtual office</h4>
            <p className="relative text-gray-700 after:absolute after:content-['→'] after:text-blue-600 after:text-3xl after:left-0 after:bottom-[-32px]">Start building a real presence today</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
