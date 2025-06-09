import React from 'react';

const Card = ({ image, title, link }) => {
  return (
    <a
      href={link}
      className="group block bg-white bg-opacity-90 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300 overflow-hidden backdrop-blur-md"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-red-600 transition-colors duration-300">{title}</h3>
        <p className="text-sm text-red-500 mt-2 flex items-center font-medium">
          Explore
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </p>
      </div>
    </a>
  );
};

export default Card;
