import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ease-in-out shadow-md ${
        isScrolled ? 'py-2' : 'py-4'
      }`}
      style={{
        backgroundColor: isScrolled ? 'rgb(57, 204, 204)' : 'gray'
      }}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold text-black">
          Smart Baby Cradle
        </div>
        <ul className="flex space-x-6">
          <motion.li
            whileHover={{ scale: 1.1, color: '#fff' }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#home" className="hover:text-gray-200 transition-all">Home</a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1, color: '#fff' }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#features" className="hover:text-gray-200 transition-all">Features</a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1, color: '#fff' }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#contact" className="hover:text-gray-200 transition-all">Contact</a>
          </motion.li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
