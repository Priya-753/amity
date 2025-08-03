# Internationalization (i18n) Implementation Guide

## 🌍 Overview

This guide provides a comprehensive internationalization implementation for the Amity International luxury home textiles website, supporting 6 languages with full RTL support, number/date formatting, and professional translation management.

## 📋 Supported Languages

| Language | Code | Direction | Status |
|----------|------|-----------|---------|
| English | `en` | LTR | ✅ Complete |
| Spanish | `es` | LTR | ✅ Complete |
| French | `fr` | LTR | ✅ Complete |
| German | `de` | LTR | ✅ Complete |
| Japanese | `ja` | LTR | ✅ Complete |
| Arabic | `ar` | RTL | ✅ Complete |

## 🛠 Technical Implementation

### Core Libraries Used

```json
{
  "react-i18next": "^13.5.0",
  "i18next": "^23.7.0", 
  "i18next-browser-languagedetector": "^7.2.0",
  "i18next-http-backend": "^2.4.0",
  "date-fns": "^2.30.0",
  "@formatjs/intl-numberformat": "^8.5.0",
  "@formatjs/intl-datetimeformat": "^6.10.0"
}
```

### File Structure

```
src/
├── i18n/
│   ├── config.ts                 # i18n configuration
│   └── locales/
│       ├── en/common.json        # English translations
│       ├── es/common.json        # Spanish translations
│       ├── fr/common.json        # French translations
│       ├── de/common.json        # German translations
│       ├── ja/common.json        # Japanese translations
│       └── ar/common.json        # Arabic translations
├── hooks/
│   └── useI18n.ts               # Custom i18n hook
├── components/
│   ├── LanguageSwitcher.tsx     # Language selection component
│   └── RTLProvider.tsx          # RTL layout provider
└── docs/
    └── I18N_IMPLEMENTATION_GUIDE.md
```

## 🎯 Key Features

### 1. **Automatic Language Detection**
- Browser language detection
- localStorage persistence
- Fallback to English

### 2. **RTL Layout Support**
- Automatic direction switching for Arabic
- RTL-specific CSS classes and animations
- Proper text alignment and spacing

### 3. **Number & Date Formatting**
- Locale-aware number formatting
- Currency formatting with regional preferences
- Date formatting using date-fns with locale support
- Relative and distance date formatting

### 4. **Professional Translation Structure**
- Nested JSON structure for organization
- Consistent key naming conventions
- Context-aware translations

## 🔧 Usage Examples

### Basic Translation

```tsx
import { useI18n } from '../hooks/useI18n';

const MyComponent = () => {
  const { t } = useI18n();
  
  return (
    <h1>{t('hero.title')}</h1>
  );
};
```

### Number Formatting

```tsx
const { formatNumber, formatCurrency, formatPercentage } = useI18n();

// Numbers: 1,234.56 (en) | 1.234,56 (de) | 1,234.56 (ja)
const price = formatNumber(1234.56);

// Currency: $1,234.56 (en) | 1.234,56 € (de) | ¥1,235 (ja)
const amount = formatCurrency(1234.56, 'USD');

// Percentage: 85% (en) | 85 % (fr) | 85% (ja)
const percent = formatPercentage(85);
```

### Date Formatting

```tsx
const { formatDate, formatRelativeDate } = useI18n();

// Formatted dates respect locale
const date = formatDate(new Date(), 'PPP');
// English: "December 21st, 2024"
// Spanish: "21 de diciembre de 2024"
// Arabic: "٢١ ديسمبر ٢٠٢٤"

// Relative dates
const relative = formatRelativeDate(new Date());
// English: "today at 3:30 PM"
// German: "heute um 15:30"
```

### RTL Support

```tsx
const { isRTL } = useI18n();

return (
  <div className={`flex ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
    <span className={`${isRTL ? 'ml-2' : 'mr-2'}`}>Icon</span>
    <span>Text</span>
  </div>
);
```

## 🎨 Language Switcher

The `LanguageSwitcher` component provides:
- Flag icons for visual language identification
- Dropdown with all available languages
- Current language highlighting
- Responsive design (mobile-friendly)
- RTL layout support

## 📱 Responsive Design

### Mobile Considerations
- Compact language switcher on small screens
- Touch-friendly dropdown interactions
- Proper spacing for RTL languages
- Optimized font loading for CJK languages

### RTL Layout Features
- Automatic text direction switching
- Mirrored navigation elements
- Proper spacing utilities
- RTL-aware animations

## 🔄 Translation Workflow

### Adding New Languages

1. **Create translation file:**
```bash
src/i18n/locales/[language-code]/common.json
```

2. **Add to configuration:**
```typescript
// src/i18n/config.ts
import newLangTranslations from './locales/[language-code]/common.json';

const resources = {
  // ... existing languages
  [languageCode]: {
    common: newLangTranslations,
  },
};
```

3. **Update language switcher:**
```typescript
// src/components/LanguageSwitcher.tsx
const languages = [
  // ... existing languages
  { code: 'new-lang', name: 'Language Name', flag: '🏳️' },
];
```

### Translation Keys Structure

```json
{
  "navigation": {
    "collections": "Collections",
    "ourStory": "Our Story"
  },
  "hero": {
    "title": "Amity International",
    "subtitle": "Crafted with Passion"
  },
  "products": {
    "title": "Our Collections",
    "categories": {
      "livingSleeping": "Living & Sleeping"
    }
  }
}
```

## 🚀 Performance Optimizations

### Lazy Loading
- Translation files loaded on demand
- Reduced initial bundle size
- Faster page load times

### Caching Strategy
- localStorage for language preference
- Browser caching for translation files
- Efficient re-renders with React.memo

### Bundle Optimization
- Tree-shaking for unused translations
- Separate chunks for each language
- Optimized date-fns locale imports

## 🧪 Testing Strategy

### Unit Tests
```typescript
// Test translation keys exist
expect(t('hero.title')).not.toBe('hero.title');

// Test number formatting
expect(formatNumber(1234.56)).toMatch(/1[,.]234[,.]56/);

// Test RTL detection
expect(isRTL).toBe(currentLanguage === 'ar');
```

### Integration Tests
- Language switching functionality
- RTL layout rendering
- Form validation in different languages
- Date/number formatting accuracy

## 📊 SEO Considerations

### HTML Lang Attribute
```html
<html lang="en" dir="ltr">
<html lang="ar" dir="rtl">
```

### URL Structure
- Consider implementing `/en/`, `/es/`, `/ar/` routes
- Proper hreflang tags for search engines
- Localized meta descriptions and titles

### Content Strategy
- Professional translations (not machine-generated)
- Cultural adaptation beyond literal translation
- Local market research for terminology

## 🔧 Maintenance

### Regular Tasks
- Update translation files with new content
- Review and improve existing translations
- Monitor translation coverage
- Update date-fns and i18next libraries

### Quality Assurance
- Native speaker review for all translations
- Cultural appropriateness checks
- Technical terminology accuracy
- UI/UX testing in all languages

This implementation provides a solid foundation for international expansion while maintaining the luxury brand aesthetic and professional quality expected by global customers.