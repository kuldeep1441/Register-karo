'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PhoneIcon, UserIcon } from '@heroicons/react/24/outline'; // Updated import paths for v2

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 shadow-md h-[110px]">
      <div className="container mx-auto flex items-center justify-between h-full px-6 md:px-8">
        {/* Container 1: Logo */}
        <div className="flex-shrink-0 ml-15 md:ml-10">
          <img src="/header-logo.png" alt="Logo" className="h-10 md:h-12" />
        </div>

        {/* Container 2: Navigation Links (Desktop) */}
        <div className="hidden md:flex flex-1 items-center justify-center space-x-8 text-gray-700">
          <Link href="/landing" className="hover:text-blue-600 text-lg font-medium transition">
            Workspace & Services
          </Link>
          <Link href="/landing" className="hover:text-blue-600 text-lg font-medium transition">
            Get started
          </Link>
          <Link href="/landing" className="hover:text-blue-600 text-lg font-medium transition">
            More
          </Link>
          <Link href="/landing" className="hover:text-blue-600 text-lg font-medium transition">
            Help
          </Link>
        </div>

        {/* Container 3: Call & Account Icons */}
        <div className="flex items-center space-x-4 md:space-x-6 mr-10">
          <Link href="/call" className="text-blue-500 hover:text-blue-600 flex items-center transition">
            <PhoneIcon className="h-6 w-6" />
          </Link>
          <div className="hidden md:block h-6 border-l border-gray-300 mx-4"></div>
          <Link href="/account" className="text-blue-500 hover:text-blue-600 flex items-center transition">
            <UserIcon className="h-6 w-6" />
          </Link>
        </div>

        {/* Container 4: Enquire Now Button */}
        <Link href="/enquire-now" className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          ENQUIRE NOW
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="block md:hidden text-blue-500 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div className="w-8 h-0.5 bg-blue-500 mb-1"></div>
          <div className="w-8 h-0.5 bg-blue-500 mb-1"></div>
          <div className="w-8 h-0.5 bg-blue-500"></div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-full bg-white shadow-md ${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <ul className="w-full flex flex-col items-center py-6 space-y-4">
          <li>
            <Link href="/workspace-services" className="text-lg font-semibold hover:text-blue-600 transition">
              Workspace & Services
            </Link>
          </li>
          <li>
            <Link href="/get-started" className="text-lg font-semibold hover:text-blue-600 transition">
              Get started
            </Link>
          </li>
          <li>
            <Link href="/more" className="text-lg font-semibold hover:text-blue-600 transition">
              More
            </Link>
          </li>
          <li>
            <Link href="/help" className="text-lg font-semibold hover:text-blue-600 transition">
              Help
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
