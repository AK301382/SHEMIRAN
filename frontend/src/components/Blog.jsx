import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { blogPosts } from '../data/mockData';
import { Button } from './ui/button';
import { Calendar, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const { t, direction } = useLanguage();

  return (
    <section id="blog" className="relative py-20 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
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
            {t('blogTitle')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            {t('blogSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link to={`/blog/${post.slug}`} key={post.id}>
              <article
                className="group bg-white/20 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/30 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={post.image}
                    alt={t(post.title)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-orange-500" />
                    <span className="text-sm font-medium text-gray-700">
                      {new Date(post.date).toLocaleDateString('fa-IR')}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800 line-clamp-2">
                    {t(post.title)}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {t(post.excerpt)}
                  </p>
                  <Button
                    variant="link"
                    className="text-orange-500 hover:text-red-600 p-0 font-semibold"
                  >
                    {t('readMore')}
                    {direction === 'rtl' ? (
                      <ArrowLeft className="w-4 h-4 mr-2" />
                    ) : (
                      <ArrowRight className="w-4 h-4 ml-2" />
                    )}
                  </Button>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;