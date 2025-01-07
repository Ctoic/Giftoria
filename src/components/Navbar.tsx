import React, { useState, useEffect } from 'react';
import { Gift, ShoppingCart, Search, User } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartItems, setCartItems] = useState(3);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-lg' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center group cursor-pointer">
            <Gift className="h-8 w-8 text-pink-500 transform transition-all duration-300 
                            group-hover:rotate-12 group-hover:scale-110" />
            <span className="ml-2 text-2xl font-bold tracking-tight 
                           bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent
                           transition-all duration-300 group-hover:tracking-wide">
              Giftoria
            </span>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Shop', 'Custom Orders', 'About'].map((item) => (
              <a
                key={item}
                href="#"
                className="relative text-gray-600 hover:text-pink-500 
                         transition-all duration-200 transform hover:scale-105
                         after:content-[''] after:absolute after:w-0 after:h-0.5 
                         after:bottom-0 after:left-0 after:bg-pink-500 
                         after:transition-all after:duration-300
                         hover:after:w-full"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Action Icons */}
          <div className="flex items-center space-x-6">
            {/* Search */}
            <div className="relative">
              <Search 
                className={`h-6 w-6 cursor-pointer transition-all duration-300 transform
                           hover:scale-110 ${isSearchOpen ? 'text-pink-500' : 'text-gray-600 hover:text-pink-500'}`}
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              />
              {isSearchOpen && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-lg shadow-lg p-3
                              animate-in fade-in slide-in-from-top-2">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-3 py-2 border border-gray-200 rounded-md
                             focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    autoFocus
                  />
                </div>
              )}
            </div>

            {/* User */}
            <div className="relative group">
              <User className="h-6 w-6 text-gray-600 cursor-pointer 
                              transition-all duration-300 transform
                              group-hover:scale-110 group-hover:text-pink-500" />
              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg py-2
                            opacity-0 invisible group-hover:opacity-100 group-hover:visible
                            transition-all duration-300 transform origin-top scale-95 group-hover:scale-100">
                <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-pink-50 hover:text-pink-500">Profile</a>
                <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-pink-50 hover:text-pink-500">Settings</a>
                <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-pink-50 hover:text-pink-500">Logout</a>
              </div>
            </div>

            {/* Cart */}
            <div className="relative group">
              <ShoppingCart className="h-6 w-6 text-gray-600 cursor-pointer
                                     transition-all duration-300 transform
                                     group-hover:scale-110 group-hover:text-pink-500" />
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs
                             w-5 h-5 rounded-full flex items-center justify-center
                             transform transition-all duration-300
                             group-hover:scale-110 group-hover:bg-pink-600">
                {cartItems}
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;