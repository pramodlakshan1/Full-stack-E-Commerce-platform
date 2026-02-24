// src/components/Categories.jsx
import React from 'react';

const categories = [
  {
    name: 'Laptops',
    image: 'https://theaureview.com/wp-content/uploads/2020/01/dims-1-e1560462630769.jpg',
  },
  {
    name: 'Desktops & PCs',
    image: 'https://xoticpc.com/cdn/shop/files/Y70UXRTSMAIN_600x600.png?v=1769110124',
  },
  {
    name: 'Monitors',
    image: 'https://wallpapers.com/images/hd/gaming-monitors-1920-x-1200-wallpaper-2mgpaxdhhyhm4n3t.jpg',
  },
  {
    name: 'Keyboards',
    image: 'https://png.pngtree.com/thumb_back/fh260/background/20230715/pngtree-d-render-of-pc-keyboard-with-rgb-lighting-and-white-backlighting-image_3863785.jpg',
  },
  {
    name: 'Mice & Pointers',
    image: 'https://i.pinimg.com/736x/0e/c8/bf/0ec8bff334de613d3b2a1f45914f2c6d.jpg',
  },
  {
    name: 'Graphics Cards (VGA)',
    image: 'https://a-static.besthdwallpaper.com/asus-rog-republic-of-gamers-geforce-rtx-graphics-card-v2-wallpaper-1920x1080-63816_48.jpg',
  },
  {
    name: 'Motherboards',
    image: 'https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2022/08/22/Best-gaming-motherboard-2022.jpg',
  },
  {
    name: 'Storage (SSD/HDD)',
    image: 'https://m.media-amazon.com/images/S/aplus-media/vc/ccb0a643-b39e-49e2-80af-a14a24acdf60.__CR0,0,1800,1350_PT0_SX600_V1___.jpg', // reuse or find better
  },
  {
    name: 'Power Supplies',
    image: 'https://dlcdnrog.asus.com/rog/media/1667344658657.webp',
  },
  {
    name: 'PC Cases',
    image: 'https://png.pngtree.com/thumb_back/fh260/background/20240610/pngtree-computer-case-isolated-image_15745951.jpg',
  },
  {
    name: 'Cooling & Fans',
    image: 'https://assets-prd.ignimgs.com/2021/10/21/razer-cooler-1634859020660.jpg',
  },
  {
    name: 'Cables & Adapters',
    image: 'https://png.pngtree.com/thumb_back/fh260/background/20230518/pngtree-hdmi-hdmi-cable-to-hdmi-image_2583723.jpg',
  },
  // Add more if needed
];

const Categories = () => {
  return (
    <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10 md:mb-12 text-center tracking-tight">
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((category) => (
            <a
              key={category.name}
              href={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              {/* Image with overlay on hover */}
              <div className="relative aspect-4/3 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110"
                />

                {/* Subtle gradient overlay + name reveal */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300" />

                <div className="absolute inset-0 flex items-end justify-center pb-6 px-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-md tracking-wide text-center">
                    {category.name}
                  </h3>
                </div>

                {/* Optional micro-interaction badge or icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-indigo-600/90 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md backdrop-blur-sm">
                    Explore
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;