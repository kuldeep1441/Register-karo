import React from 'react';
import Image from 'next/image';
import { FaMapMarkerAlt, FaMailBulk, FaDollarSign, FaPhoneAlt, FaExpand, FaHandsHelping, FaPeopleArrows } from 'react-icons/fa';

function Section4() {
  return (
    <div className="bg-white p-4 flex flex-col items-center">
      <div className="flex flex-col md:flex-row w-full max-w-7xl">
        {/* Left 50% for Images */}
        <div className="md:w-1/2 w-full flex flex-col items-center md:items-start p-2 relative mr-6">
          <div className="relative w-full h-72 mb-4">
            <div style={{ width: '292.1px', height: '307.27px', position: 'absolute', top: '112px', left: '233px' }}>
              <Image src="/section41.png" alt="Image 1" layout="fill" objectFit="cover" className="rounded-md transform transition duration-500 hover:scale-105" />
            </div>
            <div style={{ width: '292.1px', height: '307.27px', position: 'absolute', top: '321px', left: '44.6px', opacity: '0.5' }}>
              <Image src="/section43.png" alt="Image 2" layout="fill" objectFit="cover" className="rounded-md transform transition duration-500 hover:scale-105" />
            </div>
            <div style={{ width: '292.1px', height: '307.27px', position: 'absolute', top: '372px' }}>
              <Image src="/section42.png" alt="Image 3" layout="fill" objectFit="cover" className="rounded-md transform transition duration-500 hover:scale-105" />
            </div>
          </div>
        </div>
        
        {/* Right 50% for Text */}
        <div className="md:w-1/2 w-full p-4 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">Discover the Ultimate Workspace Solution</h1>
          <p className="text-gray-600 mb-8">
            From solo entrepreneurs to growing teams, find everything you need under one roof. Whether it’s pay-per-use plans or fixed desks, our flexible options cater to your unique work style, ensuring seamless productivity and success.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div>
              <ul className="space-y-4">
                {/* <li className="flex items-start text-lg"><FaMapMarkerAlt className="text-blue-500 mr-2 mt-1" /> <span><div className="font-bold">Prestigious Business Addresses:</div> Access to prestigious business addresses in key locations, enhancing your brand image and credibility.</span></li> */}
                <li className="flex items-start text-lg"><FaMailBulk className="text-blue-500 mr-2 mt-1" /> <span><div className="font-bold">Mail Handling Services:</div> Efficient management of mail and packages, including forwarding, scanning, and storage, ensuring seamless communication.</span></li>
                <li className="flex items-start text-lg"><FaDollarSign className="text-blue-500 mr-2 mt-1" /> <span><div className="font-bold">Flexibility and Cost-Effectiveness:</div> Enjoy the flexibility of virtual office solutions with customizable plans, avoiding the high costs associated with traditional office leases.</span></li>
                <li className="flex items-start text-lg"><FaExpand className="text-blue-500 mr-2 mt-1" /> <span><div className="font-bold">Business Expansion:</div> Expand your business footprint across India without the overhead costs of physical office space, enabling growth and scalability.</span></li>
              </ul>
            </div>
            <div>
              <ul className="space-y-4">
                <li className="flex items-start text-lg"><FaPeopleArrows className="text-blue-500 mr-2 mt-1" /> <span><div className="font-bold">Nationwide Presence:</div> Establish a presence in multiple cities across India without the need for physical office space.</span></li>
                <li className="flex items-start text-lg"><FaPhoneAlt className="text-blue-500 mr-2 mt-1" /> <span><div className="font-bold">Professional Call Answering:</div> Professional receptionists manage incoming calls with personalized greetings, providing a professional image for your business.</span></li>
                <li className="flex items-start text-lg"><FaHandsHelping className="text-blue-500 mr-2 mt-1" /> <span><div className="font-bold">Meeting Room Facilities:</div> Access to meeting rooms and conference facilities in various cities, allowing for seamless collaboration and client meetings.</span></li>
              </ul>
            </div>
          </div>
          <a href="#" className="mt-8 text-blue-600 hover:underline">Talk to an expert</a>
        </div>
      </div>
    </div>
  );
}

export default Section4;
