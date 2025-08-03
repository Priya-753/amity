import { useTranslation } from 'react-i18next';
import { format, formatDistance, formatRelative } from 'date-fns';
import { enUS, es, fr, de, ja, ar } from 'date-fns/locale';

// Locale mapping for date-fns
const localeMap = {
  en: enUS,
  es: es,
  fr: fr,
  de: de,
  ja: ja,
  ar: ar,
};

export const useI18n = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const isRTL = currentLanguage === 'ar';

  // Number formatting
  const formatNumber = (number: number, options?: Intl.NumberFormatOptions) => {
    return new Intl.NumberFormat(currentLanguage, options).format(number);
  };

  // Currency formatting
  const formatCurrency = (amount: number, currency = 'USD') => {
    return new Intl.NumberFormat(currentLanguage, {
      style: 'currency',
      currency,
    }).format(amount);
  };

  // Date formatting
  const formatDate = (date: Date | string, formatStr = 'PPP') => {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    const locale = localeMap[currentLanguage as keyof typeof localeMap] || enUS;
    return format(dateObj, formatStr, { locale });
  };

  // Relative date formatting
  const formatRelativeDate = (date: Date | string) => {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    const locale = localeMap[currentLanguage as keyof typeof localeMap] || enUS;
    return formatRelative(dateObj, new Date(), { locale });
  };

  // Distance date formatting
  const formatDistanceDate = (date: Date | string) => {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    const locale = localeMap[currentLanguage as keyof typeof localeMap] || enUS;
    return formatDistance(dateObj, new Date(), { addSuffix: true, locale });
  };

  // Percentage formatting
  const formatPercentage = (value: number) => {
    return new Intl.NumberFormat(currentLanguage, {
      style: 'percent',
      minimumFractionDigits: 0,
      maximumFractionDigits: 1,
    }).format(value / 100);
  };

  // Change language
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    // Update document direction for RTL languages
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lng;
  };

  return {
    t,
    currentLanguage,
    isRTL,
    formatNumber,
    formatCurrency,
    formatDate,
    formatRelativeDate,
    formatDistanceDate,
    formatPercentage,
    changeLanguage,
  };
};