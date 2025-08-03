import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

// Import translation files
import enTranslations from './locales/en/common.json';
import esTranslations from './locales/es/common.json';
import frTranslations from './locales/fr/common.json';
import deTranslations from './locales/de/common.json';
import jaTranslations from './locales/ja/common.json';
import arTranslations from './locales/ar/common.json';

const resources = {
  en: {
    common: enTranslations,
  },
  es: {
    common: esTranslations,
  },
  fr: {
    common: frTranslations,
  },
  de: {
    common: deTranslations,
  },
  ja: {
    common: jaTranslations,
  },
  ar: {
    common: arTranslations,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    
    // Language detection options
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false, // React already escapes values
    },

    // Namespace configuration
    defaultNS: 'common',
    ns: ['common'],

    // React specific options
    react: {
      useSuspense: false,
    },
  });

export default i18n;