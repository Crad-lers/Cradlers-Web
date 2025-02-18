import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Features />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
