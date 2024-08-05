import React from 'react';

function Section2() {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 m-20" style={{ backgroundColor: '#FAFAFA' }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-around border-2 border-blue-500 p-12 md:px-48 gap-40" style={{ width: '1000px', height: '494px' }}>
        <div className="mt-28 w-64 md:w-[509px] text-left mb-8 md:mb-0" style={{ height: '494.9px' }}>
          <h2 className="text-4xl font-extrabold text: '#1C4670'" style={{ fontFamily: 'Montserrat', lineHeight: '58.51px' }}>
            FREE DOWNLOAD:
          </h2>
          <h3 className="text-xl font-semibold text: '#1C4670' mt-2 style={{ backgroundColor: '#1C4670' }}" >The Ultimate Checklist For Virtual Office 2024</h3>
          <p className="text-gray-200 mt-4">
            Discover the step-by-step procedures and essential considerations you need to know before setting up a Virtual Office in India.
          </p>
          <button className="px-6 py-3 mt-8 text-black" style={{ backgroundColor: '#FFA229', transition: 'all 0.3s ease-in-out' }}>
            Send Me The Checklist
          </button>
        </div>
        <div className="w-full md:w-[509px] flex justify-center" style={{ backgroundColor: '#FAFAFA' }}>
          <img src="/lsection2.png" alt="Virtual Office Checklist" className="w-64 h-auto shadow-lg" />
        </div>
      </div>
    </div>
  );
}

export default Section2;
