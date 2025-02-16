import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-green-400 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold text-black">
            Cradlers
        </div>
        <ul className="flex space-x-6">
          <li>
            <a href="#home" className="hover:text-gray-300">Home</a>
          </li>
          <li>
            <a href="#features" className="hover:text-gray-300">Features</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-300">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
