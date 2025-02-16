// src/components/Features.js
import React from 'react';

const Features = () => {
  return (
    <section id="features" className="bg-gray-100 py-12">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Features</h2>
        <ul className="space-y-4">
          <li className="text-lg text-gray-700 hover:text-green-500 transition duration-300">
            🚀 Remote Control via Mobile App
          </li>
          <li className="text-lg text-gray-700 hover:text-green-500 transition duration-300">
            🎶 Auto Swing with Music
          </li>
          <li className="text-lg text-gray-700 hover:text-green-500 transition duration-300">
            👶 Baby Cry Detection
          </li>
          <li className="text-lg text-gray-700 hover:text-green-500 transition duration-300">
            💨 Oxygen Level Monitoring
          </li>
          <li className="text-lg text-gray-700 hover:text-green-500 transition duration-300">
          💧 Urine detection
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Features;
