import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: string;
  images: string[];
  description: string;
  features: string[];
  specifications: { [key: string]: string };
  reviews: {
    id: number;
    user: string;
    rating: number;
    comment: string;
    date: string;
  }[];
  averageRating: number;
  totalReviews: number;
}

const ProductPage = () => {
  const { brand, productId } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Mock product data - in a real app, this would come from an API
  const getProductData = (): Product | null => {
    const products: { [key: string]: { [key: string]: Product } } = {
      apple: {
        '1': {
          id: 1,
          name: 'iPhone 15 Pro',
          price: '$999',
          images: [
            'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/1064162/pexels-photo-1064162.jpeg?auto=compress&cs=tinysrgb&w=800'
          ],
          description: 'The iPhone 15 Pro features a titanium design, A17 Pro chip, and advanced camera system with 5x telephoto zoom.',
          features: [
            'A17 Pro chip with 6-core GPU',
            'Pro camera system with 5x telephoto',
            'Titanium design',
            'USB-C connectivity',
            'Action Button',
            'Always-On display'
          ],
          specifications: {
            'Display': '6.1-inch Super Retina XDR',
            'Chip': 'A17 Pro',
            'Storage': '128GB, 256GB, 512GB, 1TB',
            'Camera': 'Triple 48MP system',
            'Battery': 'Up to 23 hours video playback',
            'Material': 'Titanium'
          },
          reviews: [
            {
              id: 1,
              user: 'John D.',
              rating: 5,
              comment: 'Amazing phone! The camera quality is incredible and the titanium build feels premium.',
              date: '2024-01-15'
            },
            {
              id: 2,
              user: 'Sarah M.',
              rating: 4,
              comment: 'Great performance and battery life. The Action Button is a nice addition.',
              date: '2024-01-10'
            },
            {
              id: 3,
              user: 'Mike R.',
              rating: 5,
              comment: 'Best iPhone yet! The 5x zoom is fantastic for photography.',
              date: '2024-01-08'
            }
          ],
          averageRating: 4.7,
          totalReviews: 156
        },
        '2': {
          id: 2,
          name: 'iPhone 15',
          price: '$799',
          images: [
            'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=800'
          ],
          description: 'The iPhone 15 brings USB-C, Dynamic Island, and advanced camera features to the standard iPhone lineup.',
          features: [
            'A16 Bionic chip',
            'Advanced dual-camera system',
            'Dynamic Island',
            'USB-C connectivity',
            'Ceramic Shield front',
            'All-day battery life'
          ],
          specifications: {
            'Display': '6.1-inch Super Retina XDR',
            'Chip': 'A16 Bionic',
            'Storage': '128GB, 256GB, 512GB',
            'Camera': 'Dual 48MP system',
            'Battery': 'Up to 20 hours video playback',
            'Material': 'Aluminum'
          },
          reviews: [
            {
              id: 1,
              user: 'Emma L.',
              rating: 4,
              comment: 'Great value for money. USB-C is finally here!',
              date: '2024-01-12'
            }
          ],
          averageRating: 4.5,
          totalReviews: 89
        }
      },
      samsung: {
        '1': {
          id: 1,
          name: 'Galaxy S24 Ultra',
          price: '$1,199',
          images: [
            'https://images.pexels.com/photos/1064162/pexels-photo-1064162.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/1292464/pexels-photo-1292464.jpeg?auto=compress&cs=tinysrgb&w=800'
          ],
          description: 'The Galaxy S24 Ultra features the most advanced S Pen, AI-powered camera, and stunning display technology.',
          features: [
            'Snapdragon 8 Gen 3 processor',
            '200MP main camera with AI zoom',
            'Built-in S Pen',
            'Titanium frame',
            '6.8-inch Dynamic AMOLED display',
            'All-day intelligent battery'
          ],
          specifications: {
            'Display': '6.8-inch Dynamic AMOLED 2X',
            'Processor': 'Snapdragon 8 Gen 3',
            'Storage': '256GB, 512GB, 1TB',
            'Camera': 'Quad 200MP system',
            'Battery': '5000mAh with 45W charging',
            'Material': 'Titanium'
          },
          reviews: [
            {
              id: 1,
              user: 'Alex K.',
              rating: 5,
              comment: 'The S Pen functionality is incredible for productivity. Best Android phone!',
              date: '2024-01-14'
            },
            {
              id: 2,
              user: 'Lisa P.',
              rating: 4,
              comment: 'Amazing camera quality and the AI features are impressive.',
              date: '2024-01-11'
            }
          ],
          averageRating: 4.6,
          totalReviews: 203
        }
      }
    };

    return products[brand!]?.[productId!] || null;
  };

  const product = getProductData();

  if (!product) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Product not found</h1>
          <button 
            onClick={() => navigate(-1)}
            className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    setIsAddedToCart(true);
    setTimeout(() => setIsAddedToCart(false), 2000);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) 
            ? 'text-yellow-400 fill-current' 
            : i < rating 
            ? 'text-yellow-400 fill-current opacity-50' 
            : 'text-gray-400'
        }`}
      />
    ));
  };

  return (
    <div className="pt-16 min-h-screen bg-black">
      {/* Back Button */}
      <div className="px-4 sm:px-6 lg:px-8 py-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to {brand?.charAt(0).toUpperCase() + brand?.slice(1)} Products</span>
        </button>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Product Images */}
            <div className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-600">
                <div className="aspect-square mb-4 overflow-hidden rounded-xl">
                  <img
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Image Thumbnails */}
                <div className="flex space-x-3 overflow-x-auto">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === index 
                          ? 'border-white' 
                          : 'border-gray-600 hover:border-gray-400'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl font-bold text-white mb-2" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    {product.name}
                  </h1>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-1">
                      {renderStars(product.averageRating)}
                    </div>
                    <span className="text-gray-300">
                      {product.averageRating} ({product.totalReviews} reviews)
                    </span>
                  </div>
                  <p className="text-3xl font-bold text-white mb-6">{product.price}</p>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed">
                  {product.description}
                </p>

                {/* Key Features */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quantity and Add to Cart */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <label className="text-white font-medium">Quantity:</label>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-8 h-8 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors"
                      >
                        -
                      </button>
                      <span className="text-white font-medium w-8 text-center">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-8 h-8 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <button
                      onClick={handleAddToCart}
                      className={`flex-1 flex items-center justify-center space-x-2 py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                        isAddedToCart
                          ? 'bg-green-600 text-white'
                          : 'bg-white text-black hover:bg-gray-200'
                      }`}
                    >
                      <ShoppingCart className="w-5 h-5" />
                      <span>{isAddedToCart ? 'Added to Cart!' : 'Add to Cart'}</span>
                    </button>
                    <button className="p-3 border border-gray-600 rounded-full text-white hover:border-white transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                    <button className="p-3 border border-gray-600 rounded-full text-white hover:border-white transition-colors">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Service Features */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-700">
                  <div className="text-center">
                    <Truck className="w-6 h-6 text-white mx-auto mb-2" />
                    <p className="text-sm text-gray-300">Free Shipping</p>
                  </div>
                  <div className="text-center">
                    <Shield className="w-6 h-6 text-white mx-auto mb-2" />
                    <p className="text-sm text-gray-300">2 Year Warranty</p>
                  </div>
                  <div className="text-center">
                    <RotateCcw className="w-6 h-6 text-white mx-auto mb-2" />
                    <p className="text-sm text-gray-300">30 Day Returns</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className={`mt-16 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'Satoshi, sans-serif' }}>
              Specifications
            </h2>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-600">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center py-3 border-b border-gray-700 last:border-b-0">
                    <span className="text-gray-300 font-medium">{key}</span>
                    <span className="text-white">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className={`mt-16 transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'Satoshi, sans-serif' }}>
              Customer Reviews
            </h2>
            <div className="space-y-6">
              {product.reviews.map((review) => (
                <div key={review.id} className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-600">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <span className="text-black font-semibold">
                          {review.user.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="text-white font-medium">{review.user}</p>
                        <div className="flex items-center space-x-1">
                          {renderStars(review.rating)}
                        </div>
                      </div>
                    </div>
                    <span className="text-gray-400 text-sm">{review.date}</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;