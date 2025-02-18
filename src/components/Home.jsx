import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-center"
      style={{ backgroundImage: "url('/wpaper.png')" }}
    >
      <motion.div
        className="bg-white bg-opacity-80 rounded-lg p-8 shadow-lg w-full max-w-3xl mx-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.h2
          className="text-4xl font-bold mb-4 text-gray-800"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Introducing the smart baby cradle
        </motion.h2>
        
        <motion.p
          className="text-lg mb-6 text-gray-700"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          comfort and care for your baby
        </motion.p>
        
       
      </motion.div>
    </section>
  );
};

export default Home;
