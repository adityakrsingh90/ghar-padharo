import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200 pt-10 pb-6 px-4 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center md:text-left">
        
        {/* Logo + Social */}
        <div>
          <h3 className="text-2xl font-extrabold text-red-600">GharPadharo</h3>
          <p className="text-gray-600 text-sm mt-2">Find your dream home away from home.</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a href="#" className="text-gray-500 hover:text-red-600 transition"><FaFacebookF /></a>
            <a href="#" className="text-gray-500 hover:text-red-600 transition"><FaTwitter /></a>
            <a href="#" className="text-gray-500 hover:text-red-600 transition"><FaInstagram /></a>
            <a href="#" className="text-gray-500 hover:text-red-600 transition"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Properties */}
        <div>
          <h4 className="text-lg font-bold text-gray-800 mb-4">Properties</h4>
          <ul className="space-y-2 text-sm">
            {["Buy", "Rent", "Sell", "New Projects"].map((item, idx) => (
              <li key={idx}><a href="#" className="text-gray-600 hover:text-red-600 transition">{item}</a></li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-bold text-gray-800 mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            {["Home Loans", "Home Interiors", "Post Property Ad", "Owner Services"].map((item, idx) => (
              <li key={idx}><a href="#" className="text-gray-600 hover:text-red-600 transition">{item}</a></li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-lg font-bold text-gray-800 mb-4">Help & Support</h4>
          <ul className="space-y-2 text-sm">
            {["MB Advice", "Help Center", "Contact Us", "FAQs"].map((item, idx) => (
              <li key={idx}><a href="#" className="text-gray-600 hover:text-red-600 transition">{item}</a></li>
            ))}
          </ul>
        </div>

      </div>

      <div className="mt-10 border-t border-gray-200 pt-4 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} GharPadharo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
