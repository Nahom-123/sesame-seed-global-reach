
import React, { useState } from 'react';
import { ArrowLeft, Download, MapPin, Truck, Shield, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProductDetails = () => {
  const [activeVariety, setActiveVariety] = useState('hulled-white');

  const varieties = [
    {
      id: 'hulled-white',
      name: 'Hulled White Sesame',
      description: 'Premium hulled white sesame seeds with exceptional purity and oil content.',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=800&h=600&fit=crop',
      specs: {
        moisture: '6% max',
        purity: '99.95%',
        oilContent: '52-55%',
        ffa: '2% max',
        color: 'White Grade A',
        grades: ['99/1/1', '98/1/1', '95/3/2']
      }
    },
    {
      id: 'natural-white',
      name: 'Natural White Sesame',
      description: 'Unhulled natural white sesame seeds maintaining their natural coating.',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=800&h=600&fit=crop',
      specs: {
        moisture: '6% max',
        purity: '99.90%',
        oilContent: '50-52%',
        ffa: '2% max',
        color: 'Natural White',
        grades: ['99/1/1', '98/1/1']
      }
    },
    {
      id: 'red-brown',
      name: 'Red Brown Sesame',
      description: 'Natural red-brown sesame seeds with rich flavor profile.',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=800&h=600&fit=crop',
      specs: {
        moisture: '6% max',
        purity: '99.85%',
        oilContent: '48-50%',
        ffa: '2.5% max',
        color: 'Red Brown Natural',
        grades: ['99/1/1', '97/2/1']
      }
    }
  ];

  const certifications = [
    { name: 'USDA Organic', icon: '🌿' },
    { name: 'ISO 22000:2018', icon: '🏆' },
    { name: 'HACCP Certified', icon: '✅' },
    { name: 'FDA Registered', icon: '🇺🇸' },
    { name: 'Halal Certified', icon: '☪️' },
    { name: 'Fair Trade', icon: '🤝' }
  ];

  const packagingOptions = [
    {
      type: '50kg PP Bags',
      description: 'Standard polypropylene bags with inner liner',
      moq: '20 MT',
      image: '📦'
    },
    {
      type: '1 MT Jumbo Bags',
      description: 'High-capacity FIBC bags for bulk shipping',
      moq: '20 MT',
      image: '🏗️'
    },
    {
      type: 'Custom Retail Packs',
      description: 'Private label packaging from 100g to 5kg',
      moq: '5 MT',
      image: '🛍️'
    }
  ];

  const sustainabilityFeatures = [
    { title: 'Fair Trade Sourcing', icon: <Shield className="w-6 h-6" />, description: 'Direct partnerships with certified farmers' },
    { title: 'Smallholder Support', icon: <Leaf className="w-6 h-6" />, description: 'Supporting 2000+ small-scale farmers' },
    { title: 'Water Efficient', icon: <MapPin className="w-6 h-6" />, description: 'Drought-resistant cultivation methods' },
    { title: 'Traceability', icon: <Truck className="w-6 h-6" />, description: 'Complete farm-to-port tracking' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-green-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-r from-amber-100 to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link to="/" className="flex items-center text-amber-700 hover:text-amber-900 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-amber-900 mb-6">
                Premium Ethiopian Sesame Seeds
              </h1>
              <p className="text-xl text-amber-700 mb-8 leading-relaxed">
                Traceable from Farm to Port - Discover our exceptional range of sesame seed varieties, 
                each meeting the highest international quality standards.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3">
                  Request Quotation
                </Button>
                <Button variant="outline" className="border-amber-600 text-amber-700 hover:bg-amber-50 px-8 py-3">
                  <Download className="w-4 h-4 mr-2" />
                  Download Catalog
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop" 
                alt="Ethiopian sesame farm" 
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Variety Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Our Sesame Varieties</h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              Each variety is carefully selected and processed to meet specific market requirements
            </p>
          </div>

          <Tabs value={activeVariety} onValueChange={setActiveVariety} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              {varieties.map((variety) => (
                <TabsTrigger key={variety.id} value={variety.id} className="text-sm font-medium">
                  {variety.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {varieties.map((variety) => (
              <TabsContent key={variety.id} value={variety.id}>
                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                  <div>
                    <img 
                      src={variety.image} 
                      alt={variety.name}
                      className="w-full h-80 object-cover rounded-xl shadow-lg"
                    />
                  </div>
                  
                  <div>
                    <h3 className="text-3xl font-bold text-amber-900 mb-4">{variety.name}</h3>
                    <p className="text-lg text-amber-700 mb-8">{variety.description}</p>
                    
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <h4 className="text-xl font-semibold text-amber-800 mb-4">Specifications</h4>
                      <Table>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">Moisture Content</TableCell>
                            <TableCell>{variety.specs.moisture}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Purity</TableCell>
                            <TableCell>{variety.specs.purity}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Oil Content</TableCell>
                            <TableCell>{variety.specs.oilContent}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">FFA (Free Fatty Acid)</TableCell>
                            <TableCell>{variety.specs.ffa}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Color Grade</TableCell>
                            <TableCell>{variety.specs.color}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Available Grades</TableCell>
                            <TableCell>{variety.specs.grades.join(', ')}</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">International Certifications</h2>
            <p className="text-lg text-amber-700">
              Our products meet the highest international quality and safety standards
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl mb-3">{cert.icon}</div>
                  <h3 className="font-semibold text-amber-800 text-sm">{cert.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packaging Options */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">Packaging & MOQ</h2>
            <p className="text-lg text-amber-700">
              Flexible packaging solutions to meet your specific requirements
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {packagingOptions.map((option, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="text-6xl mb-4">{option.image}</div>
                  <CardTitle className="text-amber-800">{option.type}</CardTitle>
                  <CardDescription>{option.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <span className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full font-semibold">
                      MOQ: {option.moq}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics Snapshot */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">Logistics & Shipping</h2>
            <p className="text-lg text-amber-700">
              Efficient global shipping from Ethiopia's premier ports
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-amber-800">
                  <MapPin className="w-5 h-5 mr-2" />
                  Port of Loading
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-700">Port of Djibouti - Strategic location for global access</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-amber-800">
                  <Truck className="w-5 h-5 mr-2" />
                  Incoterms Offered
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-700">FOB Djibouti, CFR, CIF - Flexible terms to suit your needs</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-amber-800">
                  <Shield className="w-5 h-5 mr-2" />
                  Lead Times
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-700">15-20 days from order confirmation to port loading</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-16 bg-gradient-to-br from-green-100 to-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">Sustainability Commitment</h2>
            <p className="text-lg text-amber-700">
              Building a sustainable future through responsible farming and fair trade
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sustainabilityFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-amber-600 mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-amber-800 mb-2">{feature.title}</h3>
                  <p className="text-sm text-amber-700">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-amber-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Import Premium Ethiopian Sesame?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Get a customized quotation for your specific requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-amber-600 hover:bg-amber-50 px-8 py-4 text-lg">
              Request Quotation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
              <Download className="w-5 h-5 mr-2" />
              Download Lab Reports
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetails;
