// src/components/DealsSection.jsx
import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const deals = [
  {
    id: 1,
    name: 'High-Performance Gaming Laptop RTX 4070',
    originalPrice: 1499,
    dealPrice: 999,
    discount: 33,
    image: 'https://images.unsplash.com/photo-1611078489935-0cb4c2497a00?w=1200&auto=format&fit=crop&q=80',
    endsIn: '2026-03-10T23:59:59', // Change dates freely
    tag: 'Best Seller',
  },
  {
    id: 2,
    name: 'UltraWide 4K 144Hz Curved Monitor',
    originalPrice: 549,
    dealPrice: 349,
    discount: 36,
    image: 'https://images.unsplash.com/photo-1588109273901-3104a9a2e10f?w=1200&auto=format&fit=crop&q=80',
    endsIn: '2026-03-05T23:59:59',
    tag: 'Limited Stock',
  },
  {
    id: 3,
    name: 'RGB Mechanical Keyboard + Mouse Combo',
    originalPrice: 189,
    dealPrice: 99,
    discount: 48,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop&q=80',
    endsIn: '2026-03-01T23:59:59',
    tag: 'Flash Deal',
  },
  {
    id: 4,
    name: 'Wireless RGB Gaming Mouse Pro',
    originalPrice: 89,
    dealPrice: 49,
    discount: 45,
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39d7?w=1200&auto=format&fit=crop&q=80',
    endsIn: '2026-02-28T23:59:59',
    tag: 'Hot Pick',
  },
  // Add more deals here — carousel auto-handles any number
];

const DealsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState('');

  const currentDeal = deals[currentIndex];

  // Auto-rotate every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % deals.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // Countdown for current deal
  useEffect(() => {
    const end = new Date(currentDeal.endsIn).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const diff = end - now;

      if (diff <= 0) {
        setTimeLeft('Ended');
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + deals.length) % deals.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % deals.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 md:py-20 bg-linear-to-br from-indigo-950 via-purple-950 to-pink-950 text-white relative overflow-hidden">
      {/* Subtle background animation */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12)_0%,transparent_60%)] animate-pulse-slow"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-4 tracking-tight drop-shadow-2xl">
          Limited Time Flash Deals
        </h2>
        <p className="text-xl md:text-2xl text-center mb-12 opacity-90">
          Save big before they're gone! Up to <span className="font-bold text-pink-400">50% OFF</span>
        </p>

        {/* Big featured deal card */}
        <div className="relative bg-white/10 backdrop-blur-2xl rounded-3xl overflow-hidden shadow-2xl border border-white/10 transform transition-all duration-700 hover:shadow-[0_0_60px_rgba(129,140,248,0.5)]">
          <div className="md:flex items-stretch">
            {/* Left: Large image */}
            <div className="relative md:w-3/5 aspect-4/3 md:aspect-auto overflow-hidden">
              <img
                src={currentDeal.image}
                alt={currentDeal.name}
                className="w-full h-full object-cover transition-transform duration-800 scale-105 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

              {/* Tag */}
              <div className="absolute top-6 left-6 bg-indigo-600/90 backdrop-blur-sm text-white font-bold px-4 py-2 rounded-full shadow-lg text-sm md:text-base">
                {currentDeal.tag}
              </div>

              {/* Discount */}
              <div className="absolute top-6 right-6 bg-red-600/90 backdrop-blur-sm text-white font-black px-5 py-2.5 rounded-full shadow-xl text-xl md:text-2xl">
                -{currentDeal.discount}%
              </div>
            </div>

            {/* Right: Details */}
            <div className="p-8 md:p-12 flex flex-col justify-center text-center md:text-left md:w-2/5">
              <h3 className="text-2xl md:text-4xl font-bold mb-4 line-clamp-2 drop-shadow-md">
                {currentDeal.name}
              </h3>

              <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                <span className="text-4xl md:text-6xl font-extrabold text-white">
                  ${currentDeal.dealPrice}
                </span>
                <span className="text-2xl md:text-3xl text-gray-300 line-through opacity-80">
                  ${currentDeal.originalPrice}
                </span>
              </div>

              <div className="text-lg md:text-xl mb-8 bg-black/30 backdrop-blur-md inline-block px-6 py-3 rounded-xl mx-auto md:mx-0">
                Ends in: <span className="font-bold text-pink-300">{timeLeft}</span>
              </div>

              <button className="w-full md:w-auto bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-bold text-lg py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl">
                Grab Deal Now →
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center mt-10 gap-6">
          <button
            onClick={goToPrevious}
            className="p-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all"
          >
            <ChevronLeftIcon className="w-8 h-8" />
          </button>

          {/* Dots indicators */}
          <div className="flex gap-3">
            {deals.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'bg-white scale-125 shadow-lg'
                    : 'bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            className="p-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all"
          >
            <ChevronRightIcon className="w-8 h-8" />
          </button>
        </div>

        {/* View all link */}
        <div className="text-center mt-10">
          <a
            href="/deals"
            className="text-lg font-semibold text-indigo-300 hover:text-indigo-200 transition-colors underline underline-offset-4"
          >
            See All Deals →
          </a>
        </div>
      </div>
    </section>
  );
};

export default DealsSection;