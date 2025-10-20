// src/pages/LandingPage.tsx

import React, { useState } from 'react'; 
import Header from '../components/Header';
import { Button } from '../components/button';
import HealingArea from '../components/HealingArea'; 
import monk from '../images/monk.png'; 
import AISoulMate from '../components/AISoulMate';
import TestimonialArea from '../components/TestimonialArea';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar'; 

const LandingPage: React.FC = () => {
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [buttonText, setButtonText] = useState("Get Healed");
  const handleButtonClick = () => {
    setButtonText("we are launching soon.......");
  };

  return (
    <div className="bg-[#F96D00] relative overflow-hidden"> 
      
      <Header onMenuClick={() => setIsSidebarOpen(true)} /> 

      <div className="max-w-7xl mx-auto pt-32 pb-16 md:pt-48 md:pb-10 px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
          <div className="text-white max-w-2xl z-10">
            <p className="text-sm md:text-base mb-4 opacity-80 font-['Inter',_sans-serif]">
              Soul Yatri is your companion in healing & self-discovery.
              We blend mental health support, energy healing & psychology to nurture balance in life.
              Start healing within guided by care, science & soul.
            </p>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight my-6 font-['Inter',_sans-serif]">
              Begin Your Soul & Mind
              <br />
              <span className="text-white text-opacity-90">Healing Journey</span>
            </h1>
            <Button 
              text={buttonText} 
              onClick={handleButtonClick} 
            />
          </div>

          <div className="
            mt-10 md:mt-0 absolute right-0 top-[100px] md:top-[80px] md:right-10 lg:right-20 xl:right-40 
            w-[450px] h-[450px] md:w-[550px] md:h-[550px] z-0 overflow-hidden
          ">
            <img src={monk} alt="Monk Guide" className="absolute bottom-0 right-0 h-full w-auto object-cover" /> 
          </div>
        </div>
      </div>
      
      <HealingArea />
      <AISoulMate />
      <TestimonialArea />
      <Footer />
      
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />

    </div>
  );
};

export default LandingPage;