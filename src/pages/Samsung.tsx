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
      <div className="bg-black py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-white/5 rounded-full opacity-15 animate-bounce animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/8 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Text Content */}
            <div className="space-y-8">
              <h1 
                className={`text-5xl md:text-7xl font-black text-white transition-all duration-1000 tracking-tight leading-none ${
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
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                  Discover innovative technology and cutting-edge devices that push the boundaries of what's possible in mobile innovation.
                </p>
                
                <div className="space-y-3 text-gray-400">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span>Advanced AI-powered features</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse animation-delay-500"></div>
                    <span>Ultra-high resolution displays</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse animation-delay-1000"></div>
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
                  <div className="absolute top-10 left-10 w-4 h-4 bg-white rounded-full animate-pulse opacity-60"></div>
                  <div className="absolute bottom-16 right-8 w-3 h-3 bg-white rounded-full animate-pulse opacity-40 animation-delay-1000"></div>
                  <div className="absolute top-20 right-12 w-2 h-2 bg-white rounded-full animate-pulse opacity-50 animation-delay-2000"></div>
                  
                  {/* Main Phone Model */}
                  <div className="relative group">
                    <div 
                      className="w-48 h-80 bg-gradient-to-b from-gray-200 via-gray-300 to-white rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-700 hover:rotate-y-12"
                      style={{
                        animation: 'float 6s ease-in-out infinite, rotateY 8s linear infinite',
                        transformStyle: 'preserve-3d'
                      }}
                    >
                      {/* Screen */}
                      <div className="absolute inset-2 bg-black rounded-2xl overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 opacity-80"></div>
                        
                        {/* Punch Hole Camera */}
                        <div className="absolute top-4 right-6 w-3 h-3 bg-white rounded-full"></div>
                        
                        {/* App Icons Simulation */}
                        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 grid grid-cols-4 gap-2">
                          {[...Array(8)].map((_, i) => (
                            <div key={i} className="w-3 h-3 bg-white/30 rounded-sm animate-pulse" style={{animationDelay: `${i * 200}ms`}}></div>
                          ))}
                        </div>
                        
                        {/* Samsung UI Elements */}
                        <div className="absolute top-8 left-4 right-4 h-1 bg-white/40 rounded-full animate-pulse"></div>
                        <div className="absolute top-12 left-4 right-8 h-1 bg-white/30 rounded-full animate-pulse animation-delay-500"></div>
                      </div>
                      
                      {/* Camera Module */}
                      <div className="absolute top-4 left-4 w-14 h-16 bg-gray-800 rounded-2xl">
                        <div className="absolute top-2 left-2 w-4 h-4 bg-white rounded-full animate-pulse"></div>
                        <div className="absolute top-2 right-2 w-4 h-4 bg-white rounded-full animate-pulse animation-delay-300"></div>
                        <div className="absolute bottom-2 left-2 w-4 h-4 bg-white rounded-full animate-pulse animation-delay-600"></div>
                        <div className="absolute bottom-2 right-2 w-2 h-2 bg-white rounded-full animate-pulse animation-delay-900"></div>
                      </div>
                      
                      {/* Side Buttons */}
                      <div className="absolute left-0 top-16 w-1 h-8 bg-gray-400 rounded-r"></div>
                      <div className="absolute left-0 top-28 w-1 h-12 bg-gray-400 rounded-r"></div>
                      <div className="absolute right-0 top-20 w-1 h-16 bg-gray-400 rounded-l"></div>
                      
                      {/* S Pen Slot */}
                      <div className="absolute bottom-8 right-2 w-1 h-8 bg-gray-600 rounded-full animate-pulse"></div>
                    </div>
                    
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-white/20 rounded-3xl blur-xl transform scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
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
              className={`text-3xl md:text-4xl font-bold text-white mb-6 transition-all duration-1000 delay-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Our Samsung Collection
            </h2>
            <p 
              className={`text-lg text-gray-400 max-w-2xl mx-auto transition-all duration-1000 delay-900 ${
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
                className={`group bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden cursor-pointer border border-gray-700 hover:border-gray-600 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${1100 + index * 100}ms` }}
              >
                <div className="relative h-48 bg-gray-800 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                    <product.icon className="h-6 w-6 text-black" />
                  </div>
                  <div className="absolute top-4 right-4 w-3 h-3 bg-white rounded-full animate-pulse"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-300 transition-all duration-300">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-white">
                      {product.price}
                    </span>
                    <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg">
                      View Details
                    </button>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Samsung;