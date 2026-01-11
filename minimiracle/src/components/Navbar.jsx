import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

   const linkClass = ({ isActive }) =>
    `text-white hover:text-[#F9D823] transition ${isActive ? "text-[#F9D823]" : ""}`;

  return (
    <nav className="bg-[#800383] px-4 sm:px-6 lg:px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img src="/images/logo.png" alt="Rainbow Preschool" className="w-10 h-10 md:w-12 md:h-12" />
          <div className="ml-2 md:ml-[10px]">
            <h1 className="text-white font-bold text-lg md:text-xl">Mini Miracle</h1>
            <p className="text-white text-xs">PRE-SCHOOL</p>
          </div>
        </div>

        {/* Desktop Navigation - Hidden on mobile */}
       <ul className="hidden md:flex gap-6 lg:gap-8 items-center">
          <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
          <li><NavLink to="/gallery" className={linkClass}>Photo Gallery</NavLink></li>
          <li><NavLink to="/staff" className={linkClass}>Staff</NavLink></li>
          <li><NavLink to="/about" className={linkClass}>About Us</NavLink></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 pt-2 pb-4 space-y-3">
          <NavLink
            to="/"
            className="block text-white hover:text-[#F9D823] transition py-2 border-b border-white/20"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/gallery"
            className="block text-white hover:text-[#F9D823] transition py-2 border-b border-white/20"
            onClick={() => setIsMenuOpen(false)}
          >
            Photo Gallery
          </NavLink>
          <NavLink
            to="/staff"
            className="block text-white hover:text-[#F9D823] transition py-2 border-b border-white/20"
            onClick={() => setIsMenuOpen(false)}
          >
            Staff
          </NavLink>
          <NavLink
            to="/about"
            className="block text-white hover:text-[#F9D823] transition py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;