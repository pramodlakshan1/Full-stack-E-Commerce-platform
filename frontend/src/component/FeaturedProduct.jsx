// src/components/FeaturedProducts.jsx
import React from 'react';
import { HeartIcon } from '@heroicons/react/24/outline'; // or use lucide-react Heart icon

const products = [
  {
    id: 1,
    name: 'High-Performance Laptop',
    price: 999,
    originalPrice: 1299, // optional discount
    img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Wireless Ergonomic Mouse',
    price: 49,
    img: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39d7?w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'RGB Mechanical Keyboard',
    price: 129,
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    name: '4K Curved Gaming Monitor',
    price: 299,
    originalPrice: 349,
    img: 'https://images.unsplash.com/photo-1588109273901-3104a9a2e10f?w=800&auto=format&fit=crop',
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10 md:mb-12 text-center tracking-tight">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => {
            const discount = product.originalPrice
              ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
              : null;

            return (
              <div
                key={product.id}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              >
                {/* Image container */}
                <div className="relative aspect-4/3 overflow-hidden bg-gray-100 dark:bg-gray-700">
                  {discount && (
                    <div className="absolute top-3 left-3 z-10 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-md">
                      -{discount}%
                    </div>
                  )}

                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out"
                  />

                  {/* Overlay actions on hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <button className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-5 py-2.5 rounded-full font-medium text-sm shadow-lg hover:bg-gray-100 dark:hover:bg-gray-800 transform hover:scale-105 transition-all">
                      Quick View
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1.5 line-clamp-2">
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between">
                    <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-lg font-medium transition-colors duration-200">
                      Add to Cart
                    </button>

                    <button className="ml-3 p-2.5 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                      <HeartIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;