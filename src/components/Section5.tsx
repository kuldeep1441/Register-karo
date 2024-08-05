import React from 'react';
import Image from 'next/image';

function Section5() {
  return (
    <div style={{ backgroundColor: '#F5F5F5' }} className="p-4 flex flex-col items-center">
      <div className="flex flex-col md:flex-row-reverse w-full max-w-7xl">
        {/* Right side for the single image */}
        <div className="md:w-1/3 w-full flex flex-col items-center md:items-start relative md:pr-8 mt-28 pl-10">
          <div className="relative w-full h-96 mb-4">
            <div className="relative w-[400px] h-[600px]">
              <Image src="/section51.png" alt="Main Image" layout="fill" objectFit="cover" className="rounded-md transform transition duration-500 hover:scale-105" />
            </div>
          </div>
        </div>

        {/* Left side for Text */}
        <div className="mr-10 md:w-2/3 w-full flex flex-col justify-center mt-10">
          <h2 className="text-3xl font-bold mt-0 mb-4">Use Virtual Address For</h2>
          <ul className="space-y-4">
            {[
              {
                title: 'Company Registration:',
                description: 'Enhance your professional image and organizational presence by choosing a virtual address over your residential one.',
                imgSrc: '/section54.png'
              },
              {
                title: 'Streamlined GST Registration:',
                description: 'Simplify your GST registration process through the use of a virtual address, meeting government requirements efficiently and affordably.',
                imgSrc: '/section55.png'
              },
              {
                title: 'Centralized Business Hub:',
                description: 'Establish your virtual office as the hub of your business operations, utilizing it as your official business and mailing address, ensuring efficient mail handling without physical office space constraints.',
                imgSrc: '/section56.png'
              },
              {
                title: 'Efficient Call Management:',
                description: 'Ensure seamless communication with clients and stakeholders by routing all calls to your virtual address, where a virtual receptionist provides professional and prompt responses.',
                imgSrc: '/section57.png'
              },
              {
                title: 'Flexible Meeting Solutions:',
                description: 'Impress investors and clients with access to fully-equipped meeting facilities, including boardrooms and conference rooms, available on-demand without the commitment of traditional office leases.',
                imgSrc: '/section58.png'
              }
            ].map(({ title, description, imgSrc }) => (
              <li key={title} className="flex items-start text-lg">
                <div className="flex-shrink-0 w-28 h-28 flex items-center justify-center mr-4">
                  <Image src={imgSrc} alt={title} width={107.86} height={107.86} className="rounded-full" />
                </div>
                <div>
                  <div className="font-bold text-blue-500">{title}</div>
                  {description}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Section5;
