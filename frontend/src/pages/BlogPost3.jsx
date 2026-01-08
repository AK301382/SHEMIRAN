import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Calendar, User, Tag, Sparkles, Coffee, PartyPopper } from 'lucide-react';
import { Button } from '../components/ui/button';

const BlogPost3 = () => {
  const { t, direction } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg"
            alt="جشن با محصولات شمیران"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {t('blog3Title')}
          </h1>
          <div className="flex flex-wrap gap-6 text-white/90 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>۵ جنوری ۲۰۲۵</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>تیم شمیران</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-5 h-5" />
              <span>ایده‌های خلاق، جشن‌ها</span>
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
                {t('blog3Intro')}
              </p>
            </div>

            {/* Featured Image */}
            <div className="my-12 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg"
                alt="جشن تولد"
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Idea 1: شکو بالشتی + شیر کاکائو (مهم‌ترین ایده) */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 rounded-2xl mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <Coffee className="w-10 h-10" />
                  <h2 className="text-3xl font-bold">{t('blog3Idea1Title')}</h2>
                </div>
                <p className="text-lg leading-relaxed mb-4">{t('blog3Idea1Subtitle')}</p>
              </div>
              
              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                <p>{t('blog3Idea1P1')}</p>
                
                <div className="bg-orange-50 border-r-4 border-orange-500 p-6 rounded-lg">
                  <h3 className="font-bold text-xl text-orange-700 mb-4">{t('blog3Idea1RecipeTitle')}</h3>
                  <ul className="space-y-3 mr-6">
                    <li className="flex items-start gap-3">
                      <span className="text-orange-600 font-bold">1.</span>
                      <span>{t('blog3Idea1Recipe1')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-600 font-bold">2.</span>
                      <span>{t('blog3Idea1Recipe2')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-600 font-bold">3.</span>
                      <span>{t('blog3Idea1Recipe3')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-600 font-bold">4.</span>
                      <span>{t('blog3Idea1Recipe4')}</span>
                    </li>
                  </ul>
                </div>

                <p className="bg-yellow-50 border-r-4 border-yellow-500 p-6 rounded-lg">
                  <span className="font-semibold text-yellow-800">💡 نکته کافه‌ای: </span>
                  {t('blog3Idea1CafeTip')}
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-gradient-to-br from-pink-50 to-red-100 p-6 rounded-xl">
                    <h4 className="font-bold text-lg text-pink-700 mb-3">🎂 {t('blog3Idea1Variant1Title')}</h4>
                    <p className="text-gray-700">{t('blog3Idea1Variant1Text')}</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-100 p-6 rounded-xl">
                    <h4 className="font-bold text-lg text-blue-700 mb-3">🍨 {t('blog3Idea1Variant2Title')}</h4>
                    <p className="text-gray-700">{t('blog3Idea1Variant2Text')}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Product Showcase */}
            <div className="my-12 grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://customer-assets.emergentagent.com/job_shemiran-to-app/artifacts/vh17m9fe_FB_IMG_1767639869239.jpg"
                  alt="شکو بالشتی"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="flex items-center justify-center bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-orange-700 mb-3">شکو بالشتی شمیران</h3>
                  <p className="text-gray-700">ستاره جشن‌های شما</p>
                </div>
              </div>
            </div>

            {/* Idea 2: بیسکویت بار */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-8 h-8 text-purple-600" />
                <h2 className="text-3xl font-bold text-purple-600">{t('blog3Idea2Title')}</h2>
              </div>
              
              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                <p>{t('blog3Idea2P1')}</p>
                
                <div className="bg-purple-50 p-8 rounded-2xl">
                  <h3 className="font-bold text-xl text-purple-700 mb-4">{t('blog3Idea2SetupTitle')}</h3>
                  <ul className="space-y-3 mr-6">
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 font-bold">✓</span>
                      <span>{t('blog3Idea2Setup1')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 font-bold">✓</span>
                      <span>{t('blog3Idea2Setup2')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 font-bold">✓</span>
                      <span>{t('blog3Idea2Setup3')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 font-bold">✓</span>
                      <span>{t('blog3Idea2Setup4')}</span>
                    </li>
                  </ul>
                </div>

                <p>{t('blog3Idea2P2')}</p>
              </div>
            </section>

            {/* Idea 3: کیک‌های تزئینی */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <PartyPopper className="w-8 h-8 text-pink-600" />
                <h2 className="text-3xl font-bold text-pink-600">{t('blog3Idea3Title')}</h2>
              </div>
              
              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                <p>{t('blog3Idea3P1')}</p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-100 p-6 rounded-xl">
                    <h4 className="font-bold text-lg text-orange-700 mb-3">🍊 {t('blog3Idea3Cake1Title')}</h4>
                    <p className="text-gray-700">{t('blog3Idea3Cake1Text')}</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl">
                    <h4 className="font-bold text-lg text-yellow-700 mb-3">🍌 {t('blog3Idea3Cake2Title')}</h4>
                    <p className="text-gray-700">{t('blog3Idea3Cake2Text')}</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-orange-50 to-amber-100 p-6 rounded-xl">
                    <h4 className="font-bold text-lg text-amber-700 mb-3">🥥 {t('blog3Idea3Cake3Title')}</h4>
                    <p className="text-gray-700">{t('blog3Idea3Cake3Text')}</p>
                  </div>
                </div>

                <div className="bg-pink-50 border-r-4 border-pink-500 p-6 rounded-lg mt-6">
                  <h3 className="font-bold text-xl text-pink-700 mb-4">{t('blog3Idea3DecorTitle')}</h3>
                  <p>{t('blog3Idea3DecorText')}</p>
                </div>
              </div>
            </section>

            {/* Bonus Tips */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-green-50 to-teal-50 p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-green-700 mb-6">{t('blog3BonusTitle')}</h2>
                <ul className="space-y-4 text-lg leading-relaxed text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-xl">🎈</span>
                    <span>{t('blog3Bonus1')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-xl">🎊</span>
                    <span>{t('blog3Bonus2')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-xl">📸</span>
                    <span>{t('blog3Bonus3')}</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-8">
              <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-white p-8 rounded-2xl">
                <h2 className="text-2xl font-bold mb-4">{t('blog3Conclusion')}</h2>
                <p className="text-lg leading-relaxed">{t('blog3ConclusionText')}</p>
              </div>
            </section>

            {/* CTA */}
            <div className="text-center mt-12 pt-8 border-t border-gray-200">
              <p className="text-xl text-gray-700 mb-6">{t('blog3CTA')}</p>
              <Link to="/#contact">
                <Button size="lg" className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-700 text-lg px-8">
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

export default BlogPost3;