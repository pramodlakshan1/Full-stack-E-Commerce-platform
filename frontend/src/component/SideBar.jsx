// src/components/Sidebar.jsx
import React, { useState } from 'react';
import { 
  XMarkIcon, 
  Bars3Icon,
  ComputerDesktopIcon,
  KeyIcon,
  CpuChipIcon,
  CircleStackIcon,     // for SSD / storage
  DevicePhoneMobileIcon, // adapt for mouse/phone accessories
  BoltIcon,             // for power supply
  ShieldCheckIcon,      // for cases / protection
  WrenchScrewdriverIcon // for tools / cables
} from '@heroicons/react/24/outline';

const categories = [
  { name: 'Keyboards', icon: KeyIcon, href: '/category/keyboards' },
  { name: 'Monitors', icon: ComputerDesktopIcon, href: '/category/monitors' },
  { name: 'Graphics Cards (VGA)', icon: CpuChipIcon, href: '/category/vga' },
  { name: 'Motherboards', icon: CircleStackIcon, href: '/category/motherboards' },
  { name: 'Mice & Pointers', icon: DevicePhoneMobileIcon, href: '/category/mice' },
  { name: 'Power Supplies', icon: BoltIcon, href: '/category/psu' },
  { name: 'PC Cases', icon: ShieldCheckIcon, href: '/category/cases' },
  { name: 'Storage (SSD/HDD)', icon: CircleStackIcon, href: '/category/storage' },
  { name: 'Cables & Adapters', icon: WrenchScrewdriverIcon, href: '/category/cables' },
  { name: 'Cooling & Fans', icon: CpuChipIcon, href: '/category/cooling' },
  // Add more categories as needed
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle button - shown only on small screens */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-white/20 dark:border-gray-700/50 shadow-lg hover:bg-white/90 transition-all"
      >
        {isOpen ? (
          <XMarkIcon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
        ) : (
          <Bars3Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
        )}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          relative inset-y-0 left-0 z-40 w-72 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-auto
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-r border-white/20 dark:border-gray-700/50 shadow-2xl overflow-y-auto
        `}
      >
        <div className="p-6">
          {/* Logo / Title */}
          <div className="flex items-center mb-10">
            <span className="text-2xl font-black bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              TechGear
            </span>
          </div>

          {/* Categories List */}
          <nav className="space-y-1">
            {categories.map((category) => (
              <a
                key={category.name}
                href={category.href}
                className="group flex items-center px-4 py-3.5 text-gray-700 dark:text-gray-200 hover:bg-indigo-50/80 dark:hover:bg-indigo-900/30 rounded-xl transition-all duration-200 hover:translate-x-1.5 hover:shadow-md"
              >
                <category.icon className="w-6 h-6 mr-4 text-indigo-500 dark:text-indigo-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors" />
                <span className="font-medium text-base">{category.name}</span>
              </a>
            ))}
          </nav>

          
        </div>
      </aside>

      {/* Overlay for mobile when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;