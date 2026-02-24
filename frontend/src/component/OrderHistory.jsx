// src/pages/OrderHistoryPage.jsx
// View past orders
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

const OrderHistoryPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      try {
        // Assume Spring Boot endpoint: /api/orders (requires auth)
        const response = await axios.get('/api/orders');
        setOrders(response.data || []);
      } catch (err) {
        setError('Failed to load orders');
      }
      setLoading(false);
    };
    fetchOrders();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Order History</h1>
          
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : error ? (
            <p className="text-center text-red-600">{error}</p>
          ) : orders.length === 0 ? (
            <p className="text-center">No orders yet</p>
          ) : (
            <div className="space-y-6">
              {orders.map((order) => (
                <div key={order.id} className="bg-gray-50 p-6 rounded-xl shadow-sm">
                  <h2 className="text-xl font-semibold mb-2">Order #{order.id}</h2>
                  <p className="text-gray-700 mb-2">Date: {new Date(order.date).toLocaleDateString()}</p>
                  <p className="text-indigo-600 font-bold mb-4">Total: ${order.total.toFixed(2)}</p>
                  <div className="space-y-2">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex justify-between">
                        <span>{item.name} x {item.quantity}</span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default OrderHistoryPage;