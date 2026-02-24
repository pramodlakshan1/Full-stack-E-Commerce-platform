// src/pages/OrderConfirmationPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircleIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

// Mock order data (in real app this would come from location.state, context, or API after checkout)
const mockOrder = {
  orderId: 'ORD-' + Math.floor(100000 + Math.random() * 900000),
  date: new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }),
  estimatedDelivery: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }),
  total: 2656.00,
  paymentMethod: 'Credit Card ending in 4242',
  items: [
    {
      id: 1,
      name: 'ASUS ROG Strix G16 (2025) Gaming Laptop',
      quantity: 1,
      price: 1499,
      image: 'https://images.unsplash.com/photo-1611078489935-0cb4c2497a00?w=400',
    },
    {
      id: 2,
      name: 'Samsung Odyssey G9 49" Curved Monitor',
      quantity: 1,
      price: 999,
      image: 'https://images.unsplash.com/photo-1588109273901-3104a9a2e10f?w=400',
    },
    {
      id: 3,
      name: 'Logitech G Pro X Superlight 2 Wireless Mouse',
      quantity: 2,
      price: 159,
      image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39d7?w=400',
    },
  ],
};

const OrderConfirmationPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Success Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-green-100 dark:bg-green-900/40 mb-6">
            <CheckCircleIcon className="w-12 h-12 md:w-16 md:h-16 text-green-600 dark:text-green-400" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Thank You for Your Order!
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Your order has been successfully placed. We'll send you a confirmation email shortly.
          </p>
        </div>

        {/* Order Details Card */}
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 overflow-hidden mb-10 md:mb-12">
          <div className="p-6 md:p-8 border-b border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                  Order #{mockOrder.orderId}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  Placed on {mockOrder.date}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500 dark:text-gray-400">Estimated Delivery</p>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  {mockOrder.estimatedDelivery}
                </p>
              </div>
            </div>
          </div>

          {/* Items */}
          <div className="p-6 md:p-8 space-y-6">
            {mockOrder.items.map((item) => (
              <div key={item.id} className="flex items-center gap-4 md:gap-6">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-gray-900 dark:text-white line-clamp-2">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Qty: {item.quantity} × ${item.price.toFixed(2)}
                  </p>
                </div>
                <div className="text-right font-medium text-gray-900 dark:text-white">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div className="p-6 md:p-8 bg-gray-50/50 dark:bg-gray-900/30 border-t border-gray-200 dark:border-gray-700">
            <div className="space-y-3">
              <div className="flex justify-between text-gray-700 dark:text-gray-300">
                <span>Subtotal</span>
                <span>${(mockOrder.total - 318).toFixed(2)}</span> {/* example breakdown */}
              </div>
              <div className="flex justify-between text-gray-700 dark:text-gray-300">
                <span>Shipping</span>
                <span className="text-green-600 dark:text-green-400">Free</span>
              </div>
              <div className="flex justify-between text-gray-700 dark:text-gray-300">
                <span>Estimated Tax</span>
                <span>${(mockOrder.total * 0.08).toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xl md:text-2xl font-bold text-gray-900 dark:text-white pt-4 border-t border-gray-200 dark:border-gray-700">
                <span>Total</span>
                <span>${mockOrder.total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment & Next Steps */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Payment method: <span className="font-medium">{mockOrder.paymentMethod}</span>
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
            <Link
              to="/account/orders"
              className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-all transform hover:scale-105 shadow-lg"
            >
              View Order Details
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>

            <Link
              to="/products"
              className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
            >
              Continue Shopping
            </Link>
          </div>
        </div>

        {/* Helpful Info */}
        <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 md:p-8 text-center border border-gray-100/50 dark:border-gray-700/50">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            What happens next?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            You’ll receive an email confirmation with tracking details once your order ships.
            <br />
            If you have any questions, feel free to contact our support team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;