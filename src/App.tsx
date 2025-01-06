import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-pink-50">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;