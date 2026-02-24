// src/components/Hero.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Herobg from "../assets/herobg.jpg";



const Hero = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-black">
      {/* Background image + very dark overlay to keep black mood */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-[18s] hover:scale-110"
        style={{ backgroundImage: `url(${Herobg})` }}
      >
        {/* Very dark overlay – almost black with subtle color tint */}
        <div className="absolute inset-0 bg-linear-to-br from-black/85 via-gray-950/80 to-black/90" />
        
        {/* Very subtle neon glow accents – optional but gives cyber/tech feel */}
        <div className="absolute inset-0 bg-linear-to-t from-indigo-950/20 via-transparent to-purple-950/10 opacity-60" />
      </div>

      {/* Floating particles – neon/indigo/purple/pink on black */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.08)_0%,transparent_50%)] animate-pulse-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.09)_0%,transparent_60%)] animate-pulse-slow delay-1000" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(236,72,153,0.07)_0%,transparent_55%)] animate-pulse-slow delay-2000" />

        {/* Floating neon dots */}
        <div className="absolute w-1.5 h-1.5 bg-indigo-400/60 rounded-full top-[12%] left-[8%] animate-float-slow" />
        <div className="absolute w-1 h-1 bg-purple-400/70 rounded-full top-[38%] right-[14%] animate-float-medium delay-500" />
        <div className="absolute w-2 h-2 bg-pink-400/50 rounded-full bottom-[22%] left-[18%] animate-float-slow delay-900" />
        <div className="absolute w-1.5 h-1.5 bg-cyan-300/40 rounded-full bottom-[48%] right-[12%] animate-float-fast delay-1600" />
      </div>

      {/* Main content – optimized for dark background */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight mb-6 md:mb-10 leading-tight animate-fade-in-up text-white drop-shadow-[0_4px_30px_rgba(79,70,229,0.5)]">
          Upgrade Your <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Tech Game</span>
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl mb-10 md:mb-12 max-w-3xl mx-auto font-medium text-gray-200 animate-fade-in-up delay-200 drop-shadow-lg">
          Premium laptops • powerful desktops • must-have accessories —{" "}
          <span className="font-bold text-pink-400">unbeatable prices</span>.
        </p>

        {/* Glassmorphic CTAs – darker glass + neon hover */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 md:gap-8 animate-fade-in-up delay-300">
          <Link
            to="/producList"
            className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-black/30 backdrop-blur-xl border border-indigo-500/30 rounded-full shadow-[0_0_25px_rgba(99,102,241,0.25)] hover:bg-black/40 hover:border-indigo-400/50 hover:shadow-[0_0_40px_rgba(99,102,241,0.5)] transition-all duration-500 transform hover:scale-105"
          >
            <span className="relative z-10">Shop Now →</span>
            {/* subtle inner glow on hover */}
            <div className="absolute inset-0 rounded-full bg-linear-to-r from-indigo-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Link>

          <Link
            to="/deals"
            className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-gray-200 bg-black/20 backdrop-blur-xl border border-purple-500/20 rounded-full shadow-lg hover:bg-black/30 hover:border-purple-400/40 hover:text-white transition-all duration-500 transform hover:scale-105"
          >
            View Hot Deals →
          </Link>
        </div>

        {/* Trust signals – cleaner look on black */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-12 text-base md:text-lg text-gray-300 animate-fade-in-up delay-400">
          <div className="flex items-center gap-2">
            <span className="text-emerald-400">✓</span> Best Prices Guaranteed
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-400">✓</span> Free Shipping Over $99
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-400">✓</span> 30-Day Easy Returns
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;