
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About Us', href: '/#about' },
    { name: 'Our Products', href: '/#products' },
    { name: 'Product Details', href: '/products' },
    { name: 'Export & Logistics', href: '/#logistics' },
    { name: 'Contact Us', href: '/#contact' },
  ];

  const handleNavClick = (href) => {
    if (href.startsWith('/#')) {
      // For hash links, navigate to home first if not already there
      if (location.pathname !== '/') {
        window.location.href = href;
      } else {
        // Scroll to section if already on home page
        const element = document.querySelector(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-amber-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/">
              <h1 className="text-2xl font-bold text-amber-800">EthioSesame</h1>
              <p className="text-xs text-amber-600">Premium Export Quality</p>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                link.href.startsWith('/') ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-amber-700 hover:text-amber-900 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-amber-50 rounded-md"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-amber-700 hover:text-amber-900 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-amber-50 rounded-md"
                  >
                    {link.name}
                  </a>
                )
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-amber-700 hover:text-amber-900 hover:bg-amber-50"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-amber-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              link.href.startsWith('/') ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-amber-700 hover:text-amber-900 block px-3 py-2 text-base font-medium hover:bg-amber-50 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-amber-700 hover:text-amber-900 block px-3 py-2 text-base font-medium hover:bg-amber-50 rounded-md"
                >
                  {link.name}
                </a>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
