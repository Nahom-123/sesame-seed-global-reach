
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-amber-900 mb-4">About EthioSesame</h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            Rooted in tradition, committed to excellence, and dedicated to sustainable agriculture
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-amber-800">Our Story</h3>
            <p className="text-amber-700 leading-relaxed">
              Founded in 2008, EthioSesame emerged from a passion for showcasing Ethiopia's agricultural excellence to the world. 
              Starting as a small family business in the heart of Humera, we have grown into one of Ethiopia's leading sesame seed exporters, 
              maintaining our commitment to quality and sustainable farming practices.
            </p>
            <p className="text-amber-700 leading-relaxed">
              Our journey began with a simple belief: Ethiopian sesame seeds are among the world's finest, and they deserve to reach 
              international markets with their quality and origin story intact. Today, we work directly with over 500 farmers across 
              Ethiopia's prime sesame-growing regions.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-amber-100 to-green-100 rounded-2xl p-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-amber-800 mb-2">Our Mission</h4>
                <p className="text-amber-700">
                  To be the bridge connecting Ethiopian farmers to global markets, ensuring fair trade, 
                  sustainable practices, and the highest quality standards in every shipment.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-amber-800 mb-2">Our Vision</h4>
                <p className="text-amber-700">
                  To establish Ethiopian sesame seeds as the global standard for quality and sustainability, 
                  while empowering local communities and preserving traditional farming methods.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-xl bg-amber-50 hover:bg-amber-100 transition-colors duration-300">
            <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">Q</span>
            </div>
            <h4 className="text-xl font-bold text-amber-800 mb-2">Quality First</h4>
            <p className="text-amber-700">
              Every batch undergoes rigorous testing and quality control to ensure we deliver only premium-grade sesame seeds.
            </p>
          </div>
          
          <div className="text-center p-6 rounded-xl bg-green-50 hover:bg-green-100 transition-colors duration-300">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">S</span>
            </div>
            <h4 className="text-xl font-bold text-green-800 mb-2">Sustainability</h4>
            <p className="text-green-700">
              We promote eco-friendly farming practices and support our partner farmers in sustainable agriculture methods.
            </p>
          </div>
          
          <div className="text-center p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors duration-300">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">T</span>
            </div>
            <h4 className="text-xl font-bold text-blue-800 mb-2">Trust & Reliability</h4>
            <p className="text-blue-700">
              Building long-term partnerships through consistent delivery, transparent communication, and ethical business practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
