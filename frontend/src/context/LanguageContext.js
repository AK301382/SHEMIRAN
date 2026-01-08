import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../i18n/translations';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('fa');
  const [direction, setDirection] = useState('rtl');

  useEffect(() => {
    // Update document direction and language
    document.documentElement.setAttribute('dir', direction);
    document.documentElement.setAttribute('lang', language);
  }, [direction, language]);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    // Set direction based on language
    if (lang === 'fa' || lang === 'ps') {
      setDirection('rtl');
    } else {
      setDirection('ltr');
    }
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t, direction }}>
      {children}
    </LanguageContext.Provider>
  );
};
