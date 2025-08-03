import React from 'react';
import { InfiniteMovingCards } from './ui/InfiniteMovingCards';

const WeSupplyToSection = () => {
  const clientTypes = [
    {
      quote: "Boutique Retailers",
      name: "Curated Collections",
      title: "Premium Home Goods Stores",
    },
    {
      quote: "Interior Design Studios",
      name: "Professional Designers",
      title: "Residential & Commercial Projects",
    },
    {
      quote: "Hospitality Brands",
      name: "Hotels & Resorts",
      title: "Luxury Accommodation",
    },
    {
      quote: "Ethical Marketplaces",
      name: "Sustainable Retailers",
      title: "Conscious Commerce",
    },
    {
      quote: "Concept Stores",
      name: "Lifestyle Brands",
      title: "Experiential Retail",
    },
  ];

  return (
    <div id="we-supply-to" className="py-20" style={{ backgroundColor: '#f7f8f6' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            We Supply To
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Trusted by discerning businesses worldwide, we partner with brands that share our commitment to quality, craftsmanship, and timeless design.
          </p>
        </div>

        {/* Infinite Moving Cards */}
        <div className="flex justify-center">
          <InfiniteMovingCards
            items={clientTypes}
            direction="right"
            speed="slow"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default WeSupplyToSection;