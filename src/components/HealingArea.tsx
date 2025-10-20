// src/components/HealingArea.tsx

import React from 'react';
import { CircleItem } from './CircleItem'; 

const circles = [
  { text: "Meditation", icon: '&#x2638;', isPrimary: true, name: 'meditation' },
  { text: "Breathwork", icon: '&#x1F33F;', name: 'breathwork' },
  { text: "Emotional Healing", icon: '&#x1F49B;', name: 'emotional' },
  { text: "Stress Management", icon: '&#x1F338;', name: 'stress' },
  { text: "Psychology", icon: '&#x1F9E0;', name: 'psychology' },
  { text: "Anxiety Management", icon: '&#x1F6C7;', name: 'anxiety' },
  { text: "Astrology", icon: '&#x2728;', name: 'astrology' },
];

const HealingArea: React.FC = () => {
  return (
    <section className="bg-[#F96D00] pt-20 pb-20 relative">
      <div className="text-center mb-16 text-white pt-10">
        <h2 className="text-2xl md:text-3xl font-bold tracking-wider mb-2">
          Enter To The Healing Area
        </h2>
        <p className="text-sm opacity-80">
          Find the Peace your Soul & Body needs.
        </p>
      </div>

      <div className="
        w-full 
        overflow-hidden // Hide the duplicated content until it scrolls into view
        py-8 // Add vertical padding for breathing room
      ">
        <div className="flex w-max animate-scroll"> 
          
          {circles.map((circle, index) => (
            <CircleItem
              key={`set1-${circle.name}`}
              text={circle.text}
              icon={circle.icon}
              isPrimary={circle.isPrimary}
            />
          ))}

          {circles.map((circle, index) => (
            <CircleItem
              key={`set2-${circle.name}`} 
              text={circle.text}
              icon={circle.icon}
              isPrimary={circle.isPrimary}
            />
          ))}

        </div>
      </div>

    </section>
  );
};

export default HealingArea;