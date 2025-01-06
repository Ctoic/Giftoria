import React, { useState } from 'react';
import { Gift, Heart, Sparkles } from 'lucide-react';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative bg-pink-100 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-pink-100 animate-gradient-xy"></div>
      
      {/* Floating icons background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <Gift className="absolute top-10 left-10 animate-bounce" />
        <Heart className="absolute top-20 right-20 animate-pulse" />
        <Sparkles className="absolute bottom-10 left-1/2 animate-ping" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl transform transition-all duration-500 hover:scale-105">
                <span className="block hover:text-pink-600 transition-colors duration-300">
                  Handcrafted Gifts
                </span>
                <span className="block text-pink-500 hover:text-pink-600 transition-colors duration-300">
                  Made With Love
                </span>
              </h1>
              
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 transition-all duration-300 hover:text-gray-700">
                Discover unique, personalized gifts created just for you. From custom sketches to handmade jewelry, we bring your gift ideas to life.
              </p>

              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <button 
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-500 hover:bg-pink-600 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <Gift className={`mr-2 ${isHovered ? 'animate-bounce' : ''}`} size={20} />
                  Shop Now
                </button>

                <button className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-pink-600 bg-pink-100 hover:bg-pink-200 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <Sparkles className="mr-2 group-hover:animate-spin" size={20} />
                  Custom Order
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>

      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 transform transition-all duration-500 hover:scale-105">
        <img 
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full transform transition-all duration-500 hover:brightness-110" 
          src="https://hips.hearstapps.com/hmg-prod/images/christmas-gifts-for-her-672d010248418.jpg?crop=0.502xw:1.00xh;0.0217xw,0&resize=480:*"
          alt="Gift wrapping" 
        />
      </div>
    </div>
  );
}

export default Hero;