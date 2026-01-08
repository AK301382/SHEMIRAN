import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Target, Eye, Heart } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Target,
      title: t('ourMission'),
      text: t('missionText'),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Eye,
      title: t('ourVision'),
      text: t('visionText'),
      color: 'from-purple-500 to-red-500'
    },
    {
      icon: Heart,
      title: t('ourValues'),
      text: t('valuesText'),
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="about" className="relative py-20 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 bg-clip-text text-transparent">
            {t('aboutTitle')}
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed" style={{ lineHeight: '2rem' }}>
            {t('aboutDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group bg-white/20 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/30 transition-all duration-300 transform hover:-translate-y-2 relative z-20"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800" style={{ lineHeight: '2.5rem' }}>
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed" style={{ lineHeight: '2rem' }}>
                  {value.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;