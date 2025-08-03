import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, Scissors } from 'lucide-react';
import { useI18n } from '../hooks/useI18n';
import { LanguageSwitcher } from './LanguageSwitcher';

const Hero = () => {
  const { t, isRTL } = useI18n();
  const [scrollY, setScrollY] = useState(0);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowNav(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Parallax Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
          onError={(e) => console.error('Video error:', e)}
        >
          <source src="/AmityHeroVideo.mov" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center">
            <div className="text-center" style={{ color: '#f7f8f6' }}>
              <p className="text-lg mb-2">Video not supported</p>
              <p className="text-sm text-gray-400">Please enable JavaScript and video playback</p>
            </div>
          </div>
        </video>
      </div>

      {/* Hero Section Company Overlay - Only visible in Hero */}
      <div className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none">
        <div className="text-center">
          <div className="flex flex-col items-center space-y-6">
            {/* Logo */}
            <div className="w-32 h-28 mb-4">
              <img 
                className="w-full h-full object-contain" 
                src="/logo.png" 
                alt="Amity International Logo"
              />
            </div>
            {/* Company Name */}
            <div 
              className="text-6xl md:text-8xl font-light tracking-wider text-center"
              style={{ 
                fontFamily: 'Playfair Display, serif',
                color: '#f4a94e',
                textShadow: '0 4px 8px rgba(0, 0, 0, 0.5)'
              }}
            >
              AMITY INTERNATIONAL
            </div>
            {/* Subtitle */}
            <div 
              className="text-xl md:text-2xl font-light text-center mt-4"
              style={{ 
                fontFamily: 'Nunito Sans, sans-serif',
                color: '#f7f8f6',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
              }}
            >
              Luxury Home Textiles
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${showNav ? 'bg-black/40 backdrop-blur-xl border-b border-white/10' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
            {/* Logo */}
            <div className="flex items-center space-x-3" style={{ color: '#f7f8f6' }}>
              <img className="w-10 h-8" src="/logo.png" />
              <div className="text-2xl font-light tracking-wider" style={{ fontFamily: 'Playfair Display, serif' }}>
                AMITY INTERNATIONAL
              </div>
            </div>
            
            {/* Navigation - Always visible */}
            <nav className="transition-all duration-700 opacity-100 translate-y-0">
              <div className={`flex items-center space-x-8 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <a href="#products" className="text-sm font-light text-gray-300 transition-colors duration-300 relative group" style={{ '--tw-text-opacity': '1' } as React.CSSProperties} onMouseEnter={(e) => e.currentTarget.style.color = '#f7f8f6'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgb(209 213 219)'}>
                  {t('navigation.collections')}
                  <span className="absolute bottom-0 left-0 w-0 h-px transition-all duration-300 group-hover:w-full" style={{ backgroundColor: '#f7f8f6' }} />
                </a>
                <a href="#story" className="text-sm font-light text-gray-300 transition-colors duration-300 relative group" style={{ '--tw-text-opacity': '1' } as React.CSSProperties} onMouseEnter={(e) => e.currentTarget.style.color = '#f7f8f6'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgb(209 213 219)'}>
                  {t('navigation.ourStory')}
                  <span className="absolute bottom-0 left-0 w-0 h-px transition-all duration-300 group-hover:w-full" style={{ backgroundColor: '#f7f8f6' }} />
                </a>
                <a href="#global-reach" className="text-sm font-light text-gray-300 transition-colors duration-300 relative group" style={{ '--tw-text-opacity': '1' } as React.CSSProperties} onMouseEnter={(e) => e.currentTarget.style.color = '#f7f8f6'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgb(209 213 219)'}>
                  {t('navigation.globalReach')}
                  <span className="absolute bottom-0 left-0 w-0 h-px transition-all duration-300 group-hover:w-full" style={{ backgroundColor: '#f7f8f6' }} />
                </a>
                <a href="#contact" className="text-sm font-light text-gray-300 transition-colors duration-300 relative group" style={{ '--tw-text-opacity': '1' } as React.CSSProperties} onMouseEnter={(e) => e.currentTarget.style.color = '#f7f8f6'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgb(209 213 219)'}>
                  {t('navigation.contact')}
                  <span className="absolute bottom-0 left-0 w-0 h-px transition-all duration-300 group-hover:w-full" style={{ backgroundColor: '#f7f8f6' }} />
                </a>
              </div>
            </nav>
          </div>
        </div>
      </header>

    </div>
  );
};

export default Hero;