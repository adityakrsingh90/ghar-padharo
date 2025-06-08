import React from 'react';

const ListingCard = ({ name, location, price, image, features, link }) => {
  return (
    <a href={link} className="block bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <img src={image} alt={name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{name}</h3>
        <p className="text-gray-600 text-sm">{location}</p>
        <ul className="text-gray-500 text-xs mt-2 flex flex-wrap justify-center gap-2">
          {features.map((feature, idx) => (
            <li key={idx} className="bg-gray-200 px-2 py-1 rounded-full whitespace-nowrap">{feature}</li>
          ))}
        </ul>
        <button className="bg-red-600 text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-200 mt-3 w-full">
          View for ₹{price}
        </button>
      </div>
    </a>
  );
};

export default ListingCard;