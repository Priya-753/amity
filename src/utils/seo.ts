// SEO and URL utilities for internal linking

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl?: string;
}

// URL structure utilities
export const createSEOFriendlyUrl = (category: string, subcategory?: string): string => {
  const baseUrl = '/products';
  const categorySlug = category.toLowerCase().replace(/\s+/g, '-');
  
  if (subcategory) {
    const subcategorySlug = subcategory.toLowerCase().replace(/\s+/g, '-');
    return `${baseUrl}/${categorySlug}/${subcategorySlug}`;
  }
  
  return `${baseUrl}/${categorySlug}`;
};

// Anchor text variations for different contexts
export const anchorTextVariations = {
  'living-sleeping': [
    'luxury bed linens',
    'premium bedding collection',
    'elegant bedroom textiles',
    'high-quality bed linens',
    'luxury bedroom accessories'
  ],
  'bath-spa': [
    'luxury bath towels',
    'premium spa textiles',
    'high-quality bath linens',
    'luxury bathroom accessories',
    'spa-quality towels'
  ],
  'kitchen-dining': [
    'premium kitchen textiles',
    'luxury kitchen towels',
    'elegant table linens',
    'professional kitchen accessories',
    'high-quality dining textiles'
  ],
  'lifestyle-utility': [
    'luxury tote bags',
    'premium storage solutions',
    'elegant utility textiles',
    'high-quality lifestyle accessories',
    'luxury home organization'
  ]
};

// SEO configurations for different pages
export const seoConfigs: Record<string, SEOConfig> = {
  home: {
    title: 'Amity Internation | Premium Bed Linens & Bath Towels | Amity International',
    description: 'Discover premium home textiles crafted in India. Luxury bed linens, bath towels, kitchen textiles for boutique retailers and interior designers worldwide.',
    keywords: ['luxury home textiles', 'premium bed linens', 'luxury bath towels', 'home textile manufacturer', 'Indian textiles export']
  },
  products: {
    title: 'Premium Home Textile Collections | Luxury Bedding & Bath | Amity International',
    description: 'Explore our luxury home textile collections including premium bed linens, bath towels, kitchen textiles, and lifestyle accessories for global retailers.',
    keywords: ['home textile collections', 'luxury bedding', 'premium bath towels', 'kitchen textiles', 'textile manufacturer']
  },
  'living-sleeping': {
    title: 'Luxury Bed Linens & Bedroom Textiles | Premium Bedding Collection',
    description: 'Premium bed linens, elegant curtains, and luxury cushion covers crafted with traditional Indian techniques for boutique retailers worldwide.',
    keywords: ['luxury bed linens', 'premium bedding', 'bedroom textiles', 'curtains', 'cushion covers']
  },
  'bath-spa': {
    title: 'Luxury Bath Towels & Spa Textiles | Premium Bathroom Accessories',
    description: 'High-quality bath towels and spa textiles made from premium cotton and bamboo for luxury hotels and wellness brands.',
    keywords: ['luxury bath towels', 'spa textiles', 'premium bathroom accessories', 'hotel towels', 'wellness textiles']
  },
  story: {
    title: 'Our Heritage Story | 30+ Years of Textile Craftsmanship | Amity International',
    description: 'Discover our journey from a small family business in Karur to a trusted global textile partner serving 10+ countries with premium home textiles.',
    keywords: ['textile heritage', 'Indian craftsmanship', 'textile manufacturer history', 'Karur textiles', 'family business']
  }
};

// Link attribute best practices
export const getLinkAttributes = (href: string, isExternal = false) => {
  const baseAttributes: Record<string, string> = {};
  
  if (isExternal) {
    baseAttributes.target = '_blank';
    baseAttributes.rel = 'noopener noreferrer';
  }
  
  // Add rel="canonical" for main category pages
  if (href.includes('#products?category=')) {
    baseAttributes.rel = 'canonical';
  }
  
  return baseAttributes;
};

// Generate structured data for products
export const generateProductStructuredData = (category: string, subcategory?: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${category} ${subcategory || ''}`.trim(),
    "manufacturer": {
      "@type": "Organization",
      "name": "Amity International",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Karur",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "India"
      }
    },
    "category": "Home Textiles",
    "brand": "Amity International"
  };
};