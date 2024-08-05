import React from 'react';

function Section8() {
  return (
    <div>
    <div className="max-w-7xl mx-auto flex flex-col items-center py-10 mb-16 " style={{background: '#FAFAFA'}}>
      <h2 className="text-2xl font-semibold text-blue-600">Questions in mind?</h2>
      <p className="text-gray-600 mb-6">Read our FAQ</p>
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded shadow mb-3 p-4 cursor-pointer transition-transform transform hover:scale-105">
          <div className="flex justify-between items-center">
            <p className="text-gray-700">How can a virtual office benefit my business in India?</p>
            <span className="text-blue-600">+</span>
          </div>
        </div>
        <div className="bg-white rounded shadow mb-3 p-4 cursor-pointer transition-transform transform hover:scale-105">
          <div className="flex justify-between items-center">
            <p className="text-gray-700">Can I legally register my business using a virtual office address in India?</p>
            <span className="text-blue-600">+</span>
          </div>
        </div>
        <div className="bg-white rounded shadow mb-3 p-4 cursor-pointer transition-transform transform hover:scale-105">
          <div className="flex justify-between items-center">
            <p className="text-gray-700">How will I receive my business mail and packages with a virtual office?</p>
            <span className="text-blue-600">+</span>
          </div>
        </div>
        <div className="bg-white rounded shadow mb-3 p-4 cursor-pointer transition-transform transform hover:scale-105">
          <div className="flex justify-between items-center">
            <p className="text-gray-700">Can I use a virtual office address for official correspondence and marketing materials?</p>
            <span className="text-blue-600">+</span>
          </div>
        </div>
        <div className="bg-white rounded shadow p-4 cursor-pointer transition-transform transform hover:scale-105">
          <div className="flex justify-between items-center">
            <p className="text-gray-700">Do virtual office services in India include call answering and forwarding?</p>
            <span className="text-blue-600">+</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Section8;