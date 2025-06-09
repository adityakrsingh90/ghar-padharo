import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaCaretDown, FaHome } from "react-icons/fa";
import { MdSearch } from "react-icons/md";

const SearchBar = () => {
  const [selectedCity, setSelectedCity] = useState("Dehradun");
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
    const handleClickOutside = (e) => {
      if (
        !e.target.closest(".city-dropdown-container") &&
        !e.target.closest(".property-type-dropdown-container") &&
        !e.target.closest(".budget-dropdown-container")
      ) {
        setIsCityDropdownOpen(false);
        setIsPropertyTypeDropdownOpen(false);
        setIsBudgetDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setIsCityDropdownOpen(false);
  };

  const handlePropertyTypeSelect = (type) => {
    setSelectedPropertyType(type);
    setIsPropertyTypeDropdownOpen(false);
  };

  const handleBudgetApply = () => {
    console.log(`Budget: ₹${minPrice} - ₹${maxPrice}`);
    setIsBudgetDropdownOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="bg-white shadow-lg rounded-2xl p-4 flex flex-col md:flex-row items-stretch gap-4">
        
        {/* City Selector */}
        <div className="flex-1 min-w-[180px] relative city-dropdown-container">
          <div
            onClick={() => {
              setIsCityDropdownOpen(!isCityDropdownOpen);
              setIsPropertyTypeDropdownOpen(false);
              setIsBudgetDropdownOpen(false);
            }}
            className="flex items-center gap-2 p-3 border rounded-lg cursor-pointer hover:shadow-sm transition"
          >
            <FaMapMarkerAlt className="text-red-600" />
            <span className="flex-1 font-medium">{selectedCity}</span>
            <span className="text-sm text-blue-600">Add more...</span>
          </div>
          {isCityDropdownOpen && (
            <div className="absolute mt-2 w-full bg-white rounded-lg shadow border max-h-64 overflow-y-auto z-20">
              {cities.map((city) => (
                <div
                  key={city}
                  onClick={() => handleCitySelect(city)}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {city}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Property Type Selector */}
        <div className="flex-1 min-w-[180px] relative property-type-dropdown-container">
          <div
            onClick={() => {
              setIsPropertyTypeDropdownOpen(!isPropertyTypeDropdownOpen);
              setIsCityDropdownOpen(false);
              setIsBudgetDropdownOpen(false);
            }}
            className="flex items-center gap-2 p-3 border rounded-lg cursor-pointer hover:shadow-sm transition"
          >
            <FaHome className="text-gray-600" />
            <span className="flex-1 font-medium">{selectedPropertyType}</span>
            <FaCaretDown className="text-sm" />
          </div>
          {isPropertyTypeDropdownOpen && (
            <div className="absolute mt-2 w-full bg-white rounded-lg shadow border max-h-64 overflow-y-auto z-20">
              {propertyTypes.map((typeGroup) => (
                <div key={typeGroup.name} className="py-2">
                  <h5 className="px-4 font-semibold text-gray-700">{typeGroup.name}</h5>
                  {typeGroup.subTypes.map((subType) => (
                    <div
                      key={subType}
                      onClick={() => handlePropertyTypeSelect(subType)}
                      className="px-6 py-1 hover:bg-gray-100 text-sm text-gray-700 cursor-pointer"
                    >
                      {subType}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Budget Selector */}
        <div className="flex-1 min-w-[160px] relative budget-dropdown-container">
          <div
            onClick={() => {
              setIsBudgetDropdownOpen(!isBudgetDropdownOpen);
              setIsCityDropdownOpen(false);
              setIsPropertyTypeDropdownOpen(false);
            }}
            className="flex items-center gap-2 p-3 border rounded-lg cursor-pointer hover:shadow-sm transition"
          >
            ₹ <span className="flex-1 font-medium">Budget</span>
            <FaCaretDown className="text-sm" />
          </div>
          {isBudgetDropdownOpen && (
            <div className="absolute mt-2 w-full bg-white rounded-lg shadow border p-4 z-20">
              <div className="mb-2">
                <label className="text-sm">Min Price</label>
                <input
                  type="number"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="w-full mt-1 border px-3 py-2 rounded-md"
                  placeholder="Min ₹"
                />
              </div>
              <div className="mb-4">
                <label className="text-sm">Max Price</label>
                <input
                  type="number"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="w-full mt-1 border px-3 py-2 rounded-md"
                  placeholder="Max ₹"
                />
              </div>
              <button
                className="w-full bg-red-600 text-white rounded-md py-2 hover:bg-red-700"
                onClick={handleBudgetApply}
              >
                Apply
              </button>
            </div>
          )}
        </div>

        {/* Search Button */}
        <div className="w-full md:w-auto">
          <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition">
            <MdSearch className="text-xl" /> Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
