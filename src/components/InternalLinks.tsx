import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface InternalLink {
  text: string;
  href: string;
  description?: string;
  external?: boolean;
}

interface InternalLinksProps {
  title: string;
  links: InternalLink[];
  className?: string;
}

export const InternalLinks: React.FC<InternalLinksProps> = ({ 
  title, 
  links, 
  className = '' 
}) => {
  return (
    <div className={`bg-gray-50 rounded-lg p-6 ${className}`}>
      <h3 className="text-lg font-medium text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="group flex items-start space-x-3 text-gray-700 hover:text-gray-900 transition-colors duration-200"
              {...(link.external && { 
                target: "_blank", 
                rel: "noopener noreferrer" 
              })}
            >
              <ArrowRight className="w-4 h-4 mt-0.5 text-gray-400 group-hover:text-gray-600 transition-colors duration-200" />
              <div className="flex-1">
                <span className="font-medium group-hover:underline">
                  {link.text}
                  {link.external && (
                    <ExternalLink className="w-3 h-3 ml-1 inline" />
                  )}
                </span>
                {link.description && (
                  <p className="text-sm text-gray-500 mt-1">{link.description}</p>
                )}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Predefined link sets for different sections
export const productLinks: InternalLink[] = [
  {
    text: "Living & Sleeping Collection",
    href: "#products?category=living-sleeping",
    description: "Luxury bed linens, curtains, and cushion covers"
  },
  {
    text: "Bath & Spa Essentials",
    href: "#products?category=bath-spa",
    description: "Premium bath towels and spa accessories"
  },
  {
    text: "Kitchen & Dining Textiles",
    href: "#products?category=kitchen-dining",
    description: "Kitchen towels, aprons, and table linens"
  },
  {
    text: "Lifestyle & Utility Items",
    href: "#products?category=lifestyle-utility",
    description: "Tote bags, storage solutions, and more"
  }
];

export const companyLinks: InternalLink[] = [
  {
    text: "Our Heritage Story",
    href: "#story",
    description: "Three decades of textile craftsmanship"
  },
  {
    text: "Global Export Network",
    href: "#global-reach",
    description: "Serving 50+ countries worldwide"
  },
  {
    text: "Client Portfolio",
    href: "#we-supply-to",
    description: "Trusted by boutique retailers and design studios"
  },
  {
    text: "Contact Our Team",
    href: "#contact",
    description: "Get in touch for custom requirements"
  }
];