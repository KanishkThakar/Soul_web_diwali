// src/components/CircleItem.tsx (Uniform Design)

import React from 'react';

interface CircleItemProps {
  text: string;
  icon?: string; 
  isPrimary?: boolean; 
  className?: string;
}

export const CircleItem: React.FC<CircleItemProps> = ({ 
  text, 
  icon = '&#x2638;', 
  className = '', 
  ...props 
}) => {
  
  const allCirclesClasses = `
    flex-shrink-0 flex flex-col items-center justify-center 
    rounded-full 
    text-center 
    w-52 h-52 md:w-60 md:h-60 // Current, increased size
    p-4 
    shadow-[0_0_15px_rgba(255,255,255,0.7)] 
    mx-4 
    
    // Uniform Style: Transparent background, white border, white text
    bg-transparent border-2 border-white text-white 
  `;

  const iconClasses = `
    text-2xl 
    mb-1 
    text-white
  `;

  return (
    <div 
      className={`${allCirclesClasses} ${className}`} 
      {...props}
    >
      <span className={iconClasses} dangerouslySetInnerHTML={{ __html: icon }} />
      <span className="text-sm font-semibold tracking-wide">
        {text}
      </span>
    </div>
  );
};