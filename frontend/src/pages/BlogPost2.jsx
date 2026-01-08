import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Calendar, User, Tag, Clock, Award, Shield } from 'lucide-react';
import { Button } from '../components/ui/button';

const BlogPost2 = () => {
  const { t, direction } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-blue-500 to-purple-600 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1995010/pexels-photo-1995010.jpeg"
            alt="تولید شیرینی‌های شمیران"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {t('blog2Title')}
          </h1>
          <div className="flex flex-wrap gap-6 text-white/90 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>۱۰ جنوری ۲۰۲۵</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>تیم شمیران</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-5 h-5" />
              <span>داستان برند، تولید</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link to="/#blog">
            <Button variant="outline" className="mb-8">
              {direction === 'rtl' ? (
                <ArrowRight className="w-4 h-4 ml-2" />
              ) : (
                <ArrowLeft className="w-4 h-4 mr-2" />
              )}
              {t('backToBlog')}
            </Button>
          </Link>

          {/* Main Content */}
          <article className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            {/* Introduction */}
            <div className="mb-8">
              <p className="text-xl leading-relaxed text-gray-700">
                {t('blog2Intro')}
              </p>
            </div>

            {/* Section 1: داستان برند شمیران */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-blue-600 mb-6">
                {t('blog2Section1Title')}
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-gray-700">
                <p>{t('blog2Section1P1')}</p>
                <p>{t('blog2Section1P2')}</p>
                <div className="bg-blue-50 border-r-4 border-blue-500 p-6 rounded-lg my-6">
                  <p className="font-semibold text-blue-800">{t('blog2Section1Quote')}</p>
                </div>
              </div>
            </section>

            {/* Production Image */}
            <div className="my-12 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/1995010/pexels-photo-1995010.jpeg"
                alt="کارخانه شمیران"
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Section 2: فرآیند تولید */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-blue-600 mb-6">
                {t('blog2Section2Title')}
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                <p>{t('blog2Section2P1')}</p>
                
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <Shield className="w-8 h-8 text-green-600" />
                      <h3 className="font-bold text-xl text-green-700">{t('blog2Section2Box1Title')}</h3>
                    </div>
                    <p className="text-gray-700">{t('blog2Section2Box1Text')}</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <Award className="w-8 h-8 text-blue-600" />
                      <h3 className="font-bold text-xl text-blue-700">{t('blog2Section2Box2Title')}</h3>
                    </div>
                    <p className="text-gray-700">{t('blog2Section2Box2Text')}</p>
                  </div>
                </div>

                <p>{t('blog2Section2P2')}</p>
              </div>
            </section>

            {/* Section 3: محصولات متنوع */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-blue-600 mb-6">
                {t('blog2Section3Title')}
              </h2>
              <div className="space-y-6">
                <div className="bg-orange-50 p-6 rounded-xl">
                  <h3 className="font-bold text-xl text-orange-700 mb-3">🥐 {t('blog2Section3Product1Title')}</h3>
                  <p className="text-gray-700">{t('blog2Section3Product1Text')}</p>
                </div>
                
                <div className="bg-yellow-50 p-6 rounded-xl">
                  <h3 className="font-bold text-xl text-yellow-700 mb-3">🍰 {t('blog2Section3Product2Title')}</h3>
                  <p className="text-gray-700">{t('blog2Section3Product2Text')}</p>
                </div>
                
                <div className="bg-amber-50 p-6 rounded-xl">
                  <h3 className="font-bold text-xl text-amber-700 mb-3">🍪 {t('blog2Section3Product3Title')}</h3>
                  <p className="text-gray-700">{t('blog2Section3Product3Text')}</p>
                </div>
              </div>
            </section>

            {/* Section 4: نکات نگهداری و تاریخ انقضا */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-blue-600 mb-6">
                {t('blog2Section4Title')}
              </h2>
              <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-2xl">
                <div className="space-y-4 text-lg leading-relaxed text-gray-700">
                  <p className="font-semibold text-red-700">{t('blog2Section4Intro')}</p>
                  
                  <ul className="space-y-3 mr-6">
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold text-xl">✓</span>
                      <span>{t('blog2Section4L1')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold text-xl">✓</span>
                      <span>{t('blog2Section4L2')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold text-xl">✓</span>
                      <span>{t('blog2Section4L3')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold text-xl">✓</span>
                      <span>{t('blog2Section4L4')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold text-xl">✓</span>
                      <span>{t('blog2Section4L5')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 5: ایده‌های صبحانه و میان‌وعده */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-blue-600 mb-6">
                {t('blog2Section5Title')}
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700">{t('blog2Section5Intro')}</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-6 rounded-xl">
                    <h3 className="font-bold text-xl text-purple-700 mb-3">🌅 {t('blog2Section5Idea1Title')}</h3>
                    <p className="text-gray-700">{t('blog2Section5Idea1Text')}</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-teal-100 p-6 rounded-xl">
                    <h3 className="font-bold text-xl text-green-700 mb-3">🏫 {t('blog2Section5Idea2Title')}</h3>
                    <p className="text-gray-700">{t('blog2Section5Idea2Text')}</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-orange-50 to-yellow-100 p-6 rounded-xl">
                    <h3 className="font-bold text-xl text-orange-700 mb-3">☕ {t('blog2Section5Idea3Title')}</h3>
                    <p className="text-gray-700">{t('blog2Section5Idea3Text')}</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-100 p-6 rounded-xl">
                    <h3 className="font-bold text-xl text-blue-700 mb-3">🍽️ {t('blog2Section5Idea4Title')}</h3>
                    <p className="text-gray-700">{t('blog2Section5Idea4Text')}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-8">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-2xl">
                <h2 className="text-2xl font-bold mb-4">{t('blog2Conclusion')}</h2>
                <p className="text-lg leading-relaxed">{t('blog2ConclusionText')}</p>
              </div>
            </section>

            {/* CTA */}
            <div className="text-center mt-12 pt-8 border-t border-gray-200">
              <p className="text-xl text-gray-700 mb-6">{t('blog2CTA')}</p>
              <Link to="/#contact">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg px-8">
                  {t('contactUs')}
                </Button>
              </Link>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default BlogPost2;