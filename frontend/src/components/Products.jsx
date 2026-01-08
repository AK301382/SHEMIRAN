import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { products } from '../data/mockData';
import { Button } from './ui/button';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const Products = () => {
  const { t, direction } = useLanguage();

  return (
    <section id="products" className="relative py-20 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            {t('productsTitle')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            {t('productsSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white/20 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/30 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={t(product.name)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">
                  {t(product.name)}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t(product.description)}
                </p>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-red-500 group-hover:text-white group-hover:border-transparent transition-all duration-300"
                >
                  {t('viewMore')}
                  {direction === 'rtl' ? (
                    <ArrowLeft className="w-4 h-4 mr-2" />
                  ) : (
                    <ArrowRight className="w-4 h-4 ml-2" />
                  )}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;