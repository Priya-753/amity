import React from 'react';
import { RTLProvider } from './components/RTLProvider';
import Hero from './components/Hero';
import ProductsSection from './components/ProductsSection';
import StorySection from './components/StorySection';
import WeSupplyToSection from './components/WeSupplyToSection';
import ExportSection from './components/ExportSection';
import Footer from './components/Footer';

function App() {
  return (
    <RTLProvider>
      <div className="font-sans">
        <Hero />
        <ProductsSection />
        <StorySection />
        <WeSupplyToSection />
        <ExportSection />
        <Footer />
      </div>
    </RTLProvider>
  );
}

export default App;