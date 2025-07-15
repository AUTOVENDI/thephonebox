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
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 via-blue-50 to-cyan-50"></div>
        <div 
          className="absolute top-0 left-0 w-full h-full opacity-30"
          style={{
            background: `
              radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)
            `,
            animation: 'gradient-shift 8s ease infinite'
          }}
        ></div>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large floating orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-300/20 to-pink-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-gradient-to-r from-blue-300/20 to-cyan-400/20 rounded-full blur-xl animate-bounce animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-pink-400/20 to-orange-500/20 rounded-full blur-lg animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-gradient-to-r from-cyan-400/20 to-teal-500/20 rounded-full blur-lg animate-bounce animation-delay-3000"></div>
        
        {/* Floating phone silhouettes */}
        <div className="absolute top-32 right-32 opacity-5 animate-float">
          <Smartphone className="w-16 h-16 text-purple-600 transform rotate-12" />
        </div>
        <div className="absolute bottom-32 left-32 opacity-5 animate-float animation-delay-2000">
          <Smartphone className="w-12 h-12 text-blue-600 transform -rotate-12" />
        </div>
        <div className="absolute top-2/3 right-1/4 opacity-5 animate-float animation-delay-1000">
          <Smartphone className="w-10 h-10 text-pink-600 transform rotate-45" />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 min-h-screen">
        {/* Hero Section with Enhanced Spacing */}
        <div className="max-w-5xl mx-auto text-center mb-24">
          <h1 
            className={`text-6xl md:text-8xl lg:text-9xl font-black text-black mb-12 transition-all duration-1000 tracking-tight leading-none ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ 
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              fontWeight: 900,
              letterSpacing: '-0.02em'
            }}
          >
            Welcome to The Phone Box
          </h1>
          <p 
            className={`text-2xl md:text-3xl bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent max-w-3xl mx-auto mb-8 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Discover the latest smartphones from the world's most innovative brands
          </p>
          
          {/* Enhanced decorative elements */}
          <div className="flex justify-center space-x-8 mb-16">
            <div className="flex items-center space-x-3 text-gray-600">
              <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse"></div>
              <span className="text-lg">Premium Quality</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-600">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full animate-pulse animation-delay-500"></div>
              <span className="text-lg">Latest Technology</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-600">
              <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-red-500 rounded-full animate-pulse animation-delay-1000"></div>
              <span className="text-lg">Best Prices</span>
            </div>
          </div>
        </div>

        {/* Enhanced Product Categories with Fixed Layout */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 w-full mb-24">
          
          {/* Apple Products Card - Fixed Layout */}
          <div 
            className={`group relative bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer overflow-hidden border border-gray-200/50 transform hover:scale-105 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
            style={{ transitionDelay: '600ms' }}
            onClick={() => navigate('/apple')}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Background Phone Icon - Non-overlapping */}
            <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12">
              <div className="w-24 h-40 bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-2xl shadow-2xl flex items-center justify-center relative">
                <Smartphone className="h-12 w-12 text-white" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse"></div>
              </div>
            </div>
            
            <div className="relative p-10 md:p-12">
              {/* Bestseller Badge */}
              <div className="absolute top-6 left-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                <Star className="w-4 h-4 inline mr-1" />
                Bestseller
              </div>
              
              <div className="mt-8 mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  Apple Products
                </h2>
                <p className="text-gray-600 text-xl mb-6 leading-relaxed">
                  iPhone, iPad, AirPods, and more premium Apple devices with cutting-edge technology
                </p>
                
                {/* Featured Models */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mr-3"></div>
                    <span className="font-medium">iPhone 15 Pro • From $999</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-orange-500 rounded-full mr-3"></div>
                    <span className="font-medium">iPad Pro • From $1,099</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mr-3"></div>
                    <span className="font-medium">AirPods Pro • $249</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-gray-700 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  <span className="font-semibold text-lg mr-2">Explore Collection</span>
                  <ChevronRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
                <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  12+ Models
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>

          {/* Samsung Products Card - Fixed Layout */}
          <div 
            className={`group relative bg-gradient-to-br from-white via-blue-50 to-cyan-50 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer overflow-hidden border border-blue-200/50 transform hover:scale-105 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
            style={{ transitionDelay: '800ms' }}
            onClick={() => navigate('/samsung')}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-cyan-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Background Phone Icon - Non-overlapping */}
            <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12">
              <div className="w-24 h-40 bg-gradient-to-b from-blue-600 via-cyan-600 to-teal-700 rounded-2xl shadow-2xl flex items-center justify-center relative">
                <Smartphone className="h-12 w-12 text-white" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
              </div>
            </div>
            
            <div className="relative p-10 md:p-12">
              {/* New Badge */}
              <div className="absolute top-6 left-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                <Zap className="w-4 h-4 inline mr-1" />
                New Arrivals
              </div>
              
              <div className="mt-8 mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  Samsung Products
                </h2>
                <p className="text-gray-600 text-xl mb-6 leading-relaxed">
                  Galaxy smartphones, tablets, and cutting-edge technology with innovative features
                </p>
                
                {/* Featured Models */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full mr-3"></div>
                    <span className="font-medium">Galaxy S24 Ultra • From $1,199</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full mr-3"></div>
                    <span className="font-medium">Galaxy Tab S9 • From $799</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full mr-3"></div>
                    <span className="font-medium">Galaxy Buds Pro • $199</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-gray-700 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  <span className="font-semibold text-lg mr-2">Explore Collection</span>
                  <ChevronRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
                <div className="text-sm text-gray-500 bg-blue-100 px-3 py-1 rounded-full">
                  15+ Models
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>
        </div>

        {/* Feature Highlights Strip */}
        <div className={`w-full max-w-6xl mx-auto transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-white/80 via-purple-50/80 to-blue-50/80 backdrop-blur-sm rounded-2xl shadow-xl border border-purple-200/50 p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col items-center space-y-3">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800">Free Shipping</h3>
                <p className="text-sm text-gray-600">On orders over $500</p>
              </div>
              
              <div className="flex flex-col items-center space-y-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800">Premium Warranty</h3>
                <p className="text-sm text-gray-600">2-year protection plan</p>
              </div>
              
              <div className="flex flex-col items-center space-y-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800">Expert Support</h3>
                <p className="text-sm text-gray-600">24/7 customer service</p>
              </div>
              
              <div className="flex flex-col items-center space-y-3">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800">Fast Delivery</h3>
                <p className="text-sm text-gray-600">Same-day in select cities</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section with enhanced spacing */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-1200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-gray-500 text-lg">
            Premium devices • Competitive prices • Exceptional service
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;