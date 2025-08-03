import React from 'react';
import { Mail, Phone, MapPin, Globe, Linkedin, Twitter, Instagram } from 'lucide-react';
import { SEOLinks } from './SEOLinks';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#495b27', color: '#f7f8f6' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-light tracking-wider mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              AMITY INTERNATIONAL
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Crafting luxury home textiles with passion and precision since the 1990s. 
              From our headquarters in Karur, India, we bring timeless elegance to homes worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 transition-colors" style={{ '--tw-text-opacity': '1' } as React.CSSProperties} onMouseEnter={(e) => e.currentTarget.style.color = '#f7f8f6'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgb(156 163 175)'}>
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 transition-colors" style={{ '--tw-text-opacity': '1' } as React.CSSProperties} onMouseEnter={(e) => e.currentTarget.style.color = '#f7f8f6'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgb(156 163 175)'}>
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 transition-colors" style={{ '--tw-text-opacity': '1' } as React.CSSProperties} onMouseEnter={(e) => e.currentTarget.style.color = '#f7f8f6'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgb(156 163 175)'}>
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="text-gray-300 transition-colors" style={{ '--tw-text-opacity': '1' } as React.CSSProperties} onMouseEnter={(e) => e.currentTarget.style.color = '#f7f8f6'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgb(209 213 219)'}>
                  Our Collections
                </a>
              </li>
              <li>
                <a href="#story" className="text-gray-300 transition-colors" style={{ '--tw-text-opacity': '1' } as React.CSSProperties} onMouseEnter={(e) => e.currentTarget.style.color = '#f7f8f6'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgb(209 213 219)'}>
                  Our Story
                </a>
              </li>
              <li>
                <a href="#we-supply-to" className="text-gray-300 transition-colors" style={{ '--tw-text-opacity': '1' } as React.CSSProperties} onMouseEnter={(e) => e.currentTarget.style.color = '#f7f8f6'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgb(209 213 219)'}>
                  We Supply To
                </a>
              </li>
              <li>
                <a href="#global-reach" className="text-gray-300 transition-colors" style={{ '--tw-text-opacity': '1' } as React.CSSProperties} onMouseEnter={(e) => e.currentTarget.style.color = '#f7f8f6'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgb(209 213 219)'}>
                  Global Reach
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Contact Us</h3>
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
                <a href="mailto:contact@amityintl.com" className="text-gray-300 transition-colors text-sm" style={{ '--tw-text-opacity': '1' } as React.CSSProperties} onMouseEnter={(e) => e.currentTarget.style.color = '#f7f8f6'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgb(209 213 219)'}>
                  contact@amityintl.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <a href="tel:+914221234567" className="text-gray-300 transition-colors text-sm" style={{ '--tw-text-opacity': '1' } as React.CSSProperties} onMouseEnter={(e) => e.currentTarget.style.color = '#f7f8f6'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgb(209 213 219)'}>
                  +91 (422) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Exporting to 10+ Countries
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Categories */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <h3 className="text-lg font-medium mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Our Product Categories</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-300">
            <div>
              <h4 className="font-medium mb-2" style={{ color: '#f7f8f6', fontFamily: 'Playfair Display, serif' }}>Living & Sleeping</h4>
              <ul className="space-y-1">
                <li>Bed Linens</li>
                <li>Curtains</li>
                <li>Cushion Covers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2" style={{ color: '#f7f8f6', fontFamily: 'Playfair Display, serif' }}>Bath & Spa</h4>
              <ul className="space-y-1">
                <li>Bath Towels</li>
                <li>Spa Accessories</li>
                <li>Wellness Products</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2" style={{ color: '#f7f8f6', fontFamily: 'Playfair Display, serif' }}>Kitchen & Dining</h4>
              <ul className="space-y-1">
                <li>Kitchen Towels</li>
                <li>Aprons</li>
                <li>Table Linens</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2" style={{ color: '#f7f8f6', fontFamily: 'Playfair Display, serif' }}>Lifestyle & Utility</h4>
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
            <a href="#" className="transition-colors" style={{ '--tw-text-opacity': '1' } as React.CSSProperties} onMouseEnter={(e) => e.currentTarget.style.color = '#f7f8f6'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgb(156 163 175)'}>Privacy Policy</a>
            <a href="#" className="transition-colors" style={{ '--tw-text-opacity': '1' } as React.CSSProperties} onMouseEnter={(e) => e.currentTarget.style.color = '#f7f8f6'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgb(156 163 175)'}>Terms of Service</a>
            <a href="#" className="transition-colors" style={{ '--tw-text-opacity': '1' } as React.CSSProperties} onMouseEnter={(e) => e.currentTarget.style.color = '#f7f8f6'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgb(156 163 175)'}>Quality Standards</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;