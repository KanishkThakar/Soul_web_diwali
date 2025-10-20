// src/components/button.tsx

import React from 'react';


type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  text: string;
};


export const Button = ({ text, className, ...props }: ButtonProps) => {
  const baseClasses = `
    bg-transparent 
    border 
    border-white 
    text-white 
    font-semibold 
    py-3 
    px-8 
    rounded-full 
    hover:bg-white 
    hover:text-[#F96D00] 
    transition 
    duration-300 
    mt-6 
    cursor-pointer
    focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#F96D00]
  `;

  return (
    <button 
      className={`${baseClasses} ${className || ''}`} 
      {...props} 
    >
      {text}
    </button>
  );
};
