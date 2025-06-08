import React, { useState, useEffect } from "react";

import banner1 from "../assets/ad1.png";
import banner2 from "../assets/ad2.png";
import banner3 from "../assets/ad3.png";
import banner4 from "../assets/ad4.jpg";

const images = [banner1, banner2, banner3, banner4];

const AdBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-48 sm:h-52 overflow-hidden rounded-xl shadow-md">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Ad ${index + 1}`}
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              index === currentIndex ? "bg-red-600" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default AdBanner;