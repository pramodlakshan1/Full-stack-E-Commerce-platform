// src/components/Testimonials.jsx
import React from 'react';

const testimonials = [
  {
    name: 'John D.',
    role: 'Gamer & Tech Enthusiast',
    text: 'Amazing selection of gaming gear and super fast delivery. Prices are unbeatable!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
  },
  {
    name: 'Sarah M.',
    role: 'Freelance Designer',
    text: 'Best place for high-quality monitors and peripherals. Customer service is top-notch.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80',
  },
  {
    name: 'Alex R.',
    role: 'PC Builder',
    text: 'Found rare motherboards and VGA cards at great prices. Will definitely shop again!',
    rating: 4,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80',
  },
  {
    name: 'Emily K.',
    role: 'Office Professional',
    text: 'Ergonomic keyboard and mouse combo changed my workday. Highly recommend!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=80',
  },
  // Add more testimonials easily here
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10 md:mb-12 text-center tracking-tight">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl p-6 md:p-8 shadow-lg border border-white/20 dark:border-gray-700/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              {/* Subtle gradient accent */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-linear-to-br from-indigo-400/20 to-purple-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Quote icon */}
              <div className="text-6xl text-indigo-200/30 dark:text-indigo-500/20 font-serif absolute top-4 left-6 opacity-50 select-none">
                “
              </div>

              <p className="text-gray-700 dark:text-gray-200 text-lg mb-6 relative z-10 leading-relaxed">
                {testimonial.text}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-indigo-400/50 shadow-md"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <span className="text-yellow-400 text-xl">
                    {'★'.repeat(testimonial.rating)}
                    {'☆'.repeat(5 - testimonial.rating)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Call to action or trust badge */}
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Join <span className="font-bold text-indigo-600 dark:text-indigo-400">2,500+</span> happy customers building their dream setups
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;