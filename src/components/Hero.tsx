
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-green-50">
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-amber-900 mb-6 leading-tight">
            Premium Ethiopian
            <span className="block text-green-700">Sesame Seeds</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-amber-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Exporting the finest quality sesame seeds from the fertile lands of Ethiopia to markets worldwide. 
            Committed to sustainability, quality, and building strong international partnerships.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              View Our Products
            </button>
            <button className="border-2 border-green-600 text-green-700 hover:bg-green-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
              Get Export Quote
            </button>
          </div>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-fade-in">
            <div className="text-3xl font-bold text-amber-800">15+</div>
            <div className="text-amber-600">Years Experience</div>
          </div>
          <div className="animate-fade-in">
            <div className="text-3xl font-bold text-amber-800">50+</div>
            <div className="text-amber-600">Countries Served</div>
          </div>
          <div className="animate-fade-in">
            <div className="text-3xl font-bold text-amber-800">100%</div>
            <div className="text-amber-600">Organic Certified</div>
          </div>
          <div className="animate-fade-in">
            <div className="text-3xl font-bold text-amber-800">5000+</div>
            <div className="text-amber-600">Tons Exported</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
