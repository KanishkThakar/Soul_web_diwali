// src/components/AISoulMate.tsx

import React from 'react';
import aiBuddyAvatar from '../images/robo.png'; 
import userAvatar from '../images/user.png';     

const chatData = [
  { isAI: true, name: "AI Soul Buddy", message: "Hii Bro! How are you? Let's know about you; Let's start with your Name..." },
  { isAI: false, name: "You", message: "Hii Bro! I'm fine. My name is Dhruv Paleja. AI Buddy can I keep name for you? How is Tom or Jerry which you will the most?" },
  { isAI: true, name: "AI Soul Buddy", message: "Tom sounds good! You are my Jerry. The unbreakable friendship. Hehehe..." },
  { isAI: false, name: "You", "message": "Ha ha ha ha! Please help me Tom from my stress. I can't able to focus on studies for the pressure of the exams." },
  { isAI: true, name: "AI Soul Buddy", message: "Chill Bro! when Tom is here no stress, I'll help you to focus. Tell everything you are facing now." },
];

const AISoulMate: React.FC = () => {
  return (
    <section className="bg-[#F96D00] py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
       
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
            Get your AI Soul Mate to talk
          </h2>
          <p className="text-base text-white opacity-80">
            Make this AI Soul Mate your Best Friend.
          </p>
        </div>

       
        <div className="
          frosted-card                           
          p-6 md:p-12 rounded-[40px] shadow-2xl 
          relative overflow-hidden             
        ">
          
          {/* Curved Orange Header */}
          <div className="absolute top-0 left-0 w-full h-10 md:h-12 bg-[#F96D00] rounded-t-[40px] z-10"></div>
          
          {/* Chat Transcript Area */}
          <div className="relative z-20 pt-8 md:pt-10 pb-4"> 
            {chatData.map((chat, index) => (
              <div className="flex items-start my-6" key={index}>
                {/* Avatar (AI: Left) */}
                <div className={`flex-shrink-0 ${chat.isAI ? 'mr-4' : 'hidden'}`}>
                  {/* 🛑 CHANGE: Using your imported AI avatar image */}
                  <img 
                    src={aiBuddyAvatar} 
                    alt="AI Soul Buddy Avatar" 
                    className="w-10 h-10 rounded-full object-cover border border-gray-300" 
                  />
                  {/* Removed the extra avatar background div as img itself will be rounded */}
                </div>
                
                {/* Message Bubble */}
                <div className={`
                    py-3 px-5 rounded-3xl shadow-sm max-w-lg 
                    ${chat.isAI 
                      ? 'bg-gray-100 text-gray-800 rounded-tl-lg' 
                      : 'bg-[#F96D00] text-white rounded-tr-lg ml-auto'
                    }
                `}>
                  <span className={`
                    font-bold text-sm block mb-1
                    ${chat.isAI ? 'text-gray-700' : 'text-white'}
                  `}>
                    {chat.name}
                  </span>
                  <p className="text-sm">
                    {chat.message}
                  </p>
                </div>

               
                <div className={`flex-shrink-0 ${chat.isAI ? 'hidden' : 'ml-4'}`}>
                
                  <img 
                    src={userAvatar} 
                    alt="User Avatar" 
                    className="w-10 h-10 rounded-full object-cover border border-gray-300" 
                  />
                 
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AISoulMate;