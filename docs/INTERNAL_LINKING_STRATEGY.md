# Internal Linking Strategy for Amity International

## Website Structure Analysis

### Current Page Hierarchy
```
Home (/)
├── Our Collections (#products)
│   ├── Living & Sleeping (#products?category=living-sleeping)
│   │   ├── Bed Linens (#products?category=living-sleeping&subcategory=bed-linens)
│   │   ├── Curtains (#products?category=living-sleeping&subcategory=curtains)
│   │   └── Cushion Covers (#products?category=living-sleeping&subcategory=cushion-covers)
│   ├── Bath & Spa (#products?category=bath-spa)
│   │   └── Bath Towels (#products?category=bath-spa&subcategory=bath-towels)
│   ├── Kitchen & Dining (#products?category=kitchen-dining)
│   │   ├── Kitchen Towels (#products?category=kitchen-dining&subcategory=kitchen-towels)
│   │   ├── Aprons (#products?category=kitchen-dining&subcategory=aprons)
│   │   ├── Oven Gloves (#products?category=kitchen-dining&subcategory=oven-gloves)
│   │   └── Table Linens (#products?category=kitchen-dining&subcategory=table-linens)
│   └── Lifestyle & Utility (#products?category=lifestyle-utility)
│       ├── Tote Bags (#products?category=lifestyle-utility&subcategory=tote-bags)
│       ├── Laundry Bags (#products?category=lifestyle-utility&subcategory=laundry-bags)
│       └── Storage Solutions (#products?category=lifestyle-utility&subcategory=storage-solutions)
├── Our Story (#story)
├── We Supply To (#we-supply-to)
├── Global Reach (#global-reach)
└── Contact (#contact)
```

## Internal Linking Recommendations

### 1. High-Priority Pages Needing More Internal Links

#### **Home Page**
- **Current Status**: Limited internal links
- **Recommendations**: 
  - Add contextual links in hero description
  - Include "Related Products" sections
  - Add footer with comprehensive site navigation

#### **Product Category Pages**
- **Current Status**: Basic navigation only
- **Recommendations**:
  - Cross-link between related categories
  - Add "You might also like" sections
  - Include breadcrumb navigation

#### **Story Section**
- **Current Status**: Isolated content
- **Recommendations**:
  - Link to relevant product categories in timeline content
  - Add "See Our Products" CTAs
  - Connect heritage story to current offerings

### 2. Anchor Text Variations

#### **Primary Keywords**
- "luxury home textiles"
- "premium bed linens"
- "luxury bath towels"
- "kitchen textiles"
- "home textile manufacturer"

#### **Long-tail Keywords**
- "high-quality bed linens for boutique retailers"
- "luxury bath towels for hospitality brands"
- "premium kitchen textiles for interior designers"
- "custom home textiles for global markets"

#### **Branded Keywords**
- "Amity International textiles"
- "Karur textile manufacturer"
- "Indian luxury home textiles"

### 3. Link Distribution Strategy

#### **Hub Pages** (Most Important)
1. **Home Page**: 15-20 internal links
2. **Products Overview**: 12-15 internal links
3. **Our Story**: 8-10 internal links

#### **Category Pages** (Medium Priority)
- Living & Sleeping: 8-10 internal links
- Bath & Spa: 6-8 internal links
- Kitchen & Dining: 8-10 internal links
- Lifestyle & Utility: 6-8 internal links

#### **Supporting Pages** (Lower Priority)
- We Supply To: 4-6 internal links
- Global Reach: 4-6 internal links
- Contact: 3-5 internal links

### 4. Best Practices Implementation

#### **Link Attributes**
```html
<!-- Internal product links -->
<a href="#products?category=living-sleeping" 
   title="Premium bed linens and bedroom textiles"
   rel="canonical">
   Luxury Bed Linens
</a>

<!-- External links -->
<a href="https://example.com" 
   target="_blank" 
   rel="noopener noreferrer"
   title="External resource">
   External Link
</a>

<!-- Navigation links -->
<a href="#story" 
   title="Our heritage and craftsmanship story"
   aria-label="Learn about our company history">
   Our Story
</a>
```

#### **URL Structure Best Practices**
- Use descriptive, keyword-rich URLs
- Implement consistent URL patterns
- Use hyphens for word separation
- Keep URLs under 60 characters when possible

### 5. Technical Implementation

#### **Breadcrumb Navigation**
```jsx
// Implemented in Breadcrumbs.tsx
<Breadcrumbs items={[
  { label: 'Our Collections', href: '#products' },
  { label: 'Living & Sleeping', href: '#products?category=living-sleeping' },
  { label: 'Bed Linens', href: '#products?category=living-sleeping&subcategory=bed-linens', current: true }
]} />
```

#### **Internal Link Components**
```jsx
// Implemented in InternalLinks.tsx
<InternalLinks 
  title="Related Products"
  links={[
    {
      text: "Luxury Bath Towels",
      href: "#products?category=bath-spa",
      description: "Premium spa-quality towels"
    }
  ]}
/>
```

### 6. SEO-Optimized Content Links

#### **Contextual Linking in Content**
- Embed 3-5 internal links per major content section
- Use natural, descriptive anchor text
- Link to both category and subcategory pages
- Include related company information (story, global reach)

#### **Footer Link Strategy**
- Comprehensive site navigation
- Product category quick links
- Company information links
- Contact and inquiry links

### 7. Monitoring and Optimization

#### **Key Metrics to Track**
- Internal link click-through rates
- Page authority distribution
- User navigation patterns
- Search engine crawl efficiency

#### **Regular Maintenance Tasks**
- Update anchor text variations quarterly
- Add new internal links with content updates
- Monitor for broken internal links
- Optimize link placement based on user behavior

### 8. Mobile Optimization

#### **Mobile-Specific Considerations**
- Ensure breadcrumbs are touch-friendly
- Optimize link spacing for mobile taps
- Use collapsible navigation for complex hierarchies
- Prioritize most important links above the fold

This internal linking strategy will improve SEO performance, user navigation, and overall site authority distribution while maintaining a natural, user-friendly experience.