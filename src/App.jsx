// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Mapp from './components/Mapp';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Explore from './components/Explore';  // Import the new page

const App = () => {
  return (
    <Router>
      <Navbar />
      <Home />
      <Routes>
        <Route path="/" element={<Mapp />} />
        <Route path="/explore" element={<Explore />} /> 
      </Routes>
      <Features />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
