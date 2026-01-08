import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { Button } from '../components/ui/button';

const BlogPost1 = () => {
  const { t, direction } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-orange-400 to-red-500 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://customer-assets.emergentagent.com/job_shemiran-to-app/artifacts/vh17m9fe_FB_IMG_1767639869239.jpg"
            alt="شکو بالشتی شمیران"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {t('blog1Title')}
          </h1>
          <div className="flex flex-wrap gap-6 text-white/90 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>۱۵ جنوری ۲۰۲۵</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>تیم شمیران</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-5 h-5" />
              <span>محصولات، تغذیه کودکان</span>
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
                {t('blog1Intro')}
              </p>
            </div>

            {/* Section 1: چرا کودکان عاشق آن هستند؟ */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-orange-600 mb-6">
                {t('blog1Section1Title')}
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-gray-700">
                <p>{t('blog1Section1P1')}</p>
                <ul className="list-disc list-inside space-y-3 mr-6">
                  <li className="text-gray-700">{t('blog1Section1L1')}</li>
                  <li className="text-gray-700">{t('blog1Section1L2')}</li>
                  <li className="text-gray-700">{t('blog1Section1L3')}</li>
                  <li className="text-gray-700">{t('blog1Section1L4')}</li>
                </ul>
              </div>
            </section>

            {/* Product Image */}
            <div className="my-12 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://customer-assets.emergentagent.com/job_shemiran-to-app/artifacts/vh17m9fe_FB_IMG_1767639869239.jpg"
                alt="شکو بالشتی 30 گرمی"
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Section 2: ارزش غذایی */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-orange-600 mb-6">
                {t('blog1Section2Title')}
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-gray-700">
                <p>{t('blog1Section2P1')}</p>
                <div className="bg-orange-50 border-r-4 border-orange-500 p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-3 text-orange-700">{t('blog1Section2BoxTitle')}</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 font-bold">✓</span>
                      <span>{t('blog1Section2B1')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 font-bold">✓</span>
                      <span>{t('blog1Section2B2')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 font-bold">✓</span>
                      <span>{t('blog1Section2B3')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 font-bold">✓</span>
                      <span>{t('blog1Section2B4')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3: فرآیند تولید */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-orange-600 mb-6">
                {t('blog1Section3Title')}
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-gray-700">
                <p>{t('blog1Section3P1')}</p>
                <p>{t('blog1Section3P2')}</p>
              </div>
            </section>

            {/* Section 4: چرا والدین باید انتخاب کنند؟ */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-orange-600 mb-6">
                {t('blog1Section4Title')}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                  <h3 className="font-bold text-xl mb-3 text-green-700">✓ {t('blog1Section4Box1Title')}</h3>
                  <p className="text-gray-700">{t('blog1Section4Box1Text')}</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                  <h3 className="font-bold text-xl mb-3 text-blue-700">✓ {t('blog1Section4Box2Title')}</h3>
                  <p className="text-gray-700">{t('blog1Section4Box2Text')}</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                  <h3 className="font-bold text-xl mb-3 text-purple-700">✓ {t('blog1Section4Box3Title')}</h3>
                  <p className="text-gray-700">{t('blog1Section4Box3Text')}</p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl">
                  <h3 className="font-bold text-xl mb-3 text-orange-700">✓ {t('blog1Section4Box4Title')}</h3>
                  <p className="text-gray-700">{t('blog1Section4Box4Text')}</p>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-8">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 rounded-2xl">
                <h2 className="text-2xl font-bold mb-4">{t('blog1Conclusion')}</h2>
                <p className="text-lg leading-relaxed">{t('blog1ConclusionText')}</p>
              </div>
            </section>

            {/* CTA */}
            <div className="text-center mt-12 pt-8 border-t border-gray-200">
              <p className="text-xl text-gray-700 mb-6">{t('blog1CTA')}</p>
              <Link to="/#contact">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-lg px-8">
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

export default BlogPost1;