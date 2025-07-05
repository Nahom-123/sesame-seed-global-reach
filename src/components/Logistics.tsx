
import React from 'react';

const Logistics = () => {
  const exportProcess = [
    {
      step: "1",
      title: "Order Confirmation",
      description: "Contract signing and payment terms agreement"
    },
    {
      step: "2", 
      title: "Quality Testing",
      description: "Pre-shipment inspection and laboratory analysis"
    },
    {
      step: "3",
      title: "Documentation",
      description: "Export permits, certificates, and shipping documents"
    },
    {
      step: "4",
      title: "Packaging",
      description: "Professional packaging according to specifications"
    },
    {
      step: "5",
      title: "Shipping",
      description: "Coordination with trusted logistics partners"
    },
    {
      step: "6",
      title: "Delivery",
      description: "Tracking and delivery confirmation to destination"
    }
  ];

  const ports = [
    { name: "Djibouti Port", description: "Primary export gateway - 90% of shipments" },
    { name: "Port Sudan", description: "Alternative route for regional markets" },
    { name: "Berbera Port", description: "Emerging route for Middle East markets" }
  ];

  return (
    <section id="logistics" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-amber-900 mb-4">Export & Logistics</h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            Seamless international shipping with end-to-end logistics support
          </p>
        </div>

        {/* Export Process */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-amber-800 mb-8 text-center">Our Export Process</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exportProcess.map((item, index) => (
              <div key={index} className="relative bg-gradient-to-br from-amber-50 to-green-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-amber-800 mb-2">{item.title}</h4>
                    <p className="text-amber-700">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Shipping Information */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-amber-800 mb-6">Shipping Ports</h3>
            <div className="space-y-4">
              {ports.map((port, index) => (
                <div key={index} className="bg-amber-50 rounded-lg p-4 hover:bg-amber-100 transition-colors duration-300">
                  <h4 className="font-bold text-amber-800">{port.name}</h4>
                  <p className="text-amber-700 text-sm">{port.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-amber-800 mb-6">Shipping Options</h3>
            <div className="space-y-4">
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-bold text-green-800">Container Shipping</h4>
                <p className="text-green-700 text-sm">20ft & 40ft containers for large orders</p>
                <p className="text-green-600 text-xs">Capacity: 18-27 tons per container</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-bold text-blue-800">Break Bulk</h4>
                <p className="text-blue-700 text-sm">Flexible quantities for smaller orders</p>
                <p className="text-blue-600 text-xs">Minimum: 100 tons</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-bold text-purple-800">Express Shipping</h4>
                <p className="text-purple-700 text-sm">Air freight for urgent samples</p>
                <p className="text-purple-600 text-xs">Up to 500kg capacity</p>
              </div>
            </div>
          </div>
        </div>

        {/* Global Reach */}
        <div className="bg-gradient-to-br from-amber-100 to-green-100 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-amber-800 mb-6 text-center">Global Reach</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl mb-2">🌏</div>
              <h4 className="font-bold text-amber-800">Asia Pacific</h4>
              <p className="text-sm text-amber-700">China, Japan, Korea, India</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🌍</div>
              <h4 className="font-bold text-amber-800">Europe</h4>
              <p className="text-sm text-amber-700">Germany, Netherlands, Turkey</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🌎</div>
              <h4 className="font-bold text-amber-800">Americas</h4>
              <p className="text-sm text-amber-700">USA, Mexico, Brazil</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🌍</div>
              <h4 className="font-bold text-amber-800">Middle East</h4>
              <p className="text-sm text-amber-700">UAE, Saudi Arabia, Egypt</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logistics;
