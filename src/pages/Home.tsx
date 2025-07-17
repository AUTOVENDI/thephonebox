import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Smartphone, Star, Zap, Shield, Truck } from 'lucide-react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-16 min-h-screen relative overflow-hidden">
      {/* Animated Wave Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black animate-gradient bg-300%"></div>
        <div 
          className="absolute top-0 left-0 w-full h-full opacity-40"
          style={{
            background: `
              radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.12) 0%, transparent 50%)
            `,
            animation: 'gradient-shift 6s ease infinite'
          }}
        ></div>
        
        {/* Moving light streaks */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-slide-right"></div>
          <div className="absolute top-2/3 right-0 w-full h-0.5 bg-gradient-to-l from-transparent via-white/20 to-transparent animate-slide-left animation-delay-2000"></div>
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-slide-right animation-delay-4000"></div>
        </div>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large floating orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/15 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-white/10 rounded-full blur-xl animate-float animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/12 rounded-full blur-lg animate-pulse-slow animation-delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-white/8 rounded-full blur-lg animate-float animation-delay-3000"></div>
        
        {/* Floating phone silhouettes */}
        <div className="absolute top-32 right-32 opacity-10 animate-float-slow">
          <Smartphone className="w-16 h-16 text-white transform rotate-12 animate-pulse" />
        </div>
        <div className="absolute bottom-32 left-32 opacity-10 animate-float-slow animation-delay-2000">
          <Smartphone className="w-12 h-12 text-white transform -rotate-12 animate-pulse animation-delay-1000" />
        </div>
        <div className="absolute top-2/3 right-1/4 opacity-10 animate-float-slow animation-delay-1000">
          <Smartphone className="w-10 h-10 text-white transform rotate-45 animate-pulse animation-delay-2000" />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 min-h-screen">
        {/* Hero Section with Enhanced Spacing */}
        <div className="max-w-5xl mx-auto text-center mb-24">
          <h1 
            className={`text-6xl md:text-8xl lg:text-9xl font-black mb-12 transition-all duration-1000 tracking-tight leading-none ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ 
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              fontWeight: 900,
              letterSpacing: '-0.02em'
            }}
          >
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent animate-gradient bg-300% drop-shadow-2xl">
            Welcome to The Phone Box
            </span>
          </h1>
          <p 
            className={`text-2xl md:text-3xl text-gray-200 max-w-3xl mx-auto mb-8 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Discover the latest smartphones from the world's most innovative brands
          </p>
          
          {/* Enhanced decorative elements */}
          <div className="flex justify-center space-x-8 mb-16 flex-wrap gap-4">
            <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 group">
              <div className="w-3 h-3 bg-white rounded-full animate-ping group-hover:animate-bounce"></div>
              <span className="text-lg">Premium Quality</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 group">
              <div className="w-3 h-3 bg-white rounded-full animate-ping animation-delay-500 group-hover:animate-bounce"></div>
              <span className="text-lg">Latest Technology</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 group">
              <div className="w-3 h-3 bg-white rounded-full animate-ping animation-delay-1000 group-hover:animate-bounce"></div>
              <span className="text-lg">Best Prices</span>
            </div>
          </div>
        </div>

        {/* Enhanced Product Categories with Fixed Layout */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 w-full mb-24">
          
          {/* Apple Products Card - Fixed Layout */}
          <div 
            className={`group relative bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-3xl shadow-2xl hover:shadow-white/10 transition-all duration-500 cursor-pointer overflow-hidden border border-gray-600 hover:border-white/40 transform hover:scale-105 hover:rotate-1 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
            style={{ transitionDelay: '600ms' }}
            onClick={() => navigate('/apple')}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Animated border */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent animate-spin-slow"></div>
            </div>
            
            {/* Background Phone Icon - Non-overlapping */}
            <div className="absolute top-8 right-8 opacity-15 group-hover:opacity-30 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12 animate-float-slow">
              <div className="w-24 h-40 bg-gradient-to-b from-white via-gray-200 to-white rounded-2xl shadow-2xl flex items-center justify-center relative">
                <Smartphone className="h-12 w-12 text-black animate-pulse" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-black rounded-full animate-ping"></div>
              </div>
            </div>
            
            <div className="relative p-10 md:p-12">
              {/* Bestseller Badge */}
              <div className="absolute top-6 left-6 bg-white text-black px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                <Star className="w-4 h-4 inline mr-1" />
                Bestseller
              </div>
              
              <div className="mt-8 mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 group-hover:text-gray-300 transition-all duration-300">
                  Apple Products
                </h2>
                <p className="text-gray-300 text-xl mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  iPhone, iPad, AirPods, and more premium Apple devices with cutting-edge technology
                </p>
                
                {/* Featured Models */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300">
                    <div className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></div>
                    <span className="font-medium">iPhone 15 Pro • From $999</span>
                  </div>
                  <div className="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300">
                    <div className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse animation-delay-500"></div>
                    <span className="font-medium">iPad Pro • From $1,099</span>
                  </div>
                  <div className="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300">
                    <div className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse animation-delay-1000"></div>
                    <span className="font-medium">AirPods Pro • $249</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-gray-300 group-hover:text-white transition-all duration-300">
                  <span className="font-semibold text-lg mr-2 group-hover:animate-pulse">Explore Collection</span>
                  <ChevronRight className="h-6 w-6 group-hover:translate-x-2 group-hover:animate-bounce transition-transform duration-300" />
                </div>
                <div className="text-sm text-gray-300 bg-white/10 px-3 py-1 rounded-full group-hover:bg-white/20 transition-colors duration-300">
                  12+ Models
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-white via-gray-200 to-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left animate-gradient bg-300%"></div>
          </div>

          {/* Samsung Products Card - Fixed Layout */}
          <div 
            className={`group relative bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-3xl shadow-2xl hover:shadow-white/10 transition-all duration-500 cursor-pointer overflow-hidden border border-gray-600 hover:border-white/40 transform hover:scale-105 hover:-rotate-1 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
            style={{ transitionDelay: '800ms' }}
            onClick={() => navigate('/samsung')}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Animated border */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-l from-transparent via-white/20 to-transparent animate-spin-slow"></div>
            </div>
            
            {/* Background Phone Icon - Non-overlapping */}
            <div className="absolute top-8 right-8 opacity-15 group-hover:opacity-30 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12 animate-float-slow animation-delay-1000">
              <div className="w-24 h-40 bg-gradient-to-b from-white via-gray-200 to-white rounded-2xl shadow-2xl flex items-center justify-center relative">
                <Smartphone className="h-12 w-12 text-black animate-pulse animation-delay-500" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-black rounded-full animate-ping animation-delay-1000"></div>
              </div>
            </div>
            
            <div className="relative p-10 md:p-12">
              {/* New Badge */}
              <div className="absolute top-6 left-6 bg-white text-black px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                <Zap className="w-4 h-4 inline mr-1" />
                New Arrivals
              </div>
              
              <div className="mt-8 mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 group-hover:text-gray-300 transition-all duration-300">
                  Samsung Products
                </h2>
                <p className="text-gray-300 text-xl mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  Galaxy smartphones, tablets, and cutting-edge technology with innovative features
                </p>
                
                {/* Featured Models */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300">
                    <div className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></div>
                    <span className="font-medium">Galaxy S24 Ultra • From $1,199</span>
                  </div>
                  <div className="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300">
                    <div className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse animation-delay-500"></div>
                    <span className="font-medium">Galaxy Tab S9 • From $799</span>
                  </div>
                  <div className="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300">
                    <div className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse animation-delay-1000"></div>
                    <span className="font-medium">Galaxy Buds Pro • $199</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-gray-300 group-hover:text-white transition-all duration-300">
                  <span className="font-semibold text-lg mr-2 group-hover:animate-pulse">Explore Collection</span>
                  <ChevronRight className="h-6 w-6 group-hover:translate-x-2 group-hover:animate-bounce transition-transform duration-300" />
                </div>
                <div className="text-sm text-gray-300 bg-white/10 px-3 py-1 rounded-full group-hover:bg-white/20 transition-colors duration-300">
                  15+ Models
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-white via-gray-200 to-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left animate-gradient bg-300%"></div>
          </div>
        </div>

        {/* Feature Highlights Strip */}
        <div className={`w-full max-w-6xl mx-auto transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-gray-900/80 via-black/80 to-gray-900/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-8 hover:border-white/40 transition-all duration-500 group">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col items-center space-y-3 group/item hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover/item:animate-bounce">
                  <Truck className="w-6 h-6 text-black group-hover/item:animate-pulse" />
                </div>
                <h3 className="font-semibold text-white group-hover/item:text-gray-200">Free Shipping</h3>
                <p className="text-sm text-gray-300 group-hover/item:text-gray-200">On orders over $500</p>
              </div>
              
              <div className="flex flex-col items-center space-y-3 group/item hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover/item:animate-bounce animation-delay-200">
                  <Shield className="w-6 h-6 text-black group-hover/item:animate-pulse" />
                </div>
                <h3 className="font-semibold text-white group-hover/item:text-gray-200">Premium Warranty</h3>
                <p className="text-sm text-gray-300 group-hover/item:text-gray-200">2-year protection plan</p>
              </div>
              
              <div className="flex flex-col items-center space-y-3 group/item hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover/item:animate-bounce animation-delay-400">
                  <Star className="w-6 h-6 text-black group-hover/item:animate-pulse" />
                </div>
                <h3 className="font-semibold text-white group-hover/item:text-gray-200">Expert Support</h3>
                <p className="text-sm text-gray-300 group-hover/item:text-gray-200">24/7 customer service</p>
              </div>
              
              <div className="flex flex-col items-center space-y-3 group/item hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover/item:animate-bounce animation-delay-600">
                  <Zap className="w-6 h-6 text-black group-hover/item:animate-pulse" />
                </div>
                <h3 className="font-semibold text-white group-hover/item:text-gray-200">Fast Delivery</h3>
                <p className="text-sm text-gray-300 group-hover/item:text-gray-200">Same-day in select cities</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section with enhanced spacing */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-1200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-gray-300 text-lg animate-pulse">
            Premium devices • Competitive prices • Exceptional service
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;