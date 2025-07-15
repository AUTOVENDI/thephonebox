import React, { useEffect, useState } from 'react';
import { Smartphone, Tablet, Headphones, Laptop, Watch } from 'lucide-react';

const Samsung = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const products = [
    {
      id: 1,
      name: 'Galaxy S24 Ultra',
      price: '$1,199',
      image: 'https://images.pexels.com/photos/1064162/pexels-photo-1064162.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: Smartphone,
      description: 'The most advanced Galaxy smartphone with S Pen'
    },
    {
      id: 2,
      name: 'Galaxy S24',
      price: '$799',
      image: 'https://images.pexels.com/photos/1292464/pexels-photo-1292464.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: Smartphone,
      description: 'Premium Galaxy experience with AI features'
    },
    {
      id: 3,
      name: 'Galaxy Tab S9',
      price: '$799',
      image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: Tablet,
      description: 'Ultra-thin tablet with stunning display'
    },
    {
      id: 4,
      name: 'Galaxy Buds Pro',
      price: '$199',
      image: 'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: Headphones,
      description: 'Premium wireless earbuds with ANC'
    },
    {
      id: 5,
      name: 'Galaxy Book',
      price: '$999',
      image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: Laptop,
      description: 'Lightweight laptop for productivity'
    },
    {
      id: 6,
      name: 'Galaxy Watch',
      price: '$329',
      image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: Watch,
      description: 'Smart watch with health monitoring'
    }
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 via-cyan-50 via-white to-teal-50 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-blue-300 to-cyan-400 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-cyan-300 to-teal-400 rounded-full opacity-15 animate-bounce animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Text Content */}
            <div className="space-y-8">
              <h1 
                className={`text-5xl md:text-7xl font-black text-black transition-all duration-1000 tracking-tight leading-none ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ 
                  fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                  fontWeight: 900,
                  letterSpacing: '-0.02em'
                }}
              >
                Samsung Products
              </h1>
              
              <div 
                className={`space-y-6 transition-all duration-1000 delay-300 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
              >
                <p className="text-xl md:text-2xl bg-gradient-to-r from-gray-600 to-blue-700 bg-clip-text text-transparent leading-relaxed">
                  Discover innovative technology and cutting-edge devices that push the boundaries of what's possible in mobile innovation.
                </p>
                
                <div className="space-y-3 text-gray-500">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full animate-pulse"></div>
                    <span>Advanced AI-powered features</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full animate-pulse animation-delay-500"></div>
                    <span>Ultra-high resolution displays</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full animate-pulse animation-delay-1000"></div>
                    <span>S Pen productivity tools</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - 3D Phone Model */}
            <div className="flex justify-center lg:justify-end">
              <div 
                className={`relative transition-all duration-1000 delay-500 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
              >
                {/* 3D Phone Container */}
                <div className="relative w-80 h-80 flex items-center justify-center">
                  
                  {/* Floating Elements */}
                  <div className="absolute top-10 left-10 w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full animate-pulse opacity-60"></div>
                  <div className="absolute bottom-16 right-8 w-3 h-3 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full animate-pulse opacity-40 animation-delay-1000"></div>
                  <div className="absolute top-20 right-12 w-2 h-2 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full animate-pulse opacity-50 animation-delay-2000"></div>
                  
                  {/* Main Phone Model */}
                  <div className="relative group">
                    <div 
                      className="w-48 h-80 bg-gradient-to-b from-blue-600 via-cyan-700 to-teal-900 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-700 hover:rotate-y-12"
                      style={{
                        animation: 'float 6s ease-in-out infinite, rotateY 8s linear infinite',
                        transformStyle: 'preserve-3d'
                      }}
                    >
                      {/* Screen */}
                      <div className="absolute inset-2 bg-gradient-to-b from-blue-900 via-cyan-900 to-black rounded-2xl overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-blue-400 via-cyan-500 to-teal-500 opacity-80"></div>
                        
                        {/* Punch Hole Camera */}
                        <div className="absolute top-4 right-6 w-3 h-3 bg-black rounded-full"></div>
                        
                        {/* App Icons Simulation */}
                        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 grid grid-cols-4 gap-2">
                          {[...Array(8)].map((_, i) => (
                            <div key={i} className="w-3 h-3 bg-gradient-to-r from-white/30 to-cyan-200/30 rounded-sm animate-pulse" style={{animationDelay: `${i * 200}ms`}}></div>
                          ))}
                        </div>
                        
                        {/* Samsung UI Elements */}
                        <div className="absolute top-8 left-4 right-4 h-1 bg-gradient-to-r from-cyan-300/40 to-blue-300/40 rounded-full animate-pulse"></div>
                        <div className="absolute top-12 left-4 right-8 h-1 bg-gradient-to-r from-blue-300/30 to-teal-300/30 rounded-full animate-pulse animation-delay-500"></div>
                      </div>
                      
                      {/* Camera Module */}
                      <div className="absolute top-4 left-4 w-14 h-16 bg-gradient-to-br from-blue-800 to-cyan-900 rounded-2xl">
                        <div className="absolute top-2 left-2 w-4 h-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full animate-pulse"></div>
                        <div className="absolute top-2 right-2 w-4 h-4 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full animate-pulse animation-delay-300"></div>
                        <div className="absolute bottom-2 left-2 w-4 h-4 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-full animate-pulse animation-delay-600"></div>
                        <div className="absolute bottom-2 right-2 w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse animation-delay-900"></div>
                      </div>
                      
                      {/* Side Buttons */}
                      <div className="absolute left-0 top-16 w-1 h-8 bg-gradient-to-b from-blue-700 to-cyan-700 rounded-r"></div>
                      <div className="absolute left-0 top-28 w-1 h-12 bg-gradient-to-b from-cyan-700 to-teal-700 rounded-r"></div>
                      <div className="absolute right-0 top-20 w-1 h-16 bg-gradient-to-b from-teal-700 to-blue-700 rounded-l"></div>
                      
                      {/* S Pen Slot */}
                      <div className="absolute bottom-8 right-2 w-1 h-8 bg-gradient-to-b from-cyan-800 to-blue-800 rounded-full animate-pulse"></div>
                    </div>
                    
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 via-cyan-400/30 to-teal-400/30 rounded-3xl blur-xl transform scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 
              className={`text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6 transition-all duration-1000 delay-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Our Samsung Collection
            </h2>
            <p 
              className={`text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-1000 delay-900 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Explore Samsung's innovative technology and cutting-edge devices
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div 
                key={product.id}
                className={`group bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden cursor-pointer border border-blue-100/50 hover:border-blue-200 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${1100 + index * 100}ms` }}
              >
                <div className="relative h-48 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-white/90 to-blue-100/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                    <product.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      {product.price}
                    </span>
                    <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                      View Details
                    </button>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Samsung;