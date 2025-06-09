import React from 'react';

const ListingCard = ({ name, location, price, image, features, link }) => {
  return (
    <a
      href={link}
      className="block bg-white bg-opacity-90 backdrop-blur-md rounded-2xl shadow-md hover:shadow-2xl transform hover:scale-[1.03] transition-all duration-300 overflow-hidden"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-44 object-cover transition-transform duration-300 hover:scale-105"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900">{name}</h3>
        <p className="text-gray-600 text-sm">{location}</p>
        <ul className="flex flex-wrap gap-2 mt-2 text-xs">
          {features.map((feature, idx) => (
            <li
              key={idx}
              className="bg-gray-100 border border-gray-300 px-2 py-1 rounded-full text-gray-700"
            >
              {feature}
            </li>
          ))}
        </ul>
        <button className="mt-4 w-full bg-gradient-to-r from-red-600 to-red-500 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:from-red-700 hover:to-red-600 transition-all duration-300">
          View for ₹{price}
        </button>
      </div>
    </a>
  );
};

export default ListingCard;
