import React from 'react';

const Home = () => {
  return (
    <div className="relative min-h-screen bg-purple-700 overflow-hidden">
      {/* Background "PRE SCHOOL" text */}
<div className="absolute inset-0 flex items-start justify-start pt-32 pl-8 opacity-10 pointer-events-none">
  <h1 className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-black text-white leading-none tracking-tight whitespace-nowrap">
    PRE SCHOOL
  </h1>
</div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Section - Text Content */}
          <div className="space-y-8">
            <h1 className="text-7xl md:text-8xl font-bold text-white leading-tight">
              Admission
            </h1>
            
            <div className="flex items-baseline gap-3">
              <span className="text-yellow-400 text-xl font-semibold uppercase">OPENFOR</span>
              <span className="text-yellow-400 text-5xl font-bold">2025-2026</span>
            </div>
            
            <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-10 py-4 rounded-lg text-lg transition-colors duration-300 shadow-lg">
              Enroll Now
            </button>

            {/* Decorative Globe Icon */}
            <div className="pt-8">
              <div className="w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center shadow-xl">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Right Section - Image with Circular Frame */}
          <div className="relative flex items-center justify-center">
            {/* Colorful Circular Background */}
            <div className="relative w-[500px] h-[500px]">
              {/* Circle segments */}
              <div className="absolute inset-0">
                
              </div>

              {/* Children Image Container */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[550px] h-[550px] rounded-full overflow-hidden flex items-center justify-center">
                  <img 
                    src="/images/Girl and Boy.png" 
                    alt="Happy students jumping"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Rocket Icon */}
              <div className="absolute -right-8 top-1/3 animate-bounce">
                <div className="bg-white p-3 rounded-full shadow-xl">
                  <svg className="w-10 h-10 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.5c-1.7 0-3 1.3-3 3v3.4c-1.6.4-3 1.6-3 3.1v2c0 .6.4 1 1 1s1-.4 1-1v-2c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v2c0 .6.4 1 1 1s1-.4 1-1v-2c0-1.5-1.4-2.7-3-3.1V5.5c0-1.7-1.3-3-3-3zm0 2c.6 0 1 .4 1 1v2h-2v-2c0-.6.4-1 1-1zM9 15c-1.1 0-2 .9-2 2v4c0 .6.4 1 1 1s1-.4 1-1v-4c0-.1 0-.1 0 0v4c0 .6.4 1 1 1s1-.4 1-1v-4c0-1.1-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2v4c0 .6.4 1 1 1s1-.4 1-1v-4h0v4c0 .6.4 1 1 1s1-.4 1-1v-4c0-1.1-.9-2-2-2z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cloud Footer */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 200" className="w-full h-32 md:h-40" preserveAspectRatio="none">
          <path 
            fill="white" 
            d="M0,96L48,106.7C96,117,192,139,288,138.7C384,139,480,117,576,112C672,107,768,117,864,128C960,139,1056,149,1152,144C1248,139,1344,117,1392,106.7L1440,96L1440,200L1392,200C1344,200,1248,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200L0,200Z"
          />
        </svg>
        
        <div className="absolute bottom-12 right-32">
          <span className="text-pink-500 text-2xl">★</span>
        </div>
      </div>
    </div>
  );
};

export default Home;