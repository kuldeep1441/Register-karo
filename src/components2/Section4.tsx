import React from 'react';

function Section4() {
  return (
    <div className="flex justify-center items-center py-10" style={{background: '#FAFAFA'}}>
      <div className="flex flex-col justify-between md:flex-row items-center rounded-lg p-6 max-w-7xl mx-auto" style={{ gap: '20px' ,background: '#FAFAFA'
}}>
        {/* Left Column */}
        <div className="flex-shrink-0 w-full md:w-1/2" style={{ height: '400px',width: '400px' }}>
          <img
            src="/lsection4.png"
            alt="Office Building"
            className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
          />
        </div>
        {/* Right Column */}
        <div className="w-full md:w-1/2 lg:pl-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Accessible. Affordable. Adaptable.</h2>
          <p className="text-sm text-gray-600 mb-8" style={{ fontFamily: 'Montserrat', fontSize: '12.1px', fontWeight: '400', lineHeight: '18.15px', textAlign: 'left' }}>
            Whether you're an established enterprise or a scaling startup, your Virtual office should drive your business forward. Our virtual office solutions take your business places! (Accessible. Affordable. Adaptable)
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Item */}
            <div className="flex flex-col items-start space-x-4">
              <div className="flex-shrink-0 p-2 bg-blue-100 rounded-full">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m4 0h-1v4h-1m-4-4h1v4H8m4 4H7v-2m0 0h5m-2-2v-4h-1m2 2h1v4h-1m1-2h5v-2M8 6V4m0 0h1m-1 0h4m1 0h2m-3 0h-1m-3 4h5m-2 0H9m4 0h-1" />
                </svg>
              </div>
              <div>
                <h3 className="text-md font-medium text-gray-800">Professional Image & Enhanced Credibility</h3>
                <p className="text-sm text-gray-600" style={{ fontFamily: 'Montserrat', fontSize: '12.1px', fontWeight: '400', lineHeight: '18.15px', textAlign: 'left' }}>
                  Elevate your company’s image and attract top talent with a professional virtual address for websites, business cards, and marketing materials.
                </p>
              </div>
            </div>
            {/* Second Item */}
            <div className="flex flex-col items-start space-x-4">
              <div className="flex-shrink-0 p-2 bg-blue-100 rounded-full">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <div>
                <h3 className="text-md font-medium text-gray-800">Unmatched Work Flexibility</h3>
                <p className="text-sm text-gray-600" style={{ fontFamily: 'Montserrat', fontSize: '12.1px', fontWeight: '400', lineHeight: '18.15px', textAlign: 'left' }}>
                  Improve work-life balance by eliminating commutes and allowing flexible schedules.
                </p>
              </div>
            </div>
            {/* Third Item */}
            <div className="flex flex-col items-start space-x-4">
              <div className="flex-shrink-0 p-2 bg-blue-100 rounded-full">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-3-3v6m-7 4h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-md font-medium text-gray-800">Streamlined Business Operations</h3>
                <p className="text-sm text-gray-600" style={{ fontFamily: 'Montserrat', fontSize: '12.1px', fontWeight: '400', lineHeight: '18.15px', textAlign: 'left' }}>
                  Access essential services like virtual assistants, answering services, and teleconferencing - all under one roof.
                </p>
              </div>
            </div>
            {/* Fourth Item */}
            <div className="flex flex-col items-start space-x-4">
              <div className="flex-shrink-0 p-2 bg-blue-100 rounded-full">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v16h16V4H4zm4 4h8v2H8V8z" />
                </svg>
              </div>
              <div>
                <h3 className="text-md font-medium text-gray-800">Scalable & Cost-Effective Solution</h3>
                <p className="text-sm text-gray-600" style={{ fontFamily: 'Montserrat', fontSize: '12.1px', fontWeight: '400', lineHeight: '18.15px', textAlign: 'left' }}>
                  Choose a virtual office plan that fits your needs and budget, with options for various locations and service levels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
