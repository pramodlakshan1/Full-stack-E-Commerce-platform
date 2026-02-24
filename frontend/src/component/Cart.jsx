// src/pages/CartPage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TrashIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/outline';

// Mock data (same as before – realistic tech items)
const mockCartItems = [
  {
    id: 1,
    name: 'ASUS ROG Strix G16 (2025) Gaming Laptop',
    price: 1499,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1611078489935-0cb4c2497a00?w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Samsung Odyssey G9 49" Curved Monitor',
    price: 999,
    quantity: 2,
    image: 'https://images.unsplash.com/photo-1588109273901-3104a9a2e10f?w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Keychron Q1 Pro Wireless Mechanical Keyboard',
    price: 179,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Logitech G Pro X Superlight 2 Wireless Mouse',
    price: 159,
    quantity: 3,
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39d7?w=800&auto=format&fit=crop',
  },
];

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setCartItems(mockCartItems);
      setLoading(false);
    }, 800);
  }, []);

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0; // can be dynamic later
  const total = subtotal + shipping;

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center">
        <div className="animate-pulse text-xl text-gray-600 dark:text-gray-400">Loading cart...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10 tracking-tight">
          Your Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-24">
            <div className="text-7xl mb-6 text-gray-400 dark:text-gray-600">🛒</div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Your cart is empty
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-lg mx-auto">
              Looks like you haven’t added anything yet. Let’s find something cool!
            </p>
            <Link
              to="/producList"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-full font-medium text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Browse Products →
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row lg:gap-10">
            {/* LEFT: Cart Items List */}
            <div className="lg:flex-1 space-y-6 md:space-y-8 order-2 lg:order-1">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl shadow-lg border border-gray-100/50 dark:border-gray-700/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center p-5 sm:p-6 gap-5 sm:gap-6">
                    {/* Product Image */}
                    <div className="w-28 h-28 sm:w-32 sm:h-32 shrink-0 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700 shadow-inner">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-1.5 line-clamp-2">
                        {item.name}
                      </h3>
                      <p className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Unit price: ${item.price.toFixed(2)}
                      </p>
                    </div>

                    {/* Quantity + Remove */}
                    <div className="flex items-center gap-6 sm:gap-8 mt-4 sm:mt-0">
                      <div className="flex items-center bg-gray-100 dark:bg-gray-700/60 rounded-full border border-gray-200 dark:border-gray-600 overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          className="p-3 hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-50 transition-colors"
                        >
                          <MinusIcon className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                        </button>

                        <span className="w-14 text-center font-medium text-lg text-gray-900 dark:text-white">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-3 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        >
                          <PlusIcon className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-3 text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 transition-colors"
                        aria-label="Remove item"
                      >
                        <TrashIcon className="w-6 h-6" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT: Order Summary (sticky on desktop) */}
            <div className="lg:w-96 lg:sticky lg:top-24 lg:h-fit order-1 lg:order-2 mb-10 lg:mb-0">
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-gray-100/50 dark:border-gray-700/50 shadow-xl">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-lg text-gray-700 dark:text-gray-300">
                    <span>Subtotal ({cartItems.length} items)</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-lg text-gray-700 dark:text-gray-300">
                    <span>Shipping</span>
                    <span className="text-green-600 dark:text-green-400">Free</span>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-5 mt-5">
                    <div className="flex justify-between text-2xl font-bold text-gray-900 dark:text-white">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <Link
                  to="/checkout"
                  className="block w-full bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-center py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-[1.02] shadow-lg"
                >
                  Proceed to Checkout →
                </Link>

                <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-5">
                  Taxes and shipping will be calculated at checkout
                </p>
              </div>

              <div className="mt-6 text-center lg:text-left">
                <Link
                  to="/producList"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium transition-colors"
                >
                  ← Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;