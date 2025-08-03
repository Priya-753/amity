# Collections Images

This directory contains all the product images for Amity International's collections.

## Folder Structure

```
collections/
├── living-sleeping/
│   ├── category-main.jpg          # Main category image (800x600 recommended)
│   ├── bed-linens/
│   │   ├── image1.jpg
│   │   ├── image2.jpg
│   │   ├── image3.jpg
│   │   ├── image4.jpg
│   │   ├── image5.jpg
│   │   └── image6.jpg
│   ├── curtains/
│   │   ├── image1.jpg
│   │   ├── image2.jpg
│   │   ├── image3.jpg
│   │   ├── image4.jpg
│   │   └── image5.jpg
│   └── cushion-covers/
│       ├── image1.jpg
│       ├── image2.jpg
│       ├── image3.jpg
│       └── image4.jpg
├── bath-spa/
│   ├── category-main.jpg
│   └── bath-towels/
│       ├── image1.jpg
│       ├── image2.jpg
│       ├── image3.jpg
│       └── image4.jpg
├── kitchen-dining/
│   ├── category-main.jpg
│   ├── kitchen-towels/
│   │   ├── image1.jpg
│   │   ├── image2.jpg
│   │   ├── image3.jpg
│   │   └── image4.jpg
│   ├── aprons/
│   │   ├── image1.jpg
│   │   ├── image2.jpg
│   │   └── image3.jpg
│   ├── oven-gloves/
│   │   ├── image1.jpg
│   │   ├── image2.jpg
│   │   └── image3.jpg
│   └── table-linens/
│       ├── image1.jpg
│       ├── image2.jpg
│       └── image3.jpg
└── lifestyle-utility/
    ├── category-main.jpg
    ├── tote-bags/
    │   ├── image1.jpg
    │   ├── image2.jpg
    │   └── image3.jpg
    ├── laundry-bags/
    │   ├── image1.jpg
    │   ├── image2.jpg
    │   └── image3.jpg
    └── storage-solutions/
        ├── image1.jpg
        ├── image2.jpg
        └── image3.jpg
```

## Image Requirements

### Category Main Images
- **Size**: 800x600 pixels (4:3 aspect ratio)
- **Format**: JPG, PNG, or WebP
- **Purpose**: Displayed on main category cards

### Product Images
- **Size**: 600x400 pixels (3:2 aspect ratio)
- **Format**: JPG, PNG, or WebP
- **Purpose**: Displayed in product galleries and carousels

### Quality Guidelines
- **Resolution**: High quality, suitable for luxury products
- **Lighting**: Well-lit, professional product photography
- **Background**: Clean, neutral backgrounds
- **Style**: Consistent with luxury home textiles aesthetic

## Adding Images

1. **Category Images**: Add `category-main.jpg` to each main category folder
2. **Product Images**: Add numbered images (`image1.jpg`, `image2.jpg`, etc.) to each subcategory folder
3. **Naming**: Use the exact naming convention shown above
4. **Formats**: Supported formats are JPG, PNG, and WebP

## How to Add Images to the Website

1. **Upload your images** to the appropriate folders using the naming convention
2. **Uncomment the image paths** in `src/components/ProductsSection.tsx` for the images you've added
3. **Save the file** and the images will appear on your website

For example, if you add `image1.jpg` to `/collections/living-sleeping/bed-linens/`, uncomment this line in the code:
```javascript
// '/collections/living-sleeping/bed-linens/image1.jpg',
```

## Notes

- Images will only appear on the website after you uncomment their paths in the code
- This approach prevents broken image placeholders from appearing
- You can add images gradually as you have them ready
- The website will show exactly the images you specify 