// src/components/Header.tsx

import React from 'react';
import SoulYatriLogo from '../images/SoulYatriLogo.png';

interface HeaderProps {
  onMenuClick: () => void; 
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 p-6 md:p-10">
      <div className="max-w-7xl mx-auto flex justify-between items-start">
        
        <div className="flex items-center space-x-4">
          <div
            className="bg-white px-4 py-1 rounded-lg shadow-md" 
            style={{ paddingRight: '10px' }} 
          >
            <div className="flex flex-col items-start">
              <div className="flex items-center space-x-2">
                <img
                  src={SoulYatriLogo}
                  alt="Soul Yatri Logo"
                  className="h-5 md:h-7"
                />
              </div>
            </div>
            <div className="w-16 h-[2px] bg-white mt-1"></div>
          </div>

          <div className="text-white text-base font-semibold animate-blink hidden sm:block">
             Coming soon............
          </div>
        </div>

        <div className="flex items-center space-x-2 cursor-pointer">
          <button 
            className="menu-icon text-white z-10 px-3 py-2 text-xl font-bold"
            onClick={onMenuClick} 
          >
            MENU &nbsp;&#8801; 
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;