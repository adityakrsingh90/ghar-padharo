import React, { useState } from "react";
import { FaCaretDown, FaMapMarkerAlt, FaBars, FaTimes } from "react-icons/fa";

const cities = ["Delhi", "Mumbai", "Bangalore", "Hyderabad", "Pune", "Dehradun"];

const navItems = [
  {
    title: "Buy",
    items: ["Flats for Sale", "Houses for Sale", "Villas for Sale"],
  },
  {
    title: "Rent",
    items: ["Apartments", "Rooms", "PGs"],
  },
  {
    title: "Sell",
    items: ["Post Property", "Pricing Tips"],
  },
  {
    title: "Home Loans",
    items: ["Apply", "Check Eligibility"],
  },
  {
    title: "Home Interiors",
    items: ["Modular Kitchen", "Living Room Ideas"],
  },
  {
    title: "Help",
    items: ["Support", "Contact Us"],
  },
];

const NavbarWithSecondaryNav = () => {
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  return (
    <>
      {/* Top Navbar */}
      <nav className="bg-red-600 text-white px-4 py-3 shadow relative z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo + Location */}
          <div className="flex items-center gap-4">
            <div className="text-2xl font-bold">GharPadharo</div>

            <div
              className="relative group hidden sm:block"
              onMouseEnter={() => setShowCityDropdown(true)}
              onMouseLeave={() => setShowCityDropdown(false)}
            >
              <button className="flex items-center gap-1 hover:text-gray-200 text-sm font-medium">
                <FaMapMarkerAlt />
                Select Location
                <FaCaretDown className="text-xs mt-[2px]" />
              </button>
              {showCityDropdown && (
                <div className="absolute top-full mt-2 bg-white text-black rounded shadow-md p-4 w-48 z-50">
                  <ul className="space-y-2 text-sm">
                    {cities.map((city, i) => (
                      <li key={i} className="hover:text-red-600 cursor-pointer">
                        {city}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Right Side Buttons */}
          <div className="hidden sm:flex items-center gap-4">
            <button className="bg-yellow-300 text-red-700 px-4 py-2 rounded hover:bg-yellow-200 font-semibold">
              GP Prime <FaCaretDown className="inline ml-1 text-sm" />
            </button>
            <button className="bg-white text-red-600 px-4 py-2 rounded hover:bg-gray-100 font-semibold">
              Login <FaCaretDown className="inline ml-1 text-sm" />
            </button>
            <button className="bg-red-800 px-4 py-2 rounded text-white hover:bg-red-700">
              Post Property (Free)
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="sm:hidden">
            <button onClick={() => setMobileMenu(!mobileMenu)}>
              {mobileMenu ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="sm:hidden bg-white text-black mt-3 p-4 rounded shadow space-y-3">
            {/* Location */}
            <div>
              <label className="block text-sm mb-1">Choose Location</label>
              <select className="w-full border px-3 py-2 rounded text-sm">
                {cities.map((city, i) => (
                  <option key={i}>{city}</option>
                ))}
              </select>
            </div>

            {/* Login & Post */}
            <button className="w-full bg-red-600 text-white px-4 py-2 rounded font-semibold">
              Login
            </button>

            {/* Nav Items with Dropdowns */}
            {navItems.map((item, index) => (
              <div key={index}>
                <div
                  className="flex justify-between items-center mt-3 font-semibold"
                  onClick={() =>
                    setMobileDropdown(mobileDropdown === index ? null : index)
                  }
                >
                  <span>{item.title}</span>
                  <FaCaretDown
                    className={`transform transition-transform ${
                      mobileDropdown === index ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>
                {mobileDropdown === index && (
                  <ul className="pl-4 mt-1 space-y-1 text-sm text-gray-700">
                    {item.items.map((sub, i) => (
                      <li key={i} className="hover:text-red-600 cursor-pointer">
                        {sub}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>

      {/* Desktop Secondary Nav */}
      <nav className="bg-white py-3 px-4 shadow hidden sm:block">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-6 text-sm font-medium text-gray-700">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(index)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a href="#" className="flex items-center gap-1 px-2 hover:text-red-600">
                {item.title}
                <FaCaretDown className="text-xs mt-[1px]" />
              </a>
              {activeDropdown === index && (
                <div className="absolute top-full mt-2 bg-white shadow-lg rounded px-4 py-3 z-40 w-48">
                  <ul className="space-y-1 text-[14px]">
                    {item.items.map((sub, i) => (
                      <li key={i} className="hover:text-red-600 cursor-pointer">
                        {sub}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
    </>
  );
};

export default NavbarWithSecondaryNav;
