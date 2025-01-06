import React, { useState } from 'react';
import { Palette, Package, Heart, ChevronRight, Star, Sparkles } from 'lucide-react';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const steps = [
    {
      icon: Palette,
      title: "Choose Your Design",
      description: "Browse our collection or request a custom design that matches your vision",
      details: "Select from hundreds of unique designs or work with our artists to create something special.",
    },
    {
      icon: Heart,
      title: "Handcrafted with Love",
      description: "Our artisans carefully create your gift with attention to every detail",
      details: "Each piece is made with premium materials and expert craftsmanship.",
    },
    {
      icon: Package,
      title: "Delivered to You",
      description: "Safely packaged and delivered right to your doorstep across Canada",
      details: "Secure packaging and tracked shipping for peace of mind.",
    }
  ];

  return (
    <div className="bg-gradient-to-b from-pink-50 to-white py-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className="absolute text-pink-200 opacity-20 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`
            }}
            size={24}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center transform transition-all duration-500 hover:scale-105">
          <h2 className="text-4xl font-extrabold text-gray-900 flex items-center justify-center gap-2">
            <Sparkles className="animate-spin text-pink-500" size={24} />
            How It Works
            <Sparkles className="animate-spin text-pink-500" size={24} />
          </h2>
          <p className="mt-4 text-lg text-gray-500 animate-fade-in">
            Create your perfect gift in three simple steps
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
              >
                <div className={`
                  text-center p-6 rounded-xl transition-all duration-300
                  ${activeStep === index ? 'bg-pink-50 shadow-xl scale-105' : 'hover:bg-pink-50 hover:shadow-lg'}
                `}>
                  <div className="relative">
                    <div className={`
                      flex items-center justify-center h-20 w-20 rounded-full mx-auto
                      transition-all duration-500 group-hover:scale-110
                      ${activeStep === index ? 'bg-pink-200' : 'bg-pink-100'}
                    `}>
                      <step.icon className={`
                        h-10 w-10 transition-all duration-300
                        ${activeStep === index ? 'text-pink-600 animate-bounce' : 'text-pink-500'}
                      `} />
                    </div>
                    
                    {isPlaying && (
                      <div className="absolute -inset-1 rounded-full animate-ping bg-pink-200 opacity-20" />
                    )}
                  </div>

                  <h3 className="mt-6 text-xl font-medium text-gray-900 group-hover:text-pink-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="mt-2 text-base text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                    {step.description}
                  </p>

                  <div className={`
                    mt-4 overflow-hidden transition-all duration-300
                    ${activeStep === index ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}
                  `}>
                    <p className="text-sm text-pink-600 flex items-center justify-center gap-2">
                      <ChevronRight size={16} className="animate-bounce" />
                      {step.details}
                    </p>
                  </div>
                </div>

                {/* Connecting lines between steps */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 border-t-2 border-pink-200 transform -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;