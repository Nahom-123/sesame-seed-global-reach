
import React from 'react';

const Products = () => {
  const products = [
    {
      name: "Humera White Sesame",
      description: "Premium white sesame seeds from the Humera region, known for exceptional oil content and purity.",
      specifications: ["Oil Content: 52-55%", "Purity: 99.95%", "Moisture: 6% max", "FFA: 2% max"],
      packaging: ["25kg PP bags", "50kg PP bags", "1000kg big bags"]
    },
    {
      name: "Mixed White Sesame",
      description: "High-quality mixed white sesame seeds, perfect for various industrial and culinary applications.",
      specifications: ["Oil Content: 50-52%", "Purity: 99.90%", "Moisture: 6% max", "FFA: 2% max"],
      packaging: ["25kg PP bags", "50kg PP bags", "1000kg big bags"]
    },
    {
      name: "Red Brown Sesame",
      description: "Natural red-brown sesame seeds with rich flavor profile, ideal for specialty food markets.",
      specifications: ["Oil Content: 48-50%", "Purity: 99.85%", "Moisture: 6% max", "FFA: 2.5% max"],
      packaging: ["25kg PP bags", "50kg PP bags", "Custom packaging available"]
    }
  ];

  const certifications = [
    "ISO 22000:2018",
    "HACCP Certified",
    "Organic EU/NOP",
    "Fair Trade Certified",
    "FDA Registered",
    "Halal Certified"
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-amber-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-amber-900 mb-4">Our Premium Products</h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            Carefully selected and processed sesame seeds that meet the highest international quality standards
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl mb-6 flex items-center justify-center">
                <div className="text-6xl">🌱</div>
              </div>
              
              <h3 className="text-xl font-bold text-amber-800 mb-3">{product.name}</h3>
              <p className="text-amber-700 mb-4 leading-relaxed">{product.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-amber-800 mb-2">Specifications:</h4>
                <ul className="space-y-1">
                  {product.specifications.map((spec, i) => (
                    <li key={i} className="text-sm text-amber-600">• {spec}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">Packaging Options:</h4>
                <ul className="space-y-1">
                  {product.packaging.map((pack, i) => (
                    <li key={i} className="text-sm text-amber-600">• {pack}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Standards */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-amber-800 mb-6 text-center">Quality Certifications</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-amber-50 rounded-lg p-4 text-center hover:bg-amber-100 transition-colors duration-300">
                <div className="text-2xl mb-2">🏆</div>
                <div className="text-sm font-semibold text-amber-800">{cert}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-amber-700 mb-4">
              All our products undergo rigorous testing at internationally accredited laboratories to ensure 
              compliance with importing country requirements.
            </p>
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
              Download Quality Certificates
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
