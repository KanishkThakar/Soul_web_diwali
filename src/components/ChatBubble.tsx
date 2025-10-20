// src/components/ChatBubble.tsx

import React from 'react';

interface ChatBubbleProps {
  isAI: boolean;
  name: string;
  message: string;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ isAI, name, message }) => {
  const avatarSrc = isAI 
    ? '../images/robo.png' 
    : '../images/user.png';  

  return (
    <div className={`flex items-start mb-6 ${isAI ? 'justify-start' : 'justify-end'}`}>
     
      {isAI && (
        <div className="flex-shrink-0 mr-4">
         
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center border border-gray-400">
            <span className="text-xl">🤖</span>
          </div>
          <p className="text-xs text-center text-gray-500">{name}</p>
        </div>
      )}

      <div className={`max-w-xs md:max-w-md ${isAI ? 'mr-auto' : 'ml-auto text-right'}`}>
        <p className={`
          py-2 px-4 rounded-xl shadow-md 
          ${isAI 
            ? 'bg-white text-gray-800 rounded-tl-none' 
            : 'bg-[#F96D00] text-white rounded-tr-none'
          }
        `}>
          {message}
        </p>
      </div>

      {!isAI && (
        <div className="flex-shrink-0 ml-4">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center border border-gray-400">
            <span className="text-xl">👤</span>
          </div>
          <p className="text-xs text-center text-gray-500">{name}</p>
        </div>
      )}
    </div>
  );
};

export default ChatBubble;