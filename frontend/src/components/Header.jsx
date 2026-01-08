import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const { language, changeLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages = [
    { code: 'fa', name: 'فارسی', flag: '🇦🇫' },
    { code: 'ps', name: 'پښتو', flag: '🇦🇫' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
  ];

  const menuItems = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'products', href: '#products' },
    { key: 'blog', href: '#blog' },
    { key: 'faq', href: '#faq' },
    { key: 'contact', href: '#contact' }
  ];

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
    setIsLangOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md transition-opacity duration-700 ease-in-out ${
      isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 bg-clip-text text-transparent">
              شمیران
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-gray-900 hover:text-orange-600 transition-all font-bold text-lg"
              >
                {t(item.key)}
              </a>
            ))}
          </nav>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Language Dropdown */}
            <div className="relative">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2"
              >
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline">
                  {languages.find(l => l.code === language)?.name}
                </span>
              </Button>
              
              {isLangOpen && (
                <div className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[150px]">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-2 ${
                        language === lang.code ? 'bg-orange-50 text-orange-600' : 'text-gray-700'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            {menuItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 text-gray-900 hover:text-orange-600 transition-all font-bold text-lg"
              >
                {t(item.key)}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
