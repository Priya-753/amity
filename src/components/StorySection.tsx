import React from 'react';
import { Timeline } from './Timeline';
import { CometCard } from './ui/CometCard';
import { X } from 'lucide-react';

const StorySection = () => {
  const [selectedImage, setSelectedImage] = React.useState<{ src: string; alt: string } | null>(null);

  const timelineData = [
    {
      title: "1990s",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Founded in Karur, one of India's oldest textile hubs, Amity International began 
            as a small family business with a simple belief: that beautiful, high-quality 
            home textiles can be made with soul, not excess. We started crafting premium 
            textiles with traditional South Indian techniques passed down through generations.
          </p>
          <div className="flex justify-center">
            <div className="w-full max-w-lg p-8">
              <CometCard className="h-40 md:h-72 lg:h-96 w-full" rotateDepth={15} translateDepth={15}>
              <button
                type="button"
                onClick={() => setSelectedImage({
                  src: "/story/1990s/main-image.jpg",
                  alt: "Early workshop - 1990s"
                })}
                className="flex h-full w-full cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-3 md:p-4 saturate-0"
                aria-label="View Early workshop - 1990s"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "none",
                  opacity: 1,
                  boxShadow: "rgba(251, 146, 60, 0.01) 0px 520px 146px 0px, rgba(251, 146, 60, 0.04) 0px 333px 133px 0px, rgba(251, 146, 60, 0.26) 0px 83px 83px 0px, rgba(251, 146, 60, 0.29) 0px 21px 46px 0px",
                }}
              >
                <div className="mx-2 flex-1">
                  <div className="relative mt-2 aspect-[4/3] w-full">
                    <img
                      loading="lazy"
                      className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover contrast-75"
                      alt="Early workshop - 1990s"
                      src="/story/1990s/main-image.jpg"
                      style={{
                        boxShadow: "rgba(251, 146, 60, 0.05) 0px 5px 6px 0px",
                        opacity: 1,
                      }}
                    />
                  </div>
                </div>
                <div className="mt-2 flex flex-shrink-0 items-center justify-between p-3 md:p-4 font-mono" style={{ color: '#f7f8f6' }}>
                  <div className="text-xs md:text-sm">Early workshop - Traditional craftsmanship</div>
                  <div className="text-xs opacity-50" style={{ color: '#f4a94e' }}>#1990</div>
                </div>
              </button>
            </CometCard>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2000s",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Expanded our operations to become a vertically integrated manufacturer, 
            working closely with artisans, designers, and mills. We specialized in 
            luxury cotton and linen home textiles - from artfully crafted cushion 
            covers and table linens to minimalist curtains and wellness-focused bath products.
          </p>
          <div className="flex justify-center">
            <div className="w-full max-w-md p-8">
            <CometCard className="h-32 md:h-64 lg:h-80 w-full" rotateDepth={15} translateDepth={15}>
              <button
                type="button"
                onClick={() => setSelectedImage({
                  src: "/story/2000s/main-image.jpg",
                  alt: "Expanded product line - 2000s"
                })}
                className="flex h-full w-full cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 md:p-3 saturate-0"
                aria-label="View Modern luxury - Today"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "none",
                  opacity: 1,
                  boxShadow: "rgba(251, 146, 60, 0.01) 0px 520px 146px 0px, rgba(251, 146, 60, 0.04) 0px 333px 133px 0px, rgba(251, 146, 60, 0.26) 0px 83px 83px 0px, rgba(251, 146, 60, 0.29) 0px 21px 46px 0px",
                }}
              >
                <div className="mx-2 flex-1">
                  <div className="relative mt-2 aspect-[4/3] w-full">
                    <img
                      loading="lazy"
                      className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover contrast-75"
                      alt="Modern luxury - Today"
                      src="/story/2000s/main-image.jpg"
                      style={{
                        boxShadow: "rgba(251, 146, 60, 0.05) 0px 5px 6px 0px",
                        opacity: 1,
                      }}
                    />
                  </div>
                </div>
                <div className="mt-2 flex flex-shrink-0 items-center justify-between p-3 md:p-4 font-mono text-white">
                  <div className="text-xs md:text-sm">Modern luxury - Future vision</div>
                  <div className="text-xs opacity-50" style={{ color: '#f4a94e' }}>#2024</div>
                </div>
              </button>
            </CometCard>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2010s",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Began expanding globally, quietly powering shelves, showrooms, and interiors 
            across North America, Europe, Japan, and Australia. We developed our expertise 
            in understanding different market nuances while maintaining our commitment to 
            quality control, timely delivery, and customization.
          </p>
          <div className="flex justify-center">
            <div className="w-full max-w-md p-8">
              <CometCard className="h-32 md:h-64 lg:h-80 w-full" rotateDepth={15} translateDepth={15}>
              <button
                type="button"
                onClick={() => setSelectedImage({
                  src: "/story/2010s/main-image.jpg",
                  alt: "Sustainable production - 2010s"
                })}
                className="flex h-full w-full cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 md:p-3 saturate-0"
                aria-label="View Sustainable production - 2010s"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "none",
                  opacity: 1,
                  boxShadow: "rgba(251, 146, 60, 0.01) 0px 520px 146px 0px, rgba(251, 146, 60, 0.04) 0px 333px 133px 0px, rgba(251, 146, 60, 0.26) 0px 83px 83px 0px, rgba(251, 146, 60, 0.29) 0px 21px 46px 0px",
                }}
              >
                <div className="mx-2 flex-1">
                  <div className="relative mt-2 aspect-[4/3] w-full">
                    <img
                      loading="lazy"
                      className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover contrast-75"
                      alt="Sustainable production - 2010s"
                      src="/story/2010s/main-image.jpg"
                      style={{
                        boxShadow: "rgba(251, 146, 60, 0.05) 0px 5px 6px 0px",
                        opacity: 1,
                      }}
                    />
                  </div>
                </div>
                <div className="mt-2 flex flex-shrink-0 items-center justify-between p-3 md:p-4 font-mono text-white">
                  <div className="text-xs md:text-sm">Sustainable production - Eco-friendly materials</div>
                  <div className="text-xs opacity-50" style={{ color: '#f4a94e' }}>#2010</div>
                </div>
              </button>
            </CometCard>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2020s",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Became a trusted textile partner for global retailers, design houses, 
            and boutique hospitality brands. Whether sourcing for a boutique hotel 
            in Kyoto, a design-led home brand in Melbourne, or a heritage retailer 
            in the U.S., we deliver with precision, consistency, and heart.
          </p>
          <div className="flex justify-center">
            <div className="w-full max-w-md p-8">
              <CometCard className="h-32 md:h-64 lg:h-80 w-full" rotateDepth={15} translateDepth={15}>
              <button
                type="button"
                onClick={() => setSelectedImage({
                  src: "/story/2020s/main-image.jpg",
                  alt: "Global expansion - 2020s"
                })}
                className="flex h-full w-full cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 md:p-3 saturate-0"
                aria-label="View Global expansion - 2020s"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "none",
                  opacity: 1,
                  boxShadow: "rgba(251, 146, 60, 0.01) 0px 520px 146px 0px, rgba(251, 146, 60, 0.04) 0px 333px 133px 0px, rgba(251, 146, 60, 0.26) 0px 83px 83px 0px, rgba(251, 146, 60, 0.29) 0px 21px 46px 0px",
                }}
              >
                <div className="mx-2 flex-1">
                  <div className="relative mt-2 aspect-[4/3] w-full">
                    <img
                      loading="lazy"
                      className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover contrast-75"
                      alt="Global expansion - 2020s"
                      src="/story/2020s/main-image.jpg"
                      style={{
                        boxShadow: "rgba(251, 146, 60, 0.05) 0px 5px 6px 0px",
                        opacity: 1,
                      }}
                    />
                  </div>
                </div>
                <div className="mt-2 flex flex-shrink-0 items-center justify-between p-3 md:p-4 font-mono text-white">
                  <div className="text-xs md:text-sm">Global expansion - Custom designs</div>
                  <div className="text-xs opacity-50" style={{ color: '#f4a94e' }}>#2020</div>
                </div>
              </button>
            </CometCard>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Today",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Continuing our mission to craft timeless home textiles that elevate everyday 
            living — blending Indian craftsmanship with international quality and taste. 
            Our foundation remains unchanged: craft with care, deliver with integrity, 
            and build relationships that last longer than trends.
          </p>
          <div className="flex justify-center">
            <div className="w-full max-w-md p-8">
              <CometCard className="h-32 md:h-64 lg:h-80 w-full" rotateDepth={15} translateDepth={15}>
              <button
                type="button"
                onClick={() => setSelectedImage({
                  src: "/story/today/main-image.jpg",
                  alt: "Modern luxury - Today"
                })}
                className="flex h-full w-full cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 md:p-3 saturate-0"
                aria-label="View Modern luxury - Today"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "none",
                  opacity: 1,
                  boxShadow: "rgba(251, 146, 60, 0.01) 0px 520px 146px 0px, rgba(251, 146, 60, 0.04) 0px 333px 133px 0px, rgba(251, 146, 60, 0.26) 0px 83px 83px 0px, rgba(251, 146, 60, 0.29) 0px 21px 46px 0px",
                }}
              >
                <div className="mx-2 flex-1">
                  <div className="relative mt-2 aspect-[4/3] w-full">
                    <img
                      loading="lazy"
                      className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover contrast-75"
                      alt="Modern luxury - Today"
                      src="/story/today/main-image.jpg"
                      style={{
                        boxShadow: "rgba(251, 146, 60, 0.05) 0px 5px 6px 0px",
                        opacity: 1,
                      }}
                    />
                  </div>
                </div>
                <div className="mt-2 flex flex-shrink-0 items-center justify-between p-3 md:p-4 font-mono text-white">
                  <div className="text-xs md:text-sm">Modern luxury - Future vision</div>
                  <div className="text-xs opacity-50" style={{ color: '#f4a94e' }}>#2024</div>
                </div>
              </button>
            </CometCard>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div id="story" className="bg-neutral-950 relative">
      <Timeline data={timelineData} />
      
      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 transition-colors z-10"
              style={{ color: '#f7f8f6' } as React.CSSProperties}
              style={{ '--tw-text-opacity': '1' } as React.CSSProperties}
              onMouseEnter={(e) => e.currentTarget.style.color = '#f4a94e'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-full object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 rounded-b-lg" style={{ color: '#f7f8f6' }}>
              <h3 className="text-lg font-medium">{selectedImage.alt}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StorySection;