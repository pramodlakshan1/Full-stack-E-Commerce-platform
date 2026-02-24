// src/pages/LandingPage.jsx
import React from 'react';
import Header from '../component/Header';
import Hero from '../component/Hero';
import FeaturedProducts from '../component/FeaturedProduct';
import Categories from '../component/Categories';
import DealsSection from '../component/DealsSection';
import Testimonials from '../component/Testimonials';
import Footer from '../component/Footer';
import Sidebar from '../component/SideBar';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 font-sans antialiased">
      {/* Header & Hero - always full-width, no sidebar interference */}
      <Header />
      

  

        {/* Main content - pushed right on desktop (lg:ml-72 matches your sidebar w-72) */}
        <main className="flex-1 lg:ml-0 transition-all duration-300 ease-in-out">
            <Hero />
            <FeaturedProducts />
            <Categories />
            <DealsSection />
            <Testimonials />
        </main>


      <Footer />
    </div>
  );
};

export default LandingPage;