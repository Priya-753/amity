import React from 'react';

interface SEOLinksProps {
  className?: string;
}

export const SEOLinks: React.FC<SEOLinksProps> = ({ className = '' }) => {
  return (
    <div className={`text-sm text-gray-600 leading-relaxed ${className}`}>
      <p className="mb-4">
        Discover our comprehensive range of{' '}
        <a 
          href="#products?category=living-sleeping" 
          className="text-gray-800 hover:text-gray-900 underline font-medium"
          title="Premium bed linens and home textiles"
        >
          luxury home textiles
        </a>{' '}
        crafted with precision in India. From{' '}
        <a 
          href="#products?category=living-sleeping&subcategory=bed-linens" 
          className="text-gray-800 hover:text-gray-900 underline"
          title="High-quality bed linens and bedding"
        >
          premium bed linens
        </a>{' '}
        to{' '}
        <a 
          href="#products?category=bath-spa&subcategory=bath-towels" 
          className="text-gray-800 hover:text-gray-900 underline"
          title="Luxury bath towels and spa textiles"
        >
          luxury bath towels
        </a>
        , our{' '}
        <a 
          href="#story" 
          className="text-gray-800 hover:text-gray-900 underline"
          title="Our heritage and craftsmanship story"
        >
          heritage craftsmanship
        </a>{' '}
        ensures exceptional quality for{' '}
        <a 
          href="#we-supply-to" 
          className="text-gray-800 hover:text-gray-900 underline"
          title="Our global client portfolio"
        >
          boutique retailers and interior designers
        </a>{' '}
        worldwide.
      </p>
      
      <p className="mb-4">
        Our{' '}
        <a 
          href="#products?category=kitchen-dining" 
          className="text-gray-800 hover:text-gray-900 underline"
          title="Kitchen textiles and dining accessories"
        >
          kitchen and dining textiles
        </a>{' '}
        include{' '}
        <a 
          href="#products?category=kitchen-dining&subcategory=kitchen-towels" 
          className="text-gray-800 hover:text-gray-900 underline"
          title="Premium kitchen towels"
        >
          premium kitchen towels
        </a>
        ,{' '}
        <a 
          href="#products?category=kitchen-dining&subcategory=aprons" 
          className="text-gray-800 hover:text-gray-900 underline"
          title="Professional kitchen aprons"
        >
          professional aprons
        </a>
        , and{' '}
        <a 
          href="#products?category=kitchen-dining&subcategory=table-linens" 
          className="text-gray-800 hover:text-gray-900 underline"
          title="Elegant table linens"
        >
          elegant table linens
        </a>
        . With our{' '}
        <a 
          href="#global-reach" 
          className="text-gray-800 hover:text-gray-900 underline"
          title="Global export and shipping network"
        >
          global export network
        </a>
        , we serve{' '}
        <a 
          href="#we-supply-to" 
          className="text-gray-800 hover:text-gray-900 underline"
          title="Hospitality and retail clients worldwide"
        >
          hospitality brands and ethical marketplaces
        </a>{' '}
        across 10+ countries.
      </p>
    </div>
  );
};