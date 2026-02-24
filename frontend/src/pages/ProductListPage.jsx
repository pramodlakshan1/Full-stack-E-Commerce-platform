// src/pages/ProductsPage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../component/Header';
import Footer from '../component/Footer';
import { XMarkIcon } from '@heroicons/react/24/outline';
// import axios from 'axios'; // Uncomment when connecting real backend

// Mock data (30 realistic tech products)
const mockProducts = [
  // Laptops
  { id: 1, name: "ASUS ROG Strix G16 (2025)", price: 1499, image: "https://images.unsplash.com/photo-1611078489935-0cb4c2497a00?w=800", category: "laptops" },
  { id: 2, name: "MacBook Pro 16\" M4 Max", price: 3499, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800", category: "laptops" },
  { id: 3, name: "Lenovo Legion Pro 7i", price: 1899, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800", category: "laptops" },
  { id: 4, name: "Dell XPS 15 OLED", price: 2299, image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800", category: "laptops" },
  { id: 5, name: "Acer Predator Helios Neo 16", price: 1199, image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800", category: "laptops" },

  // Monitors
  { id: 6, name: "Samsung Odyssey G9 49\" Curved", price: 999, image: "https://images.unsplash.com/photo-1588109273901-3104a9a2e10f?w=800", category: "monitors" },
  { id: 7, name: "LG UltraGear 27\" 1440p 165Hz", price: 349, image: "https://images.unsplash.com/photo-1588109273901-3104a9a2e10f?w=800", category: "monitors" },
  { id: 8, name: "Dell Alienware AW3423DW QD-OLED", price: 1099, image: "https://images.unsplash.com/photo-1588109273901-3104a9a2e10f?w=800", category: "monitors" },
  { id: 9, name: "BenQ MOBIUZ EX2710Q", price: 299, image: "https://images.unsplash.com/photo-1588109273901-3104a9a2e10f?w=800", category: "monitors" },

  // Keyboards
  { id: 10, name: "Keychron Q1 Pro Wireless", price: 179, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800", category: "keyboards" },
  { id: 11, name: "Razer BlackWidow V4 Pro", price: 229, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800", category: "keyboards" },
  { id: 12, name: "Logitech G Pro X TKL", price: 129, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800", category: "keyboards" },
  { id: 13, name: "Ducky One 3 SF RGB", price: 139, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800", category: "keyboards" },

  // Mice
  { id: 14, name: "Logitech G Pro X Superlight 2", price: 159, image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39d7?w=800", category: "mice" },
  { id: 15, name: "Razer Viper V3 Pro", price: 149, image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39d7?w=800", category: "mice" },
  { id: 16, name: "SteelSeries Aerox 5 Wireless", price: 99, image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39d7?w=800", category: "mice" },

  // Graphics Cards (VGA)
  { id: 17, name: "NVIDIA GeForce RTX 5090", price: 2499, image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800", category: "vga" },
  { id: 18, name: "AMD Radeon RX 8900 XTX", price: 1199, image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800", category: "vga" },
  { id: 19, name: "NVIDIA RTX 4070 Ti Super", price: 799, image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800", category: "vga" },

  // Motherboards
  { id: 20, name: "ASUS ROG Strix Z890-E Gaming WiFi", price: 499, image: "https://images.unsplash.com/photo-1591797799844-2d1c2a0d1466?w=800", category: "motherboards" },
  { id: 21, name: "MSI MPG B650 Carbon WiFi", price: 259, image: "https://images.unsplash.com/photo-1591797799844-2d1c2a0d1466?w=800", category: "motherboards" },
  { id: 22, name: "Gigabyte X870 AORUS Elite", price: 329, image: "https://images.unsplash.com/photo-1591797799844-2d1c2a0d1466?w=800", category: "motherboards" },

  // Storage
  { id: 23, name: "Samsung 990 PRO 4TB NVMe", price: 349, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800", category: "storage" },
  { id: 24, name: "WD Black SN850X 2TB", price: 179, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800", category: "storage" },

  // Power Supplies
  { id: 25, name: "Corsair RM1000x (2024) 1000W", price: 189, image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800", category: "psu" },
  { id: 26, name: "Seasonic FOCUS GX-850", price: 149, image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800", category: "psu" },

  // Cases
  { id: 27, name: "Lian Li O11 Dynamic EVO", price: 149, image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800", category: "cases" },
  { id: 28, name: "Fractal Design Meshify 2", price: 159, image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800", category: "cases" },

  // Cooling
  { id: 29, name: "NZXT Kraken Elite 360 RGB", price: 279, image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800", category: "cooling" },
  { id: 30, name: "Noctua NH-D15 chromax.black", price: 129, image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800", category: "cooling" },
];

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [priceRange, setPriceRange] = useState(2000);
  const [page, setPage] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      let filtered = mockProducts;

      if (searchTerm.trim()) {
        filtered = filtered.filter(p =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
        );
      }

      if (category !== 'all') {
        filtered = filtered.filter(p => p.category === category);
      }

      filtered = filtered.filter(p => p.price <= priceRange);

      const itemsPerPage = 8;
      const start = (page - 1) * itemsPerPage;
      setProducts(filtered.slice(start, start + itemsPerPage));

      setLoading(false);
    }, 700);
  }, [page, searchTerm, category, priceRange]);

  const totalPages = Math.ceil(
    mockProducts.filter(p =>
      (!searchTerm || p.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (category === 'all' || p.category === category) &&
      p.price <= priceRange
    ).length / 8
  ) || 1;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Header />

      <div className="flex flex-col lg:flex-row">
        {/* Filter Sidebar */}
        <aside
          className={`
            fixed inset-y-0 left-0 z-40 w-72 transform transition-transform duration-300 lg:translate-x-0 lg:static
            ${isFilterOpen ? 'translate-x-0' : '-translate-x-full'}
            bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-r border-white/20 dark:border-gray-700/50 shadow-2xl overflow-y-auto
          `}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-8 lg:hidden">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Filters</h2>
              <button onClick={() => setIsFilterOpen(false)}>
                <XMarkIcon className="w-6 h-6 text-gray-700 dark:text-gray-200" />
              </button>
            </div>

            {/* Mobile search */}
            <div className="lg:hidden mb-6">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-white/40 dark:bg-gray-800/40 backdrop-blur-md border border-white/30 dark:border-gray-600/50 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              />
            </div>

            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Categories</h3>
            <div className="space-y-2">
              {['all', 'laptops', 'desktops', 'monitors', 'keyboards', 'mice', 'vga', 'motherboards', 'storage', 'psu', 'cases', 'cooling'].map(cat => (
                <button
                  key={cat}
                  onClick={() => { setCategory(cat); setPage(1); }}
                  className={`w-full text-left px-4 py-2.5 rounded-xl transition-all ${
                    category === cat
                      ? 'bg-indigo-100/70 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 font-medium'
                      : 'hover:bg-indigo-50/80 dark:hover:bg-indigo-900/30 text-gray-700 dark:text-gray-200'
                  }`}
                >
                  {cat === 'all' ? 'All Categories' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Max Price</h3>
              <input
                type="range"
                min="100"
                max="4000"
                step="100"
                value={priceRange}
                onChange={(e) => { setPriceRange(Number(e.target.value)); setPage(1); }}
                className="w-full accent-indigo-600"
              />
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Up to ${priceRange}
              </div>
            </div>
          </div>
        </aside>

        {/* Mobile filter overlay */}
        {isFilterOpen && (
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 lg:hidden"
            onClick={() => setIsFilterOpen(false)}
          />
        )}

        {/* Main content */}
        <main className="flex-1 lg:ml-0 transition-all duration-300">
          <section className="py-10 md:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
                  All Products
                </h1>

                <div className="flex items-center gap-4 w-full md:w-auto">
                  <button
                    onClick={() => setIsFilterOpen(true)}
                    className="lg:hidden px-5 py-2.5 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-white/20 rounded-full text-gray-700 dark:text-gray-200 font-medium hover:bg-white/90 transition-all"
                  >
                    Filters
                  </button>

                  <div className="flex-1 md:hidden">
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full px-4 py-2.5 bg-white/40 dark:bg-gray-800/40 backdrop-blur-md border border-white/30 dark:border-gray-600/50 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                    />
                  </div>
                </div>
              </div>

              {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {Array(8).fill().map((_, i) => (
                    <div key={i} className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl rounded-2xl h-96 animate-pulse" />
                  ))}
                </div>
              ) : error ? (
                <p className="text-center text-xl text-red-600 dark:text-red-400 py-12">{error}</p>
              ) : products.length === 0 ? (
                <div className="text-center py-16">
                  <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
                    No products found matching your filters.
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setCategory('all');
                      setPriceRange(4000);
                      setPage(1);
                    }}
                    className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
                  >
                    Clear all filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="group relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg border border-white/20 dark:border-gray-700/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
                    >
                      <div className="relative aspect-4/3 overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                      </div>

                      <div className="p-5 flex flex-col grow">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 min-h-12">
                          {product.name}
                        </h3>
                        <p className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-5">
                          ${product.price}
                        </p>

                        {/* Two buttons in one line */}
                        <div className="mt-auto flex flex-col sm:flex-row gap-3">
                          <Link
                            to={`/productDetails/${product.id}`}
                            className="flex-1 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white py-3 rounded-xl font-medium text-center transition-all duration-200 transform hover:scale-105 shadow-sm"
                          >
                            View Details
                          </Link>

                          <button
                            onClick={() => {
                              // Add to cart logic here (can be context / redux later)
                              console.log(`Added to cart: ${product.name}`);
                              // Optional: show toast notification
                            }}
                            className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 shadow-md"
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center mt-12 gap-4 flex-wrap">
                  <button
                    onClick={() => setPage(p => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="px-6 py-3 bg-white white:bg-gray-800/40  backdrop-blur-md border border-white rounded-full disabled:opacity-50 hover:bg-white/30 transition-all disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>

                  <span className="text-lg font-medium text-gray-900 dark:text-white px-2">
                    Page {page} of {totalPages}
                  </span>

                  <button
                    onClick={() => setPage(p => p + 1)}
                    disabled={page >= totalPages}
                    className="px-6 py-3 bg-white white:bg-gray-800/40 backdrop-blur-md border border-white rounded-full disabled:opacity-50 hover:bg-white/30 transition-all disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default ProductsPage;