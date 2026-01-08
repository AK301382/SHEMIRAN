import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const FAQ = () => {
  const { t } = useLanguage();

  const faqs = [
    { question: 'faq1Q', answer: 'faq1A' },
    { question: 'faq2Q', answer: 'faq2A' },
    { question: 'faq3Q', answer: 'faq3A' },
    { question: 'faq4Q', answer: 'faq4A' }
  ];

  return (
    <section id="faq" className="relative py-20 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Squares */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`square-${i}`}
            className="absolute bg-white/30 rounded-lg animate-float-random"
            style={{
              width: `${Math.random() * 40 + 20}px`,
              height: `${Math.random() * 40 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 5}s`,
            }}
          />
        ))}
        
        {/* Animated Circles */}
        {[...Array(10)].map((_, i) => (
          <div
            key={`circle-${i}`}
            className="absolute rounded-full bg-gradient-to-br from-orange-200/20 to-yellow-200/20 animate-pulse-scale"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 6 + 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
            {t('faqTitle')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            {t('faqSubtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/20 backdrop-blur-sm rounded-xl overflow-hidden border-none"
              >
                <AccordionTrigger className="px-6 py-5 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 transition-all duration-300 text-right">
                  <span className="text-lg font-semibold text-gray-800">
                    {t(faq.question)}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-600 leading-relaxed bg-gray-50">
                  {t(faq.answer)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;