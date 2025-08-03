import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
  current?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  return (
    <nav aria-label="Breadcrumb" className={`flex ${className}`}>
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <a
            href="/"
            className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
            aria-label="Home"
          >
            <Home className="w-4 h-4" />
          </a>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
            {item.current ? (
              <span className="text-gray-900 font-medium" aria-current="page">
                {item.label}
              </span>
            ) : (
              <a
                href={item.href}
                className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
              >
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

// Breadcrumb generator utility
export const generateBreadcrumbs = (currentPath: string, categoryId?: string, subcategoryId?: string): BreadcrumbItem[] => {
  const breadcrumbs: BreadcrumbItem[] = [];

  if (currentPath.includes('products') || categoryId) {
    breadcrumbs.push({
      label: 'Our Collections',
      href: '#products'
    });

    if (categoryId) {
      const categoryNames: Record<string, string> = {
        'living-sleeping': 'Living & Sleeping',
        'bath-spa': 'Bath & Spa',
        'kitchen-dining': 'Kitchen & Dining',
        'lifestyle-utility': 'Lifestyle & Utility'
      };

      breadcrumbs.push({
        label: categoryNames[categoryId] || 'Category',
        href: `#products?category=${categoryId}`,
        current: !subcategoryId
      });

      if (subcategoryId) {
        const subcategoryNames: Record<string, string> = {
          'bed-linens': 'Bed Linens',
          'curtains': 'Curtains',
          'cushion-covers': 'Cushion Covers',
          'bath-towels': 'Bath Towels',
          'kitchen-towels': 'Kitchen Towels',
          'aprons': 'Aprons',
          'oven-gloves': 'Oven Gloves & Pot Holders',
          'table-linens': 'Table Linens',
          'tote-bags': 'Tote Bags',
          'laundry-bags': 'Laundry Bags',
          'storage-solutions': 'Storage Solutions'
        };

        breadcrumbs.push({
          label: subcategoryNames[subcategoryId] || 'Product',
          href: `#products?category=${categoryId}&subcategory=${subcategoryId}`,
          current: true
        });
      }
    }
  }

  return breadcrumbs;
};