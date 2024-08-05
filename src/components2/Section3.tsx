import React from 'react';
import { FiPercent, FiFileText, FiCheckCircle } from 'react-icons/fi';

const Section5 = () => {
  return (
    <div className='bg-white'>
    <div className="bg-white py-12 max-w-7xl mx-auto mr-0">
      <h2 className="text-3xl font-bold text-center mb-2">Get Your Virtual Office Up And Running In <span className="text-indigo-600">3 Easy Steps!</span></h2>
      <p className="text-center text-gray-500 mb-12">Procedure to obtain Virtual office address.</p>

      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
        
        {/* Step 1 */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-purple-600 p-6 rounded-full mb-4 animate-bounce">
            <FiPercent className="text-black text-4xl" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Connect With RegisterKaro</h3>
          <p className="text-gray-500 max-w-xs">
            Reach out to our friendly customer support team through chat, email, or phone. They'll guide you through the process.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-purple-600 p-6 rounded-full mb-4 animate-bounce">
            <FiFileText className="text-black text-4xl" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Give Essential Details & Documents</h3>
          <p className="text-gray-500 max-w-xs">
            Upload essential documents required for registration, following our clear and secure guidelines.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-purple-600 p-6 rounded-full mb-4 animate-bounce">
            <FiCheckCircle className="text-black text-4xl" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Get Your Virtual Office Ready To Work</h3>
          <p className="text-gray-500 max-w-xs">
            Once your application is approved, your virtual office is activated instantly!
          </p>
        </div>

      </div>
    </div>
    </div>
  );
};

export default Section5;