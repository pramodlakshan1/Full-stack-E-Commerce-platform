// src/pages/ProductDetailPage.jsx
// Detailed view of a single product
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        // Assume Spring Boot endpoint: /api/products/{id}
        const response = await axios.get(`/api/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        setError('Failed to load product');
      }
      setLoading(false);
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    // Assume POST to /api/cart with { productId: id, quantity }
    console.log('Adding to cart:', { id, quantity });
    // Use axios.post('/api/cart', { productId: id, quantity });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : error ? (
            <p className="text-center text-red-600">{error}</p>
          ) : product ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <img src={product.imageUrl || 'https://via.placeholder.com/600x400'} alt={product.name} className="w-full h-auto rounded-xl shadow-md" />
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
                <p className="text-indigo-600 font-bold text-2xl mb-4">${product.price}</p>
                <p className="text-gray-700 mb-6">{product.description || 'Detailed description here...'}</p>
                
                {/* Quantity */}
                <div className="flex items-center mb-6">
                  <label className="mr-4 text-gray-700">Quantity:</label>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                    className="w-20 px-2 py-1 border border-gray-300 rounded-md"
                  />
                </div>
                
                <button
                  onClick={handleAddToCart}
                  className="w-full md:w-auto bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-all"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ) : (
            <p className="text-center">Product not found</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;