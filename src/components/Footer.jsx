import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white py-8 mt-12 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <h3 className="text-2xl font-bold text-red-600">GharPadharo</h3>
          <p className="text-gray-600 text-sm mt-2">
            Find your dream home away from home.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-600 hover:text-red-600"><FaFacebookF /></a>
            <a href="#" className="text-gray-600 hover:text-red-600"><FaTwitter /></a>
            <a href="#" className="text-gray-600 hover:text-red-600"><FaInstagram /></a>
            <a href="#" className="text-gray-600 hover:text-red-600"><FaLinkedinIn /></a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-4">Properties</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-red-600">Buy</a></li>
            <li><a href="#" className="text-gray-600 hover:text-red-600">Rent</a></li>
            <li><a href="#" className="text-gray-600 hover:text-red-600">Sell</a></li>
            <li><a href="#" className="text-gray-600 hover:text-red-600">New Projects</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-4">Services</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-red-600">Home Loans</a></li>
            <li><a href="#" className="text-gray-600 hover:text-red-600">Home Interiors</a></li>
            <li><a href="#" className="text-gray-600 hover:text-red-600">Post Property Ad</a></li>
            <li><a href="#" className="text-gray-600 hover:text-red-600">Owner Services</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-4">Help & Support</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-red-600">MB Advice</a></li>
            <li><a href="#" className="text-gray-600 hover:text-red-600">Help Center</a></li>
            <li><a href="#" className="text-gray-600 hover:text-red-600">Contact Us</a></li>
            <li><a href="#" className="text-gray-600 hover:text-red-600">FAQs</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-8 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} GharPadharo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
