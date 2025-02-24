// src/components/Mapp.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Mapp = () => {
  const navigate = useNavigate();

  // Image Collection
  const images = [
    {
      src: "/Screenshot (235).png",
      alt: "Cradlers Mobile App",
      description: "Cradlers - Ultimate comfort and style for your baby."
    },
    {
      src: "/Screenshot (236).png",
      alt: "Smart Notifications",
      description: "Real-time monitoring with smart notifications."
    },
    {
      src: "/Screenshot (237).png",
      alt: "Seamless Control",
      description: "Seamless control and effortless parenting."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigate to Explore More page
  const handleExplore = () => {
    navigate('/explore-more');
  };

  // Navigate to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Navigate to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl bg-white p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4">
        
        {/* Image Carousel */}
        <div className="relative w-full flex items-center justify-center">
          <img 
            src={images[currentIndex].src} 
            alt={images[currentIndex].alt} 
            className="w-full md:w-3/4 lg:w-1/2 rounded-lg transition-transform duration-300"
          />
          
          {/* Previous Button */}
          <button 
            onClick={prevImage} 
            className="absolute left-0 text-4xl text-gray-600 hover:text-gray-800 transition-transform duration-300"
          >
            ❮
          </button>

          {/* Next Button */}
          <button 
            onClick={nextImage} 
            className="absolute right-0 text-4xl text-gray-600 hover:text-gray-800 transition-transform duration-300"
          >
            ❯
          </button>
        </div>

        {/* Image Description */}
        <p className="text-gray-800 text-lg text-center">{images[currentIndex].description}</p>

      </div>
    </section>
  );
};

export default Mapp;
