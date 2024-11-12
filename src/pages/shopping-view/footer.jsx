import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Online Store Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Online Store</h3>
          <ul>
            <li><a href="#" className="hover:text-gray-400">Men Clothing</a></li>
            <li><a href="#" className="hover:text-gray-400">Women Clothing</a></li>
            <li><a href="#" className="hover:text-gray-400">Men Accessories</a></li>
            <li><a href="#" className="hover:text-gray-400">Women Accessories</a></li>
          </ul>
        </div>
        
        {/* Helpful Links */}
        <div>
        
        </div>
        
        {/* Partner Brands */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Partners</h3>
          <ul>
            <li><a href="#" className="hover:text-gray-400">Nike</a></li>
            <li><a href="#" className="hover:text-gray-400">Adidas</a></li>
            <li><a href="#" className="hover:text-gray-400">Levi's</a></li>
            <li><a href="#" className="hover:text-gray-400">Zara</a></li>
          </ul>
        </div>
        
        {/* Newsletter Signup */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Stay Connected</h3>
          <p className="mb-4">Subscribe to our newsletter to get the latest updates and offers.</p>
          <form className="flex">
            <input type="email" placeholder="Your Email" className="px-4 py-2 rounded-l bg-gray-700 text-gray-300 outline-none" />
            <button type="submit" className="px-4 py-2 bg-primary text-white rounded-r hover:bg-primary-dark">Subscribe</button>
          </form>
          <div className="flex space-x-4 mt-6">
            <a href="#" className="text-gray-300 hover:text-white"><Facebook /></a>
            <a href="#" className="text-gray-300 hover:text-white"><Twitter /></a>
            <a href="#" className="text-gray-300 hover:text-white"><Instagram /></a>
            <a href="#" className="text-gray-300 hover:text-white"><Linkedin /></a>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-10 text-gray-500 text-sm">
        © {new Date().getFullYear()} Gaurav Kumar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
