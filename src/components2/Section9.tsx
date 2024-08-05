import React from 'react';
import Image from 'next/image';
import { FiPhone, FiMail } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Section9 = () => {
  return (
    <div className="relative flex flex-col md:flex-row justify-between items-center bg-white p-8 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(/lsection9.png)` }}></div>

      {/* Left Section: Form */}
      <div className="relative z-10 w-[400px] h-[410px] p-8 bg-cover bg-center" style={{ backgroundImage: `url(/bg.png)` }}>
        <h2 className="text-xl font-bold mb-2">Get in touch with us</h2>
        <p className="text-sm mb-4">
          Submit your Details to get an Instant <span className="font-semibold">All-inclusive Quote</span> to your email and a <span className="font-semibold">FREE Expert consultation</span>
        </p>
        <form className="space-y-4">
          <input type="text" placeholder="Your name" className="w-full p-2 border rounded" />
          <input type="text" placeholder="Mobile no." className="w-full p-2 border rounded" />
          <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
          <input type="text" placeholder="City" className="w-full p-2 border rounded" />
          <button className="w-full bg-blue-600 text-white p-2 rounded font-semibold hover:bg-blue-700 transition duration-300">
            Get a Detailed Quotation Now!
          </button>
        </form>
      </div>

      {/* Right Section: Contact Info */}
      <div className="relative z-10 w-[410px] h-[405px] mt-8 md:mt-0 flex flex-col items-center">
        {/* Image Section */}
        <div className="w-full flex justify-center items-center mb-4">
          <Image src="/header-logo.png" alt="Office" width={100} height={100} className="" />
        </div>

        <div className="text-center">
          <p className="text-lg font-bold mb-2">Feel free to connect with us</p>
          <div className="flex justify-center space-x-4 mb-4">
            <div className="flex items-center">
              <FiPhone className="mr-2" /> 
              <span>+91 93112 21210</span>
            </div>
            <div className="flex items-center">
              <FiMail className="mr-2" /> 
              <span>virtualoffice@teamco.work</span>
            </div>
          </div>
          <address className="not-italic mb-4">
            704, Palm Court, Mehrauli-Gurgaon Rd, Gurugram, Haryana, 122007
          </address>
          <div className="flex justify-center space-x-4">
            <FaFacebookF className="text-xl cursor-pointer hover:text-blue-600 transition duration-300" />
            <FaInstagram className="text-xl cursor-pointer hover:text-pink-500 transition duration-300" />
            <FaLinkedinIn className="text-xl cursor-pointer hover:text-blue-700 transition duration-300" />
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="relative z-10 w-[410px] h-[405px]">
        {/* Map Image */}
        <Image src="/map.png" alt="Map" width={410} height={405} className="rounded-lg shadow-md" />
      </div>
    </div>
  );
};

export default Section9;
