// src/components/Footer.tsx

import React from 'react';

const Footer: React.FC = () => {
  const contents = ["Meditation", "Breathwork", "Emotional Healing", "Stress Management", "Anxiety Management", "Psychology", "Astrology"];
  
  const support = ["Help", "Mental Health Resources", "Astrology", "Psychological Support", "Security & Privacy"]; 
  
  const soulYatri = ["Log In", "Sign Up"];

  const contactDetails = [
      { text: "Soulyatriofficial", type: "Instagram", href: 'https://www.instagram.com/soulyatriofficial/?igsh=MWZtanNqZTNtaXhpaA%3D%3D#'},
      { text: "Soul yatri", type: "LinkedIn", href: "https://www.linkedin.com/company/soulyatri" }, 
      { text: "dhruvpaleja19@gmail.com", type: "Email", href: "mailto:dhruvpaleja19@gmail.com" },
  ];

  return (
    <footer className="bg-[#00A8A8] text-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/20 pb-10 mb-10">
          <h2 className="text-4xl font-extrabold mb-8 md:mb-0">
            Soul Yatri
          </h2>
          
          <div className="relative w-full md:w-auto md:max-w-sm">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full py-3 pl-12 pr-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-[#00A8A8]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-16 lg:gap-20">
          
          <div>
            <h3 className="text-xl font-bold mb-4">Overview on Soul Yatri</h3>
            <p className="text-sm opacity-90 leading-relaxed">
              Soul Yatri is a blend mental health support, energy healing, psychology & astrology to nurture balance in life. Start healing within guided by care, science & soul.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Our Contents</h3>
            <ul className="space-y-2 text-sm">
              {contents.map(item => (
                <li key={item}><a href="#" className="opacity-90 hover:opacity-100">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Our Support</h3>
            <ul className="space-y-2 text-sm">
              
              <li className="font-bold mb-2">Contact Us</li>
              {contactDetails.map((detail) => (
                  <li key={detail.type}>
                      <a 
                          href={detail.href} 
                          className="opacity-90 hover:opacity-100 block"
                          target="_blank" 
                          rel="noopener noreferrer"
                      >
                          {detail.text}
                          <span className="text-xs opacity-60 ml-1">({detail.type})</span>
                      </a>
                  </li>
              ))}
              
              {support.map(item => (
                <li key={item}><a href="#" className="opacity-90 hover:opacity-100">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">My Soul Yatri</h3>
            <ul className="space-y-2 text-sm">
              {soulYatri.map(item => (
                <li key={item}><a href="#" className="opacity-90 hover:opacity-100">{item}</a></li>
              ))}
            </ul>
          </div>

        </div>
        
      </div>
    </footer>
  );
};

export default Footer;