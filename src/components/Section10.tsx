import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXing } from 'react-icons/fa';
import Image from 'next/image';

function Section10() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          
          {/* Left Section - Logo and Social Media */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <div className="mb-6">
              {/* Logo */}
              <Image src="/section10.png" alt="Logo" width={150} height={150} className="h-20" />
            </div>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              <a href="#" className="hover:text-white">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-white">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-white">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:text-white">
                <FaXing />
              </a>
            </div>
          </div>
          
          {/* Middle Section - Links */}
          <div className="w-full md:w-2/4 mb-6 md:mb-0 flex justify-between">
            <div className="w-1/4">
              <h6 className="font-semibold text-white mb-3">Services</h6>
              <ul>
                <li><a href="#" className="hover:text-white">Virtual Office</a></li>
                <li><a href="#" className="hover:text-white">GST Registration</a></li>
                <li><a href="#" className="hover:text-white">Coworking Spaces</a></li>
                <li><a href="#" className="hover:text-white">Business Registration</a></li>
                <li><a href="#" className="hover:text-white">Mailing Address</a></li>
                <li><a href="#" className="hover:text-white">Dedicated Desk</a></li>
              </ul>
            </div>
            <div className="w-1/4">
              <h6 className="font-semibold text-white mb-3">Other Pages</h6>
              <ul>
                <li><a href="#" className="hover:text-white">Home</a></li>
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Find Location</a></li>
                <li><a href="#" className="hover:text-white">FAQ's</a></li>
              </ul>
            </div>
            <div className="w-1/4">
              <h6 className="font-semibold text-white mb-3">Other Links</h6>
              <ul>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Disclaimer</a></li>
                <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white">Cookies</a></li>
                <li><a href="#" className="hover:text-white">Refund Policy</a></li>
              </ul>
            </div>
          </div>
          
          {/* Right Section - Newsletter and Contact Info */}
          <div className="w-full md:w-1/4">
            <h6 className="font-semibold text-white mb-3">Join the newsletter</h6>
            <form className="mb-6 flex space-x-2">
              <input
                type="email"
                className="flex-1 p-3 bg-gray-800 border border-gray-700 text-gray-400"
                placeholder="Enter your email"
              />
              <button className="p-3 bg-blue-600 text-white">Subscribe</button>
            </form>
            <div>
              <h6 className="font-semibold text-white mb-3">Feel free to connect with us</h6>
              <div className="colitems-center space-x-4 mb-3">
                <ul>
                <li>📞 +91 93112 21210</li>
                <li>📧 virtualoffice@teamco.work</li>
                <li>📍 704, Palm Court, Mehrauli-Gurgaon Rd, Gurugram, Haryana 122007</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Section10;
