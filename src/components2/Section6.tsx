import React from 'react';

function Section6() {
  return (
    <div className="bg-white p-10 sm:px-6 lg:px-8 mt-1" style={{ height: '500px' }}>
      <div className="max-w-7xl m-auto relative flex flex-col items-center justify-center h-full">
        <div className="flex flex-wrap justify-center items-center space-x-4 mb-8">
          <img src="/section61.png" alt="Spring House" className="h-12" />
          <img src="/section62.png" alt="Slack" className="h-12" />
          <img src="/section63.png" alt="WeWork" className="h-12" />
          <img src="/section64.png" alt="Oyo Workspaces" className="h-12" />
          <img src="/section65.png" alt="Razorpay" className="h-12" />
          <img src="/section66.png" alt="ICICI Bank" className="h-12" />
        </div>
        <div className="relative w-full">
          <img src="/lsection6.png" alt="Background" className="w-full h-auto" />
          <div className="absolute inset-0 flex items-center justify-end" style={{  left: '50%',right:'-20%' }}>
            <div className="bg-gradient-to-r from-blue-900 to-pink-900 p-4 rounded-lg flex items-center justify-between space-x-4" style={{ width: '70%' }}>
              <div className="flex-grow flex items-center bg-white rounded-lg overflow-hidden h-20 ">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="p-3 h-full w-full bg-transparent border-0 focus:ring-0 focus:outline-none text-black placeholder-gray-500"
                />
                <button className="bg-gray-800 text-white px-6 py-3 h-full hover:bg-gray-700 transition-all duration-300 ease-in-out">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section6;
