import React, { useState } from 'react';
import { ShoppingCart, Heart, Eye, Star, Plus, Minus, X, Sparkles } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Custom Portrait Sketch',
    price: '$49.99',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    name: 'Resin Art Jewelry',
    price: '$29.99',
    image: 'https://images.unsplash.com/photo-1619158401201-8fa932695178?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    name: 'Handmade Candles',
    price: '$34.99',
    image: 'https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    name: 'Custom Photo Frames',
    price: '$39.99',
    image: 'https://images.unsplash.com/photo-1581612129334-551ccd069e63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
  }
];

const FeaturedProducts = () => {
  const [cart, setCart] = useState({});
  const [showCart, setShowCart] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [favorites, setFavorites] = useState(new Set());

  const addToCart = (productId) => {
    setCart(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
  };

  const removeFromCart = (productId) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[productId] > 1) {
        newCart[productId]--;
      } else {
        delete newCart[productId];
      }
      return newCart;
    });
  };

  const toggleFavorite = (productId) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId);
      } else {
        newFavorites.add(productId);
      }
      return newFavorites;
    });
  };

  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);
  const totalPrice = Object.entries(cart).reduce(
    (total, [id, quantity]) => 
      total + products.find(p => p.id === parseInt(id)).price * quantity, 
    0
  );

  return (
    <div className="bg-gradient-to-b from-pink-50 to-white relative overflow-hidden">
      {/* Floating sparkles background */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <Sparkles
            key={i}
            className="absolute text-pink-200 opacity-20 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 relative">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-extrabold text-gray-900 flex items-center gap-2">
            Featured Products
            <Star className="text-pink-500 animate-spin" />
          </h2>
          
          <button 
            onClick={() => setShowCart(true)}
            className="relative p-2 text-pink-500 hover:text-pink-600 transition-colors"
          >
            <ShoppingCart size={24} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-pink-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center animate-bounce">
                {totalItems}
              </span>
            )}
          </button>
        </div>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group relative transform transition-all duration-300 hover:scale-105"
            >
              <div className="relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-center object-cover transform transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                
                {/* Quick action buttons */}
                <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    onClick={() => toggleFavorite(product.id)}
                    className="p-2 bg-white rounded-full shadow-lg hover:bg-pink-50 transition-colors"
                  >
                    <Heart 
                      size={20} 
                      className={favorites.has(product.id) ? "text-pink-500 fill-pink-500" : "text-gray-400"}
                    />
                  </button>
                  <button 
                    onClick={() => setSelectedProduct(product)}
                    className="p-2 bg-white rounded-full shadow-lg hover:bg-pink-50 transition-colors"
                  >
                    <Eye size={20} className="text-gray-400" />
                  </button>
                </div>
              </div>

              <div className="mt-4 flex flex-col">
                <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                <div className="flex items-center gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-200"}
                    />
                  ))}
                  <span className="text-sm text-gray-500">({product.rating})</span>
                </div>
                <p className="text-lg font-bold text-pink-500 mt-1">${product.price}</p>
                <button 
                  onClick={() => addToCart(product.id)}
                  className="mt-2 w-full bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={20} />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Sidebar */}
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity">
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl p-6 transform transition-transform">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Shopping Cart</h3>
              <button 
                onClick={() => setShowCart(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {Object.keys(cart).length === 0 ? (
              <div className="text-center text-gray-500 mt-10">
                Your cart is empty
              </div>
            ) : (
              <>
                <div className="space-y-4">
                  {Object.entries(cart).map(([id, quantity]) => {
                    const product = products.find(p => p.id === parseInt(id));
                    return (
                      <div key={id} className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-20 h-20 object-cover rounded-md"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium">{product.name}</h4>
                          <p className="text-pink-500">${product.price}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <button 
                              onClick={() => removeFromCart(parseInt(id))}
                              className="p-1 hover:bg-gray-200 rounded-full"
                            >
                              <Minus size={16} />
                            </button>
                            <span>{quantity}</span>
                            <button 
                              onClick={() => addToCart(parseInt(id))}
                              className="p-1 hover:bg-gray-200 rounded-full"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-6 border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <button className="mt-4 w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition-colors">
                    Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Quick view modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6">
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-bold">{selectedProduct.name}</h3>
              <button 
                onClick={() => setSelectedProduct(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              <img 
                src={selectedProduct.image} 
                alt={selectedProduct.name}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div>
                <p className="text-gray-600">{selectedProduct.description}</p>
                <div className="mt-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={i < Math.floor(selectedProduct.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-200"}
                      />
                    ))}
                    <span className="text-gray-500">({selectedProduct.rating})</span>
                  </div>
                  <p className="text-2xl font-bold text-pink-500 mt-2">
                    ${selectedProduct.price}
                  </p>
                  <button 
                    onClick={() => {
                      addToCart(selectedProduct.id);
                      setSelectedProduct(null);
                    }}
                    className="mt-4 w-full bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <ShoppingCart size={20} />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FeaturedProducts