
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">EthioSesame</h3>
            <p className="text-amber-200 mb-4 leading-relaxed">
              Ethiopia's premier sesame seed exporter, committed to delivering premium quality products 
              to international markets while supporting sustainable agriculture and fair trade practices.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-amber-700 rounded flex items-center justify-center hover:bg-amber-600 cursor-pointer transition-colors">
                <span className="text-white text-sm font-bold">f</span>
              </div>
              <div className="w-8 h-8 bg-amber-700 rounded flex items-center justify-center hover:bg-amber-600 cursor-pointer transition-colors">
                <span className="text-white text-sm font-bold">t</span>
              </div>
              <div className="w-8 h-8 bg-amber-700 rounded flex items-center justify-center hover:bg-amber-600 cursor-pointer transition-colors">
                <span className="text-white text-sm font-bold">in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-amber-200 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-amber-200 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#products" className="text-amber-200 hover:text-white transition-colors">Our Products</a></li>
              <li><a href="#logistics" className="text-amber-200 hover:text-white transition-colors">Export & Logistics</a></li>
              <li><a href="#contact" className="text-amber-200 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Our Products</h4>
            <ul className="space-y-2">
              <li><span className="text-amber-200">Humera White Sesame</span></li>
              <li><span className="text-amber-200">Mixed White Sesame</span></li>
              <li><span className="text-amber-200">Red Brown Sesame</span></li>
              <li><span className="text-amber-200">Organic Certified</span></li>
              <li><span className="text-amber-200">Custom Packaging</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-amber-800 mt-8 pt-8 text-center">
          <p className="text-amber-200">
            © 2024 EthioSesame. All rights reserved. | Premium Ethiopian Sesame Seeds Export
          </p>
          <p className="text-amber-300 text-sm mt-2">
            Licensed by Ethiopian Ministry of Trade and Industry | Export License: ET-2024-SSE-001
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
