// src/components/Mapp.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Mapp = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleExplore = () => {
    navigate('/explore-more'); // Navigate to Explore More page
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl bg-white p-6 rounded-lg shadow-lg flex items-center space-x-6">
        {/* Left Side - Image */}
        <div className="w-1/2">
          <img 
            src="/Screenshot (235).png"
            alt="Cradlers Mobile App" 
            className="w-full rounded-lg"
          />
        </div>

        {/* Right Side - Text and Button */}
        <div className="w-1/2 text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Cradlers</h2>
          <p className="text-gray-600 mb-4">
            Cradlers is designed to provide ultimate comfort and style for your baby. 
            With real-time monitoring, smart notifications, and seamless control, 
            parenting becomes effortless.
          </p>
          <button 
            onClick={handleExplore}  // Use the correct function name here
            className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Mapp;
