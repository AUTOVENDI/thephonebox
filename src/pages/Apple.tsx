import React, { useEffect, useState, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Smartphone, Tablet, Headphones, Laptop, Watch } from 'lucide-react';
import { IPhoneModel } from '../components/IPhoneModel';
import { PhoneFallback } from '../components/PhoneFallback';

const Apple = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const products = [
    {
      id: 1,
      name: 'iPhone 16 Pro Max',
      price: '$1,199',
      image: 'https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: Smartphone,
      description: 'The most advanced iPhone with A18 Pro chip'
    },
    {
      id: 2,
      name: 'iPhone 16 Pro',
      price: '$999',
      image: 'https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: Smartphone,
      description: 'Premium iPhone experience with Pro features'
    },
    {
      id: 3,
      name: 'iPad Pro',
      price: '$1,099',
      image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: Tablet,
      description: 'Ultra-thin tablet with M4 chip'
    },
    {
      id: 4,
      name: 'AirPods Pro',
      price: '$249',
      image: 'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: Headphones,
      description: 'Premium wireless earbuds with ANC'
    },
    {
      id: 5,
      name: 'MacBook Pro',
      price: '$1,999',
      image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: Laptop,
      description: 'Powerful laptop for professionals'
    },
    {
      id: 6,
      name: 'Apple Watch',
      price: '$399',
      image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: Watch,
      description: 'Smart watch with health monitoring'
    }
    ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-black via-gray-900 to-black py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Floating background elements */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-8">
              <h1 
                className={`text-5xl md:text-7xl font-black text-white transition-all duration-1000 tracking-tight leading-none ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ 
                  fontFamily: 'Satoshi, sans-serif',
                  fontWeight: 900,
                  letterSpacing: '-0.02em'
                }}
              >
                <span className="text-white">
                Apple Products
                </span>
              </h1>
              
              <div 
                className={`space-y-6 transition-all duration-1000 delay-300 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
              >
                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                  Discover innovative technology and cutting-edge devices that push the boundaries of what's possible in mobile innovation.
                </p>
                
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                    <span>Advanced A18 Pro chip</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full animate-ping animation-delay-500"></div>
                    <span>Ultra-high resolution displays</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full animate-ping animation-delay-1000"></div>
                    <span>Pro camera system</span>
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
                {/* 3D Model Container Box */}
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-2xl hover:border-white/40 transition-all duration-500">
                  <div style={{ width: 400, height: 400 }}>
                    <Canvas camera={{ position: [0, 0, 3] }}>
                      <ambientLight intensity={1.2} />
                      <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
                      <directionalLight position={[-10, -10, -5]} intensity={1.5} color="#f0f0f0" />
                      <pointLight position={[0, 0, 10]} intensity={1} color="#ffffff" />
                      <Suspense fallback={<PhoneFallback />}>
                        <IPhoneModel />
                      </Suspense>
                      <OrbitControls enablePan={false} />
                    </Canvas>
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
              style={{ fontFamily: 'Satoshi, sans-serif' }}
            >
              Our Apple Collection
            </h2>
            <p 
              className={`text-lg text-gray-400 max-w-2xl mx-auto transition-all duration-1000 delay-900 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Explore Apple's innovative technology and cutting-edge devices
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div 
                key={product.id}
                className={`group bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-2xl shadow-lg hover:shadow-white/10 transition-all duration-500 overflow-hidden cursor-pointer border border-gray-600 hover:border-white/40 transform hover:scale-105 hover:-rotate-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${1100 + index * 100}ms` }}
              >
                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-l from-transparent via-white/10 to-transparent animate-spin-slow"></div>
                </div>
                
                <div className="relative h-48 bg-gray-800 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg group-hover:animate-bounce">
                    <product.icon className="h-6 w-6 text-black group-hover:animate-pulse" />
                  </div>
                  <div className="absolute top-4 right-4 w-3 h-3 bg-white rounded-full animate-ping"></div>
                </div>
                
                <div className="p-6 relative">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-300 transition-all duration-300">
                    {product.name}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm group-hover:text-gray-200 transition-colors duration-300">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-white group-hover:animate-pulse">
                      {product.price}
                    </span>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/apple/product/${product.id}`);
                      }}
                      className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-110 hover:animate-bounce shadow-lg"
                    >
                      View Details
                    </button>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-white via-gray-200 to-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left animate-gradient bg-300%"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apple;