import React from 'react';

const VirtualOffice = () => {
  return (
    <div className="relative font-sans mr-0">
      <div className="container mx-auto p-4 text-center">
        <div className="bg-blue-700 py-2 inline-block">
          <span>Flash sale</span>
          <span className="font-bold text-blue-700"> 20% Discount </span>
          <span className="text-blue-700">for New Clients, use code </span>
          <span className="font-bold text-blue-700">“QUICK20”</span>
          <span className="text-blue-700"> at Checkout!</span>
        </div>
      </div>
      <div className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 top-16 lg:top-24">
          <img
            src="/lsection1.jpg"
            alt="Office Background"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative container mx-auto py-16 px-4 flex flex-row lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 text-center text-white lg:text-left mb-8 lg:mb-0">
            <h1 className="text-4xl font-bold mb-4">
              Work From Anywhere, Grow Everywhere.
            </h1>
            <h2 className="text-2xl font-semibold mb-8">
              Get Your Instant Virtual Office
            </h2>
          </div>
          <div className="relative z-10 w-[400px] h-[410px] p-8 bg-cover bg-center shadow-lg rounded-lg" style={{ backgroundImage: `url(/bg.png)` }}>
            <h2 className="text-xl font-bold mb-2">Get in touch with us</h2>
            <p className="text-sm mb-4">
              Submit your Details to get an Instant{' '}
              <span className="font-semibold">All-inclusive Quote</span> to your
              email and a <span className="font-semibold">FREE Expert consultation</span>
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Mobile no."
                className="w-full p-2 border rounded"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                placeholder="City"
                className="w-full p-2 border rounded"
              />
              <button className="w-full bg-blue-600 text-white p-2 rounded font-semibold hover:bg-blue-700 transition duration-300">
                Get a Detailed Quotation Now!
              </button>
            </form>
          </div>
        </div>
        <div className="relative container mx-auto py-16 px-4 flex flex-row lg:flex-row items-center justify-between lg:justify-between mt-16 space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="bg-white p-4 rounded-lg shadow-lg text-center mx-2" style={{ height: 240, width: 220 }}>
            <div className="text-blue-500 mb-4">
              {/* Account Icon */}
              <svg
                className="w-10 h-10 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 14c1.66 0 2.99-1.34 2.99-3L19 5a3 3 0 00-6 0v6c0 1.66 1.34 3 3 3zm0 2c-2.21 0-4.2-.72-5.58-1.91C8.41 12.72 6 10.13 6 7.35 6 5.53 7.11 4 8.5 4s2.5 1.53 2.5 3.35c0 2.78 2.41 5.37 4.42 7.24C14.8 15.28 12.21 16 10 16H6v5c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-5h-2z"
                ></path>
              </svg>
            </div>
            <h4 className="font-bold text-xl mb-2">Unleash Flexibility</h4>
            <p>
              Work from anywhere in India with a prestigious virtual address.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg text-center mx-2" style={{ height: 240, width: 220 }}>
            <div className="text-blue-500 mb-4">
              {/* Account Icon */}
              <svg
                className="w-10 h-10 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 14c1.66 0 2.99-1.34 2.99-3L19 5a3 3 0 00-6 0v6c0 1.66 1.34 3 3 3zm0 2c-2.21 0-4.2-.72-5.58-1.91C8.41 12.72 6 10.13 6 7.35 6 5.53 7.11 4 8.5 4s2.5 1.53 2.5 3.35c0 2.78 2.41 5.37 4.42 7.24C14.8 15.28 12.21 16 10 16H6v5c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-5h-2z"
                ></path>
              </svg>
            </div>
            <h4 className="font-bold text-xl mb-2">Simplify Operations</h4>
            <p>
              Get a mailing address, access GST registration, and enjoy
              streamlined services.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg text-center mx-2" style={{ height: 240, width: 220 }}>
            <div className="text-blue-500 mb-4">
              {/* Account Icon */}
              <svg
                className="w-10 h-10 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 14c1.66 0 2.99-1.34 2.99-3L19 5a3 3 0 00-6 0v6c0 1.66 1.34 3 3 3zm0 2c-2.21 0-4.2-.72-5.58-1.91C8.41 12.72 6 10.13 6 7.35 6 5.53 7.11 4 8.5 4s2.5 1.53 2.5 3.35c0 2.78 2.41 5.37 4.42 7.24C14.8 15.28 12.21 16 10 16H6v5c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-5h-2z"
                ></path>
              </svg>
            </div>
            <h4 className="font-bold text-xl mb-2">Boost Credibility</h4>
            <p>
              Project a professional image and attract top talent nationwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualOffice;
