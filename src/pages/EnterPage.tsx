// src/pages/EnterPage.tsx

import React from "react";
import { useNavigate } from "react-router-dom";
import SoulYatriLogo from '../images/SoulYatriLogo.png'; 

const EnterPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="w-screen h-screen flex flex-col justify-center items-center relative overflow-hidden animated-gradient-bg"
    >
      
      <h1 className="text-white text-3xl md:text-5xl font-bold z-10 text-center">
        ENTER TO EXPERIENCE 
      </h1>
      
      <img
        src={SoulYatriLogo}
        alt="Soul Yatri Logo"
        className="z-10 w-48 md:w-64 my-6 p-2 bg-white rounded-lg shadow-lg"
      />

      <button
        onClick={() => navigate("/landing")}
        className="mt-10 px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 z-10 transition duration-150 ease-in-out"
      >
        ENTER
      </button>
    </div>
  );
};

export default EnterPage;