// src/components/Sidebar.tsx

import React from 'react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  "About Us", 
  "Contact Us", 
  "Testimonials", 
  "Register", 
  "Invest Us", 
  "Join Us"
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-800 text-2xl">
            &times;
          </button>

          <p className="text-sm text-center text-gray-500 mt-2 mb-8">
            <span className="text-red-500 font-bold">Coming Soon ....</span>
          </p>

          <nav className="space-y-4">
            {menuItems.map((item) => (
              <a 
                key={item} 
                href="#" 
                className="block text-gray-700 text-lg font-semibold hover:text-[#F96D00] transition-colors"
                onClick={onClose} 
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;