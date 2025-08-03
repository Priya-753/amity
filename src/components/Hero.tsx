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
            <div className="text-white text-center">
              <p className="text-lg mb-2">Video not supported</p>
              <p className="text-sm text-gray-400">Please enable JavaScript and video playback</p>
            </div>
          </div>
        </video>
      </div>

      {/* Sticky Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${showNav ? 'bg-black/40 backdrop-blur-xl border-b border-white/10' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
            {/* Logo */}
            <div className="flex items-center space-x-3 text-white">
              <img className="w-10 h-8 text-orange-400" src="/logo.png" />
              <div className="text-2xl font-light tracking-wider">
                AMITY
              </div>
              {/* Language Switcher */}
            <div className="flex items-center space-x-4">
              <LanguageSwitcher />
            </div>
            </div>
            
            {/* Navigation - slides in on scroll */}
            <nav className={`transition-all duration-700 ${showNav ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
              <div className={`flex items-center space-x-8 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <a href="#products" className="text-sm font-light text-gray-300 hover:text-white transition-colors duration-300 relative group">
                  {t('navigation.collections')}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
                </a>
                <a href="#story" className="text-sm font-light text-gray-300 hover:text-white transition-colors duration-300 relative group">
                  {t('navigation.ourStory')}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
                </a>
                <a href="#global-reach" className="text-sm font-light text-gray-300 hover:text-white transition-colors duration-300 relative group">
                  {t('navigation.globalReach')}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
                </a>
                <a href="#contact" className="text-sm font-light text-gray-300 hover:text-white transition-colors duration-300 relative group">
                  {t('navigation.contact')}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
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