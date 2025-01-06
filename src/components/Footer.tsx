import React, { useState } from 'react';
import { Gift, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Send, ArrowRight, Heart, ExternalLink, CheckCircle } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail('');
    }
  };

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: Twitter, label: 'Twitter', color: 'hover:bg-blue-400' },
    { icon: Instagram, label: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: Linkedin, label: 'LinkedIn', color: 'hover:bg-blue-700' }
  ];

  const quickLinks = [
    { name: 'Shop', href: '#' },
    { name: 'Custom Orders', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Contact', href: '#' }
  ];

  return (
    <footer className="bg-gradient-to-b from-white to-pink-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        {[...Array(20)].map((_, i) => (
          <Gift
            key={i}
            className="absolute text-pink-300 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
            size={24}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4 transform transition-all duration-300 hover:translate-y--1">
            <div className="flex items-center group">
              <Gift className="h-8 w-8 text-pink-500 transform transition-transform group-hover:rotate-12" />
              <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Giftoria
              </span>
            </div>
            <p className="text-gray-600">
              Crafting memorable gifts with <Heart className="inline-block text-pink-500 animate-pulse" size={16} /> since 2024
            </p>
            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((social, index) => (
                <button
                  key={index}
                  className={`p-2 rounded-full transition-all duration-300 transform hover:scale-110 ${social.color} hover:text-white bg-gray-50`}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="group flex items-center text-gray-600 hover:text-pink-500 transition-colors duration-300"
                    onMouseEnter={() => setHoveredLink(index)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <ArrowRight 
                      className={`mr-2 transition-all duration-300 ${
                        hoveredLink === index ? 'translate-x-2 opacity-100' : 'opacity-0'
                      }`} 
                      size={16}
                    />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Contact Us</h3>
            <ul className="mt-4 space-y-4">
              <li className="group">
                <a href="mailto:info@giftoria.ca" className="flex items-center text-gray-600 hover:text-pink-500 transition-colors duration-300">
                  <Mail className="h-5 w-5 text-pink-500 mr-2 group-hover:animate-bounce" />
                  <span>info@giftoria.ca</span>
                </a>
              </li>
              <li className="group">
                <a href="tel:+11234567890" className="flex items-center text-gray-600 hover:text-pink-500 transition-colors duration-300">
                  <Phone className="h-5 w-5 text-pink-500 mr-2 group-hover:animate-bounce" />
                  <span>+1 (123) 456-7890</span>
                </a>
              </li>
              <li className="group">
                <a href="#" className="flex items-center text-gray-600 hover:text-pink-500 transition-colors duration-300">
                  <MapPin className="h-5 w-5 text-pink-500 mr-2 group-hover:animate-bounce" />
                  <span>Montreal, Canada</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase flex items-center">
              Newsletter
              <ExternalLink className="ml-2 h-4 w-4 text-pink-500" />
            </h3>
            <p className="text-gray-600">Subscribe to get updates on new products and special offers.</p>
            <form onSubmit={handleSubmit} className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 pr-12"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-pink-500 hover:text-pink-600 transition-colors duration-300"
              >
                {isSubscribed ? (
                  <CheckCircle className="h-5 w-5 text-green-500 animate-bounce" />
                ) : (
                  <Send className="h-5 w-5 transform transition-transform hover:translate-x-1" />
                )}
              </button>
            </form>
            {isSubscribed && (
              <p className="text-green-500 text-sm animate-fade-in">
                Thanks for subscribing!
              </p>
            )}
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="text-center text-gray-400 hover:text-gray-500 transition-colors duration-300">
            <p>&copy; 2024 Giftoria. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;