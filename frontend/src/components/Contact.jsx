import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Instagram, 
  Facebook, 
  Mail,
  Send,
  User,
  MessageSquare,
  Sparkles,
  Zap
} from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isHovered, setIsHovered] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission with animation
    toast.success(
      <div className="flex items-center gap-2">
        <Sparkles className="w-5 h-5 text-yellow-500" />
        <span>پیام شما با موفقیت ارسال شد!</span>
      </div>
    );
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: t('phone'),
      value: '0791317172',
      href: 'tel:+93791317172',
      gradient: 'from-emerald-400 via-green-500 to-teal-600',
      shadow: 'shadow-emerald-500/50',
      description: 'تماس مستقیم'
    },
    {
      icon: MessageCircle,
      label: t('whatsapp'),
      value: '0788400022',
      href: 'https://wa.me/930788400022',
      gradient: 'from-green-400 via-emerald-500 to-green-600',
      shadow: 'shadow-green-500/50',
      description: 'چت آنلاین'
    },
    {
      icon: MapPin,
      label: t('address'),
      value: t('addressText'),
      href: 'https://www.google.com/maps/dir/?api=1&destination=34.350039718693%2C62.192189078508',
      gradient: 'from-rose-400 via-red-500 to-pink-600',
      shadow: 'shadow-red-500/50',
      description: 'مسیر یابی'
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: 'Instagram',
      href: 'https://www.instagram.com/shemiranfoods/',
      gradient: 'from-purple-600 via-pink-600 to-red-600',
      shadow: 'shadow-pink-500/50'
    },
    {
      icon: Facebook,
      name: 'Facebook',
      href: 'https://www.facebook.com/shemiranfoods/',
      gradient: 'from-blue-500 via-blue-600 to-indigo-600',
      shadow: 'shadow-blue-500/50'
    }
  ];

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
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
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            {t('contactTitle')}
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t('contactSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Left Side - Contact Info */}
          <div className="space-y-6">
            {/* Contact Cards */}
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={index}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setIsHovered(index)}
                  onMouseLeave={() => setIsHovered(null)}
                  className="group relative block"
                >
                  <div className="relative bg-white/40 backdrop-blur-sm p-6 rounded-3xl border-2 border-transparent hover:border-purple-300 hover:bg-white/50 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                    {/* Animated Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${info.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    {/* Shine Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                    </div>

                    <div className="relative flex items-start gap-5">
                      {/* Icon Container */}
                      <div className="relative">
                        <div className={`absolute inset-0 bg-gradient-to-r ${info.gradient} rounded-2xl blur-lg ${info.shadow} opacity-50 group-hover:opacity-100 transition-all duration-500`}></div>
                        <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${info.gradient} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                          <Icon className="w-10 h-10 text-white drop-shadow-lg" strokeWidth={2.5} />
                        </div>
                        {/* Pulse Ring */}
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${info.gradient} opacity-0 group-hover:opacity-30 animate-ping-slow`}></div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 pt-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-bold text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text" style={{backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`}}>
                            {info.label}
                          </h3>
                          <Send className={`w-4 h-4 text-gray-400 group-hover:text-purple-600 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300 ${isHovered === index ? 'opacity-100' : 'opacity-0'}`} />
                        </div>
                        <p className="text-gray-600 group-hover:text-gray-800 font-medium text-lg mb-1 transition-colors">
                          {info.value}
                        </p>
                        <p className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}

            {/* Social Media Card */}
            <div className="relative bg-white/70 backdrop-blur-sm p-6 rounded-3xl border-2 border-gray-300 overflow-hidden group shadow-lg max-w-fit">
              {/* Simple Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
              
              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-blue-600 animate-pulse" />
                  <h3 className="text-lg font-bold text-gray-800 whitespace-nowrap">
                    {t('followUs')}
                  </h3>
                </div>
                
                <div className="flex gap-4 justify-center">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/social relative"
                      >
                        {/* Glow Effect */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${social.gradient} rounded-2xl blur-md ${social.shadow} opacity-0 group-hover/social:opacity-100 transition-opacity duration-300`}></div>
                        
                        {/* Button */}
                        <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${social.gradient} flex items-center justify-center transform group-hover/social:scale-125 group-hover/social:rotate-12 transition-all duration-300 shadow-lg`}>
                          <Icon className="w-7 h-7 text-white drop-shadow-lg" strokeWidth={2} />
                        </div>
                        
                        {/* Tooltip */}
                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover/social:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                          {social.name}
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="relative">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {t('sendMessage')}
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Input */}
                <div className="group relative">
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <User className="w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                  </div>
                  <Input
                    type="text"
                    placeholder={t('yourName')}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full h-12 pr-12 pl-4 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all bg-white"
                  />
                </div>

                {/* Email Input */}
                <div className="group relative">
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <Mail className="w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                  </div>
                  <Input
                    type="email"
                    placeholder={t('yourEmail')}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full h-12 pr-12 pl-4 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all bg-white"
                  />
                </div>

                {/* Message Textarea */}
                <div className="group relative">
                  <div className="absolute top-3 right-4 pointer-events-none">
                    <MessageSquare className="w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                  </div>
                  <Textarea
                    placeholder={t('yourMessage')}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full pr-12 pl-4 pt-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all resize-none bg-white"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="group/btn w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <span className="flex items-center justify-center gap-2">
                    {t('send')}
                    <Send className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations CSS */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }
        .animate-ping-slow {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-in;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Contact;