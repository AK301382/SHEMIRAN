import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const HeroSlider = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-200 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-orange-200 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Title Section - Centered Content */}
        <div className="text-center pt-32 pb-20">
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-white drop-shadow-2xl animate-fade-in-down">
            {t('heroTitle')}
          </h1>
          <p className="text-xl md:text-3xl text-white/90 font-semibold drop-shadow-lg animate-fade-in-up">
            {t('heroSubtitle')}
          </p>

          {/* Call to Action */}
          <div className="mt-16">
            <button className="bg-white text-orange-600 px-12 py-5 rounded-full text-xl font-bold shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(255,255,255,0.8)] transform hover:scale-105 transition-all duration-300 hover:bg-gradient-to-r hover:from-white hover:to-orange-50">
              {t('heroButton')}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSlider;