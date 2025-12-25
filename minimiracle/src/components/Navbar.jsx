import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#800383] px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/images/logo.png" alt="Rainbow Preschool" className="w-12 h-12" />
          <div className="ml-[10px]">
            <h1 className="text-white font-bold text-xl">Rainbow</h1>
            <p className="text-white text-xs">PRE-SCHOOL</p>
          </div>
        </div>
        
        <ul className="flex gap-8 items-center">
          <li><a href="/" className="text-white hover:text-[#F9D823] transition">Home</a></li>
          <li><a href="/about" className="text-white hover:text-[#F9D823] transition">About Us</a></li>
          <li><a href="/blogs" className="text-white hover:text-[#F9D823] transition">Blogs</a></li>
          <li><a href="/gallery" className="text-white hover:text-[#F9D823] transition">Photo Gallery</a></li>
          <li><a href="/events" className="text-white hover:text-[#F9D823] transition">Events</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;