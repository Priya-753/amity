import React from 'react';
import { Mail, Phone, MapPin, Globe, Linkedin, Twitter, Instagram } from 'lucide-react';
import { SEOLinks } from './SEOLinks';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-light tracking-wider mb-4">
              AMITY INTERNATIONAL
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Crafting luxury home textiles with passion and precision since the 1990s. 
              From our headquarters in Karur, India, we bring timeless elegance to homes worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="text-gray-300 hover:text-white transition-colors">
                  Our Collections
                </a>
              </li>
              <li>
                <a href="#story" className="text-gray-300 hover:text-white transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#we-supply-to" className="text-gray-300 hover:text-white transition-colors">
                  We Supply To
                </a>
              </li>
              <li>
                <a href="#global-reach" className="text-gray-300 hover:text-white transition-colors">
                  Global Reach
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>Karur, Tamil Nadu</p>
                  <p>India - 639002</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <a href="mailto:contact@amityintl.com" className="text-gray-300 hover:text-white transition-colors text-sm">
                  contact@amityintl.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <a href="tel:+914221234567" className="text-gray-300 hover:text-white transition-colors text-sm">
                  +91 (422) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Exporting to 50+ Countries
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Categories */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <h3 className="text-lg font-medium mb-4">Our Product Categories</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-300">
            <div>
              <h4 className="font-medium text-white mb-2">Living & Sleeping</h4>
              <ul className="space-y-1">
                <li>Bed Linens</li>
                <li>Curtains</li>
                <li>Cushion Covers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-white mb-2">Bath & Spa</h4>
              <ul className="space-y-1">
                <li>Bath Towels</li>
                <li>Spa Accessories</li>
                <li>Wellness Products</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-white mb-2">Kitchen & Dining</h4>
              <ul className="space-y-1">
                <li>Kitchen Towels</li>
                <li>Aprons</li>
                <li>Table Linens</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-white mb-2">Lifestyle & Utility</h4>
              <ul className="space-y-1">
                <li>Tote Bags</li>
                <li>Storage Solutions</li>
                <li>Custom Products</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          {/* SEO-rich internal links */}
          <div className="w-full mb-8">
            <SEOLinks />
          </div>
          
          <div className="text-gray-400 text-sm">
            © 2024 Amity International. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Quality Standards</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;