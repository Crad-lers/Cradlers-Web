// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-12">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h2>
        <p className="text-lg text-gray-700 mb-2">
          📧 Email: <a href="mailto:sdgpcs77@gmail.com" className="text-green-500 hover:text-green-700 transition duration-300">sdgpcs77@gmail.com</a>
        </p>
        <p className="text-lg text-gray-700">
          ☎️ Phone: <span className="text-green-500">1234567890</span>
        </p>
      </div>
    </section>
  );
};

export default Contact;
