import React, { useState, useRef, useEffect } from 'react';
import { X, Bed, Bath, ChefHat, ShoppingBag, ArrowRight } from 'lucide-react';
import { useI18n } from '../hooks/useI18n';
import { FocusCards } from './FocusCards';
import { ParallaxScroll } from './ui/ParallaxScroll';
import { Breadcrumbs, generateBreadcrumbs } from './Breadcrumbs';
import { InternalLinks, productLinks } from './InternalLinks';

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  image: string;
  subcategories: Subcategory[];
}

interface Subcategory {
  id: string;
  name: string;
  images: string[];
  description: string;
  materials: string;
}

const ProductsSection = () => {
  const { t, isRTL } = useI18n();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [inquiryData, setInquiryData] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    message: '',
    category: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [focusedCard, setFocusedCard] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const categories: Category[] = [
    {
      id: 'living-sleeping',
      name: t('products.categories.livingSleeping'),
      icon: <Bed className="w-8 h-8" />,
      image: '/collections/living-sleeping/category-main.jpg',
      subcategories: [
        {
          id: 'bed-linens',
          name: t('products.subcategories.bedLinens'),
          images: [
            // Add images as you upload them to the folder
            // '/collections/living-sleeping/bed-linens/image1.jpg',
            // '/collections/living-sleeping/bed-linens/image2.jpg',
            // '/collections/living-sleeping/bed-linens/image3.jpg',
            // '/collections/living-sleeping/bed-linens/image4.jpg',
            // '/collections/living-sleeping/bed-linens/image5.jpg',
            // '/collections/living-sleeping/bed-linens/image6.jpg'
          ],
          description: 'Luxury bed linens',
          materials: 'Cotton, Linen'
        },
        {
          id: 'curtains',
          name: t('products.subcategories.curtains'),
          images: [
            // Add images as you upload them to the folder
            // '/collections/living-sleeping/curtains/image1.jpg',
            // '/collections/living-sleeping/curtains/image2.jpg',
            // '/collections/living-sleeping/curtains/image3.jpg',
            // '/collections/living-sleeping/curtains/image4.jpg',
            // '/collections/living-sleeping/curtains/image5.jpg'
          ],
          description: 'Elegant curtains',
          materials: 'Silk, Cotton'
        },
        {
          id: 'cushion-covers',
          name: t('products.subcategories.cushionCovers'),
          images: [
            // Add images as you upload them to the folder
            // '/collections/living-sleeping/cushion-covers/image1.jpg',
            // '/collections/living-sleeping/cushion-covers/image2.jpg',
            // '/collections/living-sleeping/cushion-covers/image3.jpg',
            // '/collections/living-sleeping/cushion-covers/image4.jpg'
          ],
          description: 'Decorative cushion covers',
          materials: 'Velvet, Cotton'
        }
      ]
    },
    {
      id: 'bath-spa',
      name: t('products.categories.bathSpa'),
      icon: <Bath className="w-8 h-8" />,
      image: '/collections/bath-spa/category-main.jpg',
      subcategories: [
        {
          id: 'bath-towels',
          name: t('products.subcategories.bathTowels'),
          images: [
            // Add images as you upload them to the folder
            // '/collections/bath-spa/bath-towels/image1.jpg',
            // '/collections/bath-spa/bath-towels/image2.jpg',
            // '/collections/bath-spa/bath-towels/image3.jpg',
            // '/collections/bath-spa/bath-towels/image4.jpg'
          ],
          description: 'Luxury bath towels',
          materials: 'Cotton, Bamboo'
        }
      ]
    },
    {
      id: 'kitchen-dining',
      name: t('products.categories.kitchenDining'),
      icon: <ChefHat className="w-8 h-8" />,
      image: '/collections/kitchen-dining/category-main.jpg',
      subcategories: [
        {
          id: 'kitchen-towels',
          name: t('products.subcategories.kitchenTowels'),
          images: [
            // Add images as you upload them to the folder
            // '/collections/kitchen-dining/kitchen-towels/image1.jpg',
            // '/collections/kitchen-dining/kitchen-towels/image2.jpg',
            // '/collections/kitchen-dining/kitchen-towels/image3.jpg',
            // '/collections/kitchen-dining/kitchen-towels/image4.jpg'
          ],
          description: 'Kitchen towels',
          materials: 'Cotton, Linen'
        },
        {
          id: 'aprons',
          name: t('products.subcategories.aprons'),
          images: [
            // Add images as you upload them to the folder
            // '/collections/kitchen-dining/aprons/image1.jpg',
            // '/collections/kitchen-dining/aprons/image2.jpg',
            // '/collections/kitchen-dining/aprons/image3.jpg'
          ],
          description: 'Kitchen aprons',
          materials: 'Cotton, Canvas'
        },
        {
          id: 'oven-gloves',
          name: t('products.subcategories.ovenGloves'),
          images: [
            // Add images as you upload them to the folder
            // '/collections/kitchen-dining/oven-gloves/image1.jpg',
            // '/collections/kitchen-dining/oven-gloves/image2.jpg',
            // '/collections/kitchen-dining/oven-gloves/image3.jpg'
          ],
          description: 'Oven gloves and pot holders',
          materials: 'Cotton, Silicone'
        },
        {
          id: 'table-linens',
          name: t('products.subcategories.tableLinens'),
          images: [
            // Add images as you upload them to the folder
            // '/collections/kitchen-dining/table-linens/image1.jpg',
            // '/collections/kitchen-dining/table-linens/image2.jpg',
            // '/collections/kitchen-dining/table-linens/image3.jpg'
          ],
          description: 'Table linens',
          materials: 'Linen, Cotton'
        }
      ]
    },
    {
      id: 'lifestyle-utility',
      name: t('products.categories.lifestyleUtility'),
      icon: <ShoppingBag className="w-8 h-8" />,
      image: '/collections/lifestyle-utility/category-main.jpg',
      subcategories: [
        {
          id: 'tote-bags',
          name: t('products.subcategories.toteBags'),
          images: [
            // Add images as you upload them to the folder
            // '/collections/lifestyle-utility/tote-bags/image1.jpg',
            // '/collections/lifestyle-utility/tote-bags/image2.jpg',
            // '/collections/lifestyle-utility/tote-bags/image3.jpg'
          ],
          description: 'Tote bags',
          materials: 'Canvas, Cotton'
        },
        {
          id: 'laundry-bags',
          name: t('products.subcategories.laundryBags'),
          images: [
            // Add images as you upload them to the folder
            // '/collections/lifestyle-utility/laundry-bags/image1.jpg',
            // '/collections/lifestyle-utility/laundry-bags/image2.jpg',
            // '/collections/lifestyle-utility/laundry-bags/image3.jpg'
          ],
          description: 'Laundry bags',
          materials: 'Cotton, Mesh'
        },
        {
          id: 'storage-solutions',
          name: t('products.subcategories.storageSolutions'),
          images: [
            // Add images as you upload them to the folder
            // '/collections/lifestyle-utility/storage-solutions/image1.jpg',
            // '/collections/lifestyle-utility/storage-solutions/image2.jpg',
            // '/collections/lifestyle-utility/storage-solutions/image3.jpg'
          ],
          description: 'Storage solutions',
          materials: 'Canvas, Cotton'
        }
      ]
    }
  ];

  const handleInquiry = (categoryId: string, subcategoryId?: string) => {
    setInquiryData(prev => ({
      ...prev,
      category: categoryId
    }));
    setShowInquiryForm(true);
  };

  const handleSubmitInquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // API call to submit inquiry
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...inquiryData,
          timestamp: new Date().toISOString(),
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit inquiry');
      }
      
      const result = await response.json();
      console.log('Inquiry submitted successfully:', result);
      
      setSubmitStatus('success');
      
      // Close form after 2 seconds
      setTimeout(() => {
        setShowInquiryForm(false);
        setInquiryData({ name: '', email: '', phone: '', message: '', category: '' });
        setSubmitStatus('idle');
      }, 2000);
      
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Flatten all subcategories for the focus cards grid
  const allSubcategories = categories.flatMap(category => 
    category.subcategories.map(sub => ({
      ...sub,
      categoryName: category.name,
      categoryId: category.id
    }))
  );

  // Get all images for the selected category
  const getSelectedCategoryImages = () => {
    const category = categories.find(cat => cat.id === selectedCategory);
    if (!category) return [];
    
    // Flatten all images from all subcategories in the selected category
    const allImages = category.subcategories.flatMap(sub => sub.images);
    
    // Filter out images that don't exist (return empty array for now)
    // This will be handled by the browser's natural image loading behavior
    return allImages;
  };
  return (
    <div id="products" ref={sectionRef} className="relative">
      {/* Gradient Transition */}
      <div className="h-32 bg-gradient-to-b from-black via-gray-900 to-gray-50" />
      
      {/* Main Products Section */}
      <div className="bg-gray-50 min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          {!selectedCategory ? (
            <>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                  {t('products.title')}
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                  {t('products.subtitle')}
                </p>
              </div>

              {/* Inquire About Products Button */}
              <div className="text-center mb-12">
                <button
                  onClick={() => handleInquiry('general')}
                  className="px-8 py-3 border border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 font-light"
                >
                  {t('products.inquireButton')}
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Back Arrow */}
              <div className="mb-8">
                <Breadcrumbs 
                  items={generateBreadcrumbs('products', selectedCategory)}
                  className="mb-4"
                />
                <button
                  onClick={() => setSelectedCategory('')}
                  className={`text-gray-600 hover:text-gray-900 transition-colors flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-0 ml-2' : 'rotate-180 mr-2'}`} />
                  {t('common.back')}
                </button>
              </div>

              {/* Category Header */}
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                  {categories.find(cat => cat.id === selectedCategory)?.name}
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                  Discover our curated selection within this collection, each piece crafted with meticulous attention to detail.
                </p>
              </div>
            </>
          )}

          {/* Main Categories - Bento Grid */}
          {!selectedCategory && (
            <>
              <div className="mb-16">
                <FocusCards 
                  cards={categories.map(category => ({
                    title: category.name,
                    src: category.image,
                    id: category.id
                  }))}
                  onCardClick={(card) => setSelectedCategory(card.id)}
                />
              </div>
              
              {/* Internal Links Section */}
              <div className="mb-16">
                <InternalLinks 
                  title="Explore Our Product Categories"
                  links={productLinks}
                />
              </div>
            </>
          )}

          {/* Category Images - Parallax Scroll */}
          {selectedCategory && (
            <div className="mb-16">
              <ParallaxScroll 
                images={getSelectedCategoryImages()}
                className="h-[60rem]"
              />
            </div>
          )}

          {/* Sticky Inquiry Button - Always visible */}
          <div id="contact" className="fixed bottom-8 right-8 z-40">
            <button
              onClick={() => handleInquiry('general')}
              className="px-6 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 font-light shadow-lg rounded-full"
            >
              Inquire About Our Products
            </button>
          </div>
        </div>
      </div>

      {/* Inquiry Form Modal */}
      {showInquiryForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[85vh] relative animate-fade-in overflow-hidden shadow-2xl">
            <button
              onClick={() => setShowInquiryForm(false)}
              className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} text-gray-400 hover:text-gray-600 transition-colors z-10 bg-white rounded-full p-1 shadow-sm`}
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="flex flex-col h-full max-h-[85vh]">
              {/* Header */}
              <div className="px-6 py-4 border-b border-gray-100">
                <h3 className="text-2xl font-light text-gray-900">{t('inquiry.title')}</h3>
                <p className="text-sm text-gray-600 mt-1">
                  {t('inquiry.subtitle')}
                </p>
              </div>

              {/* Form Content - Scrollable */}
              <div className="flex-1 overflow-y-auto px-6 py-4">
                <form onSubmit={handleSubmitInquiry} className="space-y-4">
                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                      {t('inquiry.success')}
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                      {t('inquiry.error')}
                    </div>
                  )}
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t('inquiry.form.fullName')} *</label>
                    <input
                      type="text"
                      required
                      value={inquiryData.name}
                      onChange={(e) => setInquiryData({ ...inquiryData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-gray-400 focus:outline-none transition-colors bg-gray-50"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t('inquiry.form.email')} *</label>
                    <input
                      type="email"
                      required
                      value={inquiryData.email}
                      onChange={(e) => setInquiryData({ ...inquiryData, email: e.target.value })}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-gray-400 focus:outline-none transition-colors bg-gray-50"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t('inquiry.form.company')}</label>
                    <input
                      type="text"
                      value={inquiryData.phone}
                      onChange={(e) => setInquiryData({ ...inquiryData, phone: e.target.value })}
                      placeholder="Your Company Name"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-gray-400 focus:outline-none transition-colors bg-gray-50"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t('inquiry.form.message')}</label>
                    <textarea
                      rows={3}
                      value={inquiryData.message}
                      onChange={(e) => setInquiryData({ ...inquiryData, message: e.target.value })}
                      placeholder={t('inquiry.form.messagePlaceholder')}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-gray-400 focus:outline-none transition-colors resize-none bg-gray-50"
                    />
                  </div>
                </form>
              </div>

              {/* Footer with Submit Button */}
              <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="text-xs text-gray-500">
                    <p>📧 contact@amityintl.com</p>
                    <p>📞 +91 (422) 123-4567</p>
                  </div>
                  <button
                    type="submit"
                    form="inquiry-form"
                    disabled={isSubmitting}
                    onClick={handleSubmitInquiry}
                    className="px-6 py-2.5 bg-black text-white hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-300 font-medium rounded-lg flex items-center justify-center text-sm"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        {t('inquiry.form.submitting')}
                      </>
                    ) : (
                      t('inquiry.form.submit')
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsSection;