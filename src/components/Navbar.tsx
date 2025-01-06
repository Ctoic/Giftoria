import React from 'react';
import { Gift, ShoppingCart, Search, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Gift className="h-8 w-8 text-pink-500" />
            <span className="ml-2 text-2xl font-bold text-gray-800">Giftoria</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-pink-500">Home</a>
            <a href="#" className="text-gray-600 hover:text-pink-500">Shop</a>
            <a href="#" className="text-gray-600 hover:text-pink-500">Custom Orders</a>
            <a href="#" className="text-gray-600 hover:text-pink-500">About</a>
          </div>

          <div className="flex items-center space-x-4">
            <Search className="h-6 w-6 text-gray-600 hover:text-pink-500 cursor-pointer" />
            <User className="h-6 w-6 text-gray-600 hover:text-pink-500 cursor-pointer" />
            <ShoppingCart className="h-6 w-6 text-gray-600 hover:text-pink-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;