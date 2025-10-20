// src/components/TestimonialCard.tsx

import React from 'react';

interface TestimonialCardProps {
  name: string;
  rating: number; // 1 to 5
  text: string;
}

const StarRating: React.FC<{ count: number }> = ({ count }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span 
        key={i} 
        className={i < count ? 'text-yellow-400' : 'text-gray-400 opacity-50'}
      >
        ★
      </span>
    );
  }
  return <div className="flex justify-center text-xl mb-4">{stars}</div>;
};

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, rating, text }) => {
  return (
    <div className="
      flex-shrink-0 
      w-[300px]                         
      mx-4                            
      p-8 
      bg-white text-gray-800 
      rounded-[30px] shadow-lg 
      border-2 border-[#F96D00] 
      text-center 
      min-h-[400px]
      snap-start                      
    ">
      <div className="flex items-center justify-center mb-4">
        <div className="w-10 h-10 bg-[#F96D00] rounded-full flex items-center justify-center mr-2">
          <span className="text-xl text-white">👤</span>
        </div>
        <h3 className="text-lg font-bold text-gray-900">{name}</h3>
      </div>
      
      <StarRating count={rating} /> 

      <p className="text-sm text-gray-700 leading-relaxed italic">
        "{text}"
      </p>
    </div>
  );
};