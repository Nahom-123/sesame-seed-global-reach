
import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    product: '',
    quantity: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you for your inquiry! We will contact you within 24 hours.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-amber-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-amber-900 mb-4">Contact Us</h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            Ready to start your sesame seed import journey? Get in touch with our export specialists
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-amber-800 mb-6">Get Export Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-amber-700 font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-amber-700 font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-amber-700 font-semibold mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-amber-700 font-semibold mb-2">Country *</label>
                  <input
                    type="text"
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-amber-700 font-semibold mb-2">Product Interest</label>
                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="">Select Product</option>
                    <option value="humera-white">Humera White Sesame</option>
                    <option value="mixed-white">Mixed White Sesame</option>
                    <option value="red-brown">Red Brown Sesame</option>
                  </select>
                </div>
                <div>
                  <label className="block text-amber-700 font-semibold mb-2">Quantity (MT)</label>
                  <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="e.g. 100"
                    className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-amber-700 font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please provide details about your requirements, preferred delivery terms, etc."
                  className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Send Inquiry
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-amber-800 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-amber-600 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-amber-800">Head Office</h4>
                    <p className="text-amber-700">Humera, Tigray Region, Ethiopia</p>
                    <p className="text-amber-700">P.O. Box: 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="text-amber-600 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-amber-800">Phone</h4>
                    <p className="text-amber-700">+251 911 123 456</p>
                    <p className="text-amber-700">+251 911 789 012</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="text-amber-600 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-amber-800">Email</h4>
                    <p className="text-amber-700">export@ethiosesame.com</p>
                    <p className="text-amber-700">info@ethiosesame.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Contact */}
            <div className="bg-green-600 rounded-2xl shadow-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Quick Contact via WhatsApp</h3>
              <p className="mb-6">For immediate assistance and quick quotes</p>
              <a
                href="https://wa.me/251911123456"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-block"
              >
                Chat on WhatsApp
              </a>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-amber-800 mb-4">Business Hours</h3>
              <div className="space-y-2 text-amber-700">
                <p><span className="font-semibold">Monday - Friday:</span> 8:00 AM - 6:00 PM (EAT)</p>
                <p><span className="font-semibold">Saturday:</span> 9:00 AM - 4:00 PM (EAT)</p>
                <p><span className="font-semibold">Sunday:</span> Closed</p>
              </div>
              <p className="text-sm text-amber-600 mt-4">
                Emergency export inquiries are handled 24/7 via WhatsApp
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
