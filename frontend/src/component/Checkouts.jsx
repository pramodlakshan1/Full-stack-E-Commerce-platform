// src/pages/CheckoutPage.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TrashIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

// Mock cart data (in real app this would come from context / state / API)
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
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1588109273901-3104a9a2e10f?w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Logitech G Pro X Superlight 2 Wireless Mouse',
    price: 159,
    quantity: 2,
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39d7?w=800&auto=format&fit=crop',
  },
];

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'Sri Lanka',
    paymentMethod: 'card',
  });

  const [sameAsShipping, setSameAsShipping] = useState(true);

  const subtotal = mockCartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0; // Free shipping for now
  const tax = subtotal * 0.08; // 8% example tax (adjust according to your region)
  const total = subtotal + shipping + tax;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In real app: send order to backend, clear cart, show success page
    console.log('Order submitted:', { items: mockCartItems, shipping: formData, total });
    alert('Order placed successfully! (Demo)');
    navigate('/orderConfirmation'); // or '/thank-you'
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10 tracking-tight">
          Checkout
        </h1>

        <div className="flex flex-col lg:flex-row lg:gap-10">
          {/* LEFT: Forms – Shipping & Payment */}
          <div className="lg:flex-1 order-2 lg:order-1 space-y-10">
            {/* Shipping Address */}
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-gray-100/50 dark:border-gray-700/50 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Shipping Address
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/40 dark:bg-gray-700/40 backdrop-blur-md border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/40 dark:bg-gray-700/40 backdrop-blur-md border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/40 dark:bg-gray-700/40 backdrop-blur-md border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Postal Code *
                    </label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/40 dark:bg-gray-700/40 backdrop-blur-md border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/40 dark:bg-gray-700/40 backdrop-blur-md border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/40 dark:bg-gray-700/40 backdrop-blur-md border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Country *
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/40 dark:bg-gray-700/40 backdrop-blur-md border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                    >
                      <option value="Sri Lanka">Sri Lanka</option>
                      <option value="India">India</option>
                      <option value="United States">United States</option>
                      {/* Add more options as needed */}
                    </select>
                  </div>
                </div>
              </form>
            </div>

            {/* Payment Method */}
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-gray-100/50 dark:border-gray-700/50 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Payment Method
              </h2>

              <div className="space-y-4">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={formData.paymentMethod === 'card'}
                    onChange={handleChange}
                    className="w-5 h-5 accent-indigo-600"
                  />
                  <span className="text-gray-800 dark:text-gray-200 font-medium">Credit / Debit Card</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={formData.paymentMethod === 'cod'}
                    onChange={handleChange}
                    className="w-5 h-5 accent-indigo-600"
                  />
                  <span className="text-gray-800 dark:text-gray-200 font-medium">Cash on Delivery</span>
                </label>
              </div>

              {formData.paymentMethod === 'card' && (
                <div className="mt-6 space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-4 py-3 bg-white/40 dark:bg-gray-700/40 backdrop-blur-md border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full px-4 py-3 bg-white/40 dark:bg-gray-700/40 backdrop-blur-md border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                        CVV
                      </label>
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full px-4 py-3 bg-white/40 dark:bg-gray-700/40 backdrop-blur-md border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: Order Summary – sticky on desktop */}
          <div className="lg:w-96 lg:sticky lg:top-24 lg:h-fit order-1 lg:order-2 mb-10 lg:mb-0">
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-gray-100/50 dark:border-gray-700/50 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Order Summary
              </h2>

              <div className="space-y-5 mb-8">
                {mockCartItems.map(item => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-md overflow-hidden bg-gray-100 dark:bg-gray-700 flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white line-clamp-1">
                          {item.name}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Qty: {item.quantity}
                        </p>
                      </div>
                    </div>
                    <span className="font-medium text-gray-900 dark:text-white">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-4 border-t border-gray-200 dark:border-gray-700 pt-6">
                <div className="flex justify-between text-lg text-gray-700 dark:text-gray-300">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg text-gray-700 dark:text-gray-300">
                  <span>Shipping</span>
                  <span className="text-green-600 dark:text-green-400">Free</span>
                </div>
                <div className="flex justify-between text-lg text-gray-700 dark:text-gray-300">
                  <span>Estimated Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-2xl font-bold text-gray-900 dark:text-white pt-4 border-t border-gray-200 dark:border-gray-700">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handleSubmit}
                className="mt-8 w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2"
              >
                Place Order <ChevronRightIcon className="w-5 h-5" />
              </button>

              <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-5">
                By placing order you agree to our <Link to="/terms" className="text-indigo-600 dark:text-indigo-400 hover:underline">Terms & Conditions</Link>
              </p>
            </div>

            <div className="mt-6 text-center lg:text-left">
              <Link
                to="/cart"
                className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium transition-colors"
              >
                ← Back to Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;