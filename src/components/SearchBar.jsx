import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaCaretDown, FaHome } from "react-icons/fa";
import { MdSearch } from "react-icons/md";

const SearchBar = () => {
  const [selectedCity, setSelectedCity] = useState("Bangalore");
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const [isPropertyTypeDropdownOpen, setIsPropertyTypeDropdownOpen] = useState(false);
  const [isBudgetDropdownOpen, setIsBudgetDropdownOpen] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedPropertyType, setSelectedPropertyType] = useState("Flat +1");

  const cities = ["Bangalore", "Dehradun", "Delhi", "Mumbai", "Pune", "Chennai", "Hyderabad", "Kolkata"];

  const propertyTypes = [
    { name: "Residential", subTypes: ["Flat", "House", "Villa", "Plot", "Farm House", "Serviced Apartment"] },
    { name: "Commercial", subTypes: ["Office Space", "Shop", "Warehouse", "Industrial Building"] },
    { name: "Other Property Types", subTypes: ["Studio Apartment", "Penthouse", "Duplex", "Bungalow"] },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".city-dropdown-container") &&
        !event.target.closest(".property-type-dropdown-container") &&
        !event.target.closest(".budget-dropdown-container")
      ) {
        setIsCityDropdownOpen(false);
        setIsPropertyTypeDropdownOpen(false);
        setIsBudgetDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handlers for selection
  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setIsCityDropdownOpen(false);
  };

  const handlePropertyTypeSelect = (type) => {
    setSelectedPropertyType(type);
    setIsPropertyTypeDropdownOpen(false);
  };

  const handleBudgetApply = () => {
    console.log(`Applying Budget Filter: Min Price: ${minPrice}, Max Price: ${maxPrice}`);
    setIsBudgetDropdownOpen(false);
  };

  return (
  
    <div className="max-w-6xl mx-auto mt-4 px-4 relative z-10">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">

        <div className="flex-1 w-full bg-white rounded-full flex flex-col md:flex-row items-stretch overflow-visible shadow-md">

          <div className="flex items-center gap-2 px-4 py-3 flex-1 border-r border-gray-200 relative city-dropdown-container">
            <FaMapMarkerAlt className="text-red-600 text-lg flex-shrink-0" />
            <input
              type="text"
              placeholder="Select City"
              value={selectedCity}
              readOnly
              className="outline-none flex-1 text-gray-800 text-base font-medium min-w-[80px] cursor-pointer"
              onClick={() => {
                setIsCityDropdownOpen(!isCityDropdownOpen);
                setIsPropertyTypeDropdownOpen(false); 
                setIsBudgetDropdownOpen(false);
              }}
            />
            <span
              className="text-gray-500 text-sm font-medium whitespace-nowrap cursor-pointer hover:text-gray-700 transition-colors duration-200"
              onClick={() => {
                setIsCityDropdownOpen(!isCityDropdownOpen);
                setIsPropertyTypeDropdownOpen(false); 
                setIsBudgetDropdownOpen(false);
              }}
            >
              Add more...
            </span>

            {/* City Dropdown */}
            {isCityDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg z-20 max-h-60 overflow-y-auto">
                {cities.map((city) => (
                  <div
                    key={city}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-gray-800"
                    onClick={() => handleCitySelect(city)}
                  >
                    {city}
                  </div>
                ))}
              </div>
            )}
          </div>

          <button
            className="flex items-center gap-2 px-4 py-3 border-r border-gray-200 text-gray-600 hover:text-red-600 transition-colors duration-200 whitespace-nowrap flex-shrink-0 relative property-type-dropdown-container"
            onClick={() => {
              setIsPropertyTypeDropdownOpen(!isPropertyTypeDropdownOpen);
              setIsCityDropdownOpen(false); 
              setIsBudgetDropdownOpen(false);
            }}
          >
            <FaHome className="text-lg" /> {selectedPropertyType} <FaCaretDown className="text-xs ml-1" />
            {/* Property Type Dropdown */}
            {isPropertyTypeDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-20 max-h-60 overflow-y-auto">
                {propertyTypes.map((typeGroup) => (
                  <div key={typeGroup.name} className="py-2">
                    <h5 className="px-4 text-gray-800 font-semibold mb-1 border-b border-gray-100 pb-1">{typeGroup.name}</h5>
                    {typeGroup.subTypes.map((subType) => (
                      <div
                        key={subType}
                        className="px-6 py-2 cursor-pointer hover:bg-gray-100 text-gray-700 text-sm"
                        onClick={() => handlePropertyTypeSelect(subType)}
                      >
                        {subType}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </button>

          {/* Budget Filter with Rupee Icon & Dropdown */}
          <button
            className="flex items-center gap-2 px-4 py-3 text-gray-600 hover:text-red-600 transition-colors duration-200 whitespace-nowrap flex-shrink-0 relative budget-dropdown-container"
            onClick={() => {
              setIsBudgetDropdownOpen(!isBudgetDropdownOpen);
              setIsCityDropdownOpen(false);
              setIsPropertyTypeDropdownOpen(false);
            }}
          >
            ₹ Budget <FaCaretDown className="text-xs ml-1" />
            {/* Budget Dropdown */}
            {isBudgetDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg p-4 z-20">
                <div className="mb-3">
                  <label htmlFor="minPrice" className="block text-sm font-medium text-gray-700 mb-1">Min Price</label>
                  <input
                    type="number"
                    id="minPrice"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-800 focus:ring-red-500 focus:border-red-500 outline-none"
                    placeholder="Min"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-700 mb-1">Max Price</label>
                  <input
                    type="number"
                    id="maxPrice"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-800 focus:ring-red-500 focus:border-red-500 outline-none"
                    placeholder="Max"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                  />
                </div>
                <button
                  className="w-full bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-200 font-semibold"
                  onClick={handleBudgetApply}
                >
                  Apply
                </button>
              </div>
            )}
          </button>

          {/* Search Button */}
          <button className="flex items-center justify-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition-colors duration-200 text-base font-semibold flex-shrink-0 md:ml-auto">
            <MdSearch className="text-lg" /> Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;