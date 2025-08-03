import React, { useEffect, useRef, useState } from 'react';
import { WorldMap } from './WorldMap';

const ExportSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: '-50px 0px', // Add some margin for better timing
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const exportDestinations = [
    {
      start: { lat: 28.6139, lng: 77.2090, label: "New Delhi, India" }, // Our headquarters
      end: { lat: 40.7128, lng: -74.0060, label: "New York, USA" },
    },
    {
      start: { lat: 28.6139, lng: 77.2090, label: "New Delhi, India" },
      end: { lat: 51.5074, lng: -0.1278, label: "London, UK" },
    },
    {
      start: { lat: 28.6139, lng: 77.2090, label: "New Delhi, India" },
      end: { lat: 35.6762, lng: 139.6503, label: "Tokyo, Japan" },
    },
    {
      start: { lat: 28.6139, lng: 77.2090, label: "New Delhi, India" },
      end: { lat: -33.8688, lng: 151.2093, label: "Sydney, Australia" },
    },
    {
      start: { lat: 28.6139, lng: 77.2090, label: "New Delhi, India" },
      end: { lat: 48.8566, lng: 2.3522, label: "Paris, France" },
    },
    {
      start: { lat: 28.6139, lng: 77.2090, label: "New Delhi, India" },
      end: { lat: 1.3521, lng: 103.8198, label: "Singapore" },
    },
  ];

  return (
    <div id="global-reach" ref={sectionRef} className="py-20" style={{ backgroundColor: '#f7f8f6' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Global Reach
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            From our headquarters in India, we export premium home textiles to discerning customers across the globe, 
            bringing luxury and craftsmanship to homes worldwide.
          </p>
        </div>

        {/* World Map */}
        <div className="mb-12">
          <WorldMap dots={exportDestinations} lineColor="#f97316" isVisible={isVisible} />
        </div>

        {/* Export Statistics */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div>
            <div className="text-3xl md:text-4xl font-light text-gray-900 mb-2">10+</div>
            <div className="text-sm text-gray-600 uppercase tracking-wider">Countries</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-light text-gray-900 mb-2">1M+</div>
            <div className="text-sm text-gray-600 uppercase tracking-wider">Products Shipped</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-light text-gray-900 mb-2">25+</div>
            <div className="text-sm text-gray-600 uppercase tracking-wider">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-light text-gray-900 mb-2">99%</div>
            <div className="text-sm text-gray-600 uppercase tracking-wider">Customer Satisfaction</div>
          </div>
        </div>

        {/* Key Markets */}
        <div className={`mt-16 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h3 className="text-2xl font-light text-gray-900 text-center mb-8">Our Key Markets</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {['United States', 'United Kingdom', 'Japan', 'Australia', 'France', 'Singapore'].map((country) => (
              <div key={country} className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                <div className="text-sm text-gray-700 font-medium">{country}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportSection;