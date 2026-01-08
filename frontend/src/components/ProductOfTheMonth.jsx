import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from './ui/button';
import { ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';

const ProductOfTheMonth = () => {
  const { t, direction } = useLanguage();

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
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

        {/* Emoji Decorations - Floating Up and Down */}
        <div className="absolute top-20 left-10 text-6xl animate-bounce-slow opacity-40">
          😋
        </div>
        <div className="absolute top-40 right-20 text-5xl animate-bounce-slower opacity-40" style={{ animationDelay: '1s' }}>
          🍪
        </div>
        <div className="absolute bottom-32 left-1/4 text-7xl animate-bounce-slow opacity-30" style={{ animationDelay: '2s' }}>
          ⭐
        </div>
        <div className="absolute bottom-20 right-1/3 text-5xl animate-bounce-slower opacity-40" style={{ animationDelay: '0.5s' }}>
          🎉
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content - Left Side */}
          <div className={`space-y-6 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-600 text-white px-8 py-4 rounded-full font-bold shadow-lg animate-pulse">
              <Sparkles className="w-6 h-6" />
              <span className="text-2xl md:text-3xl">{t('productOfTheMonth')}</span>
              <Sparkles className="w-6 h-6" />
            </div>

            {/* Product Name */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-800 leading-tight animate-fade-in-up">
              {t('featuredProduct')}
            </h2>

            {/* Product Description */}
            <p className="text-xl md:text-2xl text-gray-600 font-medium animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {t('featuredProductDesc')}
            </p>

            {/* CTA Button */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Button 
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-6 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                {t('moreProducts')}
                {direction === 'rtl' ? (
                  <ArrowLeft className="w-5 h-5 mr-2" />
                ) : (
                  <ArrowRight className="w-5 h-5 ml-2" />
                )}
              </Button>
            </div>
          </div>

          {/* Product Image - Right Side */}
          <div className="relative flex items-center justify-center animate-fade-in-right">
            {/* Decorative Background Circle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 bg-gradient-to-br from-yellow-300/30 to-orange-300/30 rounded-full blur-3xl animate-pulse-slow"></div>
            </div>

            {/* Product Image Container */}
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
              <img
                src="/sheko-baleshti.jpg"
                alt={t('featuredProduct')}
                className="w-full h-auto object-contain max-w-xs animate-float"
                style={{
                  filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.2))',
                }}
              />

              {/* Decorative Stars */}
              <div className="absolute -top-4 -right-4 text-4xl animate-spin-slow">
                ⭐
              </div>
              <div className="absolute -bottom-4 -left-4 text-3xl animate-spin-slow" style={{ animationDelay: '1s' }}>
                ✨
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductOfTheMonth;
