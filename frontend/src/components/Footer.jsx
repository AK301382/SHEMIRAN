import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Instagram, Facebook, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const { t, direction, language } = useLanguage();
  const isRTL = direction === 'rtl';

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-lime-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-lime-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-4 md:mb-8">
          
          {/* معرفی شرکت - Brand Section */}
          <div className="space-y-3">
            <div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-2 text-center">{t('companyIntro')}</h3>
              <div className="w-full h-1 bg-gradient-to-r from-lime-500 to-lime-400 rounded-full mb-4"></div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-700">
              <p className={`text-gray-200 leading-relaxed text-sm md:text-base mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                {t('companyDescription')}
              </p>
              
              <div className="border-t border-gray-700 pt-4">
                <h4 className="text-sm md:text-base md:text-lg font-bold text-white mb-3 text-center">{t('productOfNation')}</h4>
                <div className="flex justify-center gap-3" dir="ltr">
                  <a
                    href="https://www.facebook.com/shemiranfoods/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 md:w-10 md:h-10 md:w-12 md:h-12 rounded-full bg-lime-500/20 hover:bg-lime-500 flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-lime-500/50 group"
                  >
                    <Facebook className="w-4 h-4 md:w-5 md:h-5 md:w-6 md:h-6 text-lime-400 group-hover:text-white transition-colors" />
                  </a>
                  <a
                    href="https://www.instagram.com/shemiranfoods/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 md:w-10 md:h-10 md:w-12 md:h-12 rounded-full bg-lime-500/20 hover:bg-lime-500 flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-lime-500/50 group"
                  >
                    <Instagram className="w-4 h-4 md:w-5 md:h-5 md:w-6 md:h-6 text-lime-400 group-hover:text-white transition-colors" />
                  </a>
                  <a
                    href="tel:+93791317172"
                    className="w-9 h-9 md:w-10 md:h-10 md:w-12 md:h-12 rounded-full bg-lime-500/20 hover:bg-lime-500 flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-lime-500/50 group"
                  >
                    <Phone className="w-4 h-4 md:w-5 md:h-5 md:w-6 md:h-6 text-lime-400 group-hover:text-white transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ارتباط با ما - Contact Section */}
          <div className="space-y-3">
            <div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-2 text-center">{t('contactUs')}</h3>
              <div className="w-full h-1 bg-gradient-to-r from-lime-500 to-lime-400 rounded-full mb-4"></div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-700">
              <div className="space-y-3">
                {/* آدرس */}
                <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : 'flex-row'} gap-3 border-b border-gray-700 pb-3`}>
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-lime-500/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-lime-400" />
                  </div>
                  <div className="flex-1">
                    <p className={`text-white text-sm md:text-base ${isRTL ? 'text-right' : 'text-left'}`}>
                      {t('heratAddress')}
                    </p>
                  </div>
                </div>

                {/* ایمیل */}
                <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : 'flex-row'} gap-3 border-b border-gray-700 pb-3`}>
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-lime-500/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 md:w-5 md:h-5 text-lime-400" />
                  </div>
                  <div className="flex-1">
                    <p className={`text-white text-sm md:text-base ${isRTL ? 'text-right' : 'text-left'}`}>
                      info@shemiranfoods.com
                    </p>
                  </div>
                </div>

                {/* تلفن */}
                <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : 'flex-row'} gap-3 pt-1`}>
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-lime-500/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 md:w-5 md:h-5 text-lime-400" />
                  </div>
                  <div className="flex-1">
                    <p className={`text-white text-sm md:text-base ${isRTL ? 'text-right' : 'text-left'}`} dir="ltr">
                      ☎ 0791317172
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ساعات کاری - Working Hours Section */}
          <div className="space-y-3">
            <div>
              <h3 className="text-3xl font-black text-white mb-2 text-center">{t('workingHours')}</h3>
              <div className="w-full h-1 bg-gradient-to-r from-lime-500 to-lime-400 rounded-full mb-4"></div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-700">
              <div className="space-y-3">
                {/* شنبه - پنجشنبه */}
                <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : 'flex-row'} gap-3 border-b border-gray-700 pb-3`}>
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-lime-500/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 md:w-5 md:h-5 text-lime-400" />
                  </div>
                  <div className="flex-1 flex items-center justify-between">
                    <span className={`text-white text-lg ${isRTL ? 'order-2' : 'order-1'}`}>{t('saturdayToThursday')}</span>
                    <span className={`text-white text-lg font-semibold ${isRTL ? 'order-1' : 'order-2'}`}>{t('workingHoursTime')}</span>
                  </div>
                </div>

                {/* جمعه */}
                <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : 'flex-row'} gap-3 pt-1`}>
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-lime-500/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 md:w-5 md:h-5 text-lime-400" />
                  </div>
                  <div className="flex-1 flex items-center justify-between">
                    <span className={`text-white text-lg ${isRTL ? 'order-2' : 'order-1'}`}>{t('friday')}</span>
                    <span className={`text-white text-lg font-semibold ${isRTL ? 'order-1' : 'order-2'}`}>{t('closed')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm md:text-base">
              {t('copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
