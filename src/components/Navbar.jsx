import React, { useState } from 'react';
import { FaCaretDown, FaMapMarkerAlt } from 'react-icons/fa';

const cities = [
  "Delhi", "Mumbai", "Bangalore", "Hyderabad", "Pune", "Kolkata",
  "Chennai", "Ahmedabad", "Jaipur", "Dehradun", "Chandigarh", "Lucknow"
];

const Navbar = () => {
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [showGPPrimeDropdown, setShowGPPrimeDropdown] = useState(false);
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);

  return (
    <nav className="bg-red-600 p-4 text-white z-50 relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left: Logo + Location */}
        <div className="flex items-center gap-6">
          <div className="text-2xl font-bold">GharPadharo</div>

          {/* Location Selector */}
          <div
            className="relative group"
            onMouseEnter={() => setShowCityDropdown(true)}
            onMouseLeave={() => setShowCityDropdown(false)}
          >
            <button className="flex items-center gap-1 hover:text-gray-200 text-sm font-medium">
              <FaMapMarkerAlt /> Select Location <FaCaretDown className="text-xs mt-[2px]" />
            </button>
            {showCityDropdown && (
              <div className="absolute bg-white text-black rounded shadow-md top-full mt-2 p-4 w-48 z-50">
                <ul className="space-y-2 text-sm">
                  {cities.map((city, index) => (
                    <li key={index} className="hover:text-red-600 cursor-pointer">{city}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div
            className="relative group"
            onMouseEnter={() => setShowGPPrimeDropdown(true)}
            onMouseLeave={() => setShowGPPrimeDropdown(false)}
          >
            <button className="bg-yellow-300 text-red-700 px-4 py-2 rounded-md font-semibold hover:bg-yellow-200">
              GP Prime <FaCaretDown className="inline ml-1 text-sm" />
            </button>
            {showGPPrimeDropdown && (
              <div className="absolute bg-white text-black rounded shadow-md top-full mt-2 w-44 p-3 z-50">
                <ul className="space-y-2 text-sm">
                  <li className="hover:text-red-600 cursor-pointer">Join Now</li>
                  <li className="hover:text-red-600 cursor-pointer">Benefits</li>
                  <li className="hover:text-red-600 cursor-pointer">Pricing</li>
                  <li className="hover:text-red-600 cursor-pointer">FAQs</li>
                </ul>
              </div>
            )}
          </div>

          <div
            className="relative group"
            onMouseEnter={() => setShowLoginDropdown(true)}
            onMouseLeave={() => setShowLoginDropdown(false)}
          >
            <button className="bg-white text-red-600 px-4 py-2 rounded-md font-semibold hover:bg-gray-100">
              Login <FaCaretDown className="inline ml-1 text-sm" />
            </button>
            {showLoginDropdown && (
              <div className="absolute bg-white text-black rounded shadow-md top-full mt-2 w-56 p-4 z-50">
                <div className="mb-2">
                  <div className="font-bold text-gray-700 mb-1">My Features</div>
                  <ul className="ml-2 list-disc space-y-1 text-sm">
                    <li>Saved Properties</li>
                    <li>Alerts</li>
                    <li>Shortlisted</li>
                    <li>Site Visits</li>
                    <li>Preferences</li>
                  </ul>
                </div>
                <hr className="my-2" />
                <ul className="space-y-2 text-sm">
                  <li className="hover:text-red-600 cursor-pointer">Recommendations</li>
                  <li className="hover:text-red-600 cursor-pointer">My Profile</li>
                  <li className="hover:text-red-600 cursor-pointer">Login</li>
                  <li className="hover:text-red-600 cursor-pointer">Signup</li>
                </ul>
              </div>
            )}
          </div>

          <button className="bg-red-800 text-white px-4 py-2 rounded-md hover:bg-red-700">
            Post Property (Free)
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
