import React from 'react';
import Image from 'next/image';


const logos = [
  { src: "/section61.png", alt: 'Spring House Coworking' },
  { src: "/section62.png", alt: 'Slack' },
  { src: "/section63.png", alt: 'WeWork' },
  { src: "/section64.png", alt: 'Oyo Workspaces' },
  { src: "/section65.png", alt: 'Razorpay' },
  { src: "/section66.png", alt: 'ICICI Bank' },
];

export default function Section6() {
  return (
    <div className="bg-white py-16 px-6 h-96">
      <div className=" mx-auto text-left">
      <h1 className="text-[40px] font-[600] leading-[32px] text-gray-800 mb-16 pl-40" style={{ fontFamily: 'Assistant' }}>
          Trusted by the world's largest companies.
        </h1>
        <div className="flex flex-wrap justify-center items-center space-x-10  m-auto" style={{width:1460, height:100}}>
          {logos.map((logo, index) => (
            <div key={index} className="p-2 transform hover:scale-105 transition duration-300">
              <Image src={logo.src} alt={logo.alt} width={170} height={100} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}