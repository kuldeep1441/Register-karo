import React from 'react';

function Section5() {
  return (
    <div className="flex justify-center items-center py-10 bg-white">
      <div className="flex flex-col justify-between md:flex-row items-center bg-white rounded-lg p-6 max-w-7xl mx-auto" style={{ width: '1441px', height: '525px', padding: '25px 36px', gap: '10px' }}>
        {/* Left Column */}
        <div className="flex-1 flex flex-col justify-center" style={{ maxWidth: '400px' }}>
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 p-2 rounded-full flex items-center justify-center" style={{ width: '36px', height: '36px' }}>
              📞
            </div>
            <h2 className="text-xl font-semibold text-gray-800">Expert Guidance: Consultation and Company Formation</h2>
          </div>
          <p className="text-gray-600 mt-4">Book a free CONSULTATION with our CA/CS and company formation expert.</p>
          <button className="px-6 py-3 text-white mt-4 " style={{ backgroundColor: '#FFA229', transition: 'all 0.3s ease-in-out', borderRadius: '0.375rem' }}>
            Talk To An Expert
          </button>
        </div>
        {/* Right Column */}
        <div className="flex-1 relative flex justify-center items-center" style={{ maxWidth: '475px', height: '475px' }}>
          <img src="/lsection5.png" alt="Expert" className="rounded-lg w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}

export default Section5;
