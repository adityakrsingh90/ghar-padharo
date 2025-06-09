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
    <div className="relative w-full max-h-[500px] aspect-video overflow-hidden rounded-xl shadow-lg">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Ad ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-red-600 scale-110" : "bg-gray-400"
            } transition-all duration-300`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default AdBanner;
