import React, { useEffect } from 'react';
import { useI18n } from '../hooks/useI18n';

interface RTLProviderProps {
  children: React.ReactNode;
}

export const RTLProvider: React.FC<RTLProviderProps> = ({ children }) => {
  const { isRTL, currentLanguage } = useI18n();

  useEffect(() => {
    // Update document direction and language
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLanguage;
    
    // Add RTL class to body for additional styling
    if (isRTL) {
      document.body.classList.add('rtl');
    } else {
      document.body.classList.remove('rtl');
    }
  }, [isRTL, currentLanguage]);

  return (
    <div className={`${isRTL ? 'rtl' : 'ltr'} ${isRTL ? 'text-right' : 'text-left'}`}>
      {children}
    </div>
  );
};