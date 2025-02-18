// src/components/Features.js
import React from 'react';
import { FaMobileAlt, FaMusic, FaBaby, FaHeartbeat } from 'react-icons/fa';

const Features = () => {
  return (
    <section id="features" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8 text-black">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Remote Control via Mobile App */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <FaMobileAlt className="text-green-600 text-5xl mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Remote Control</h3>
            <p className="text-gray-600">
              Control the cradle remotely through a mobile app. Adjust swinging speed and play music with just a tap.
            </p>
          </div>

          {/* Auto Swing with Music */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <FaMusic className="text-green-600 text-5xl mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Auto Swing & Music</h3>
            <p className="text-gray-600">
              Automatic swinging motion with soothing lullabies for a peaceful sleep experience.
            </p>
          </div>

          {/* Baby Cry Detection */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <FaBaby className="text-green-600 text-5xl mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Baby Cry Detection</h3>
            <p className="text-gray-600">
              Real-time alerts when the baby cries, ensuring parents are always attentive to their needs.
            </p>
          </div>

          {/* Oxygen Level Monitoring */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <FaHeartbeat className="text-green-600 text-5xl mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Oxygen Level Monitoring</h3>
            <p className="text-gray-600">
              Continuous monitoring of oxygen levels for enhanced safety and peace of mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
