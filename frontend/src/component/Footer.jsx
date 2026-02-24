// src/components/Footer.jsx
// Standard footer with links
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">TechHub</h3>
            <p className="text-sm">Your one-stop shop for tech essentials.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-300">Laptops</a></li>
              <li><a href="#" className="hover:text-gray-300">Accessories</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-300">FAQ</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            {/* Social icons */}
          </div>
        </div>
        <p className="mt-8 text-center text-sm">&copy; 2026 TechHub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;