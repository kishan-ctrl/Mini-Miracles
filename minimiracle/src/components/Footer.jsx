import React from "react";
// If you don't have react-icons, you can install them: npm install react-icons
// Or replace these with simple emoji or SVG placeholders
import { Mail, Phone, MapPin } from "lucide-react";
import { socialLinks } from "../mock/mockdata";
import { NavLink } from "react-router-dom";




const Footer = () => {
  const quickLinks = [
  { label: "About Us", to: "/about" },
  { label: "Our Staff", to: "/staff" },
  { label: "Programs", to: "/gallery" },
  { label: "Home", to: "/" },
];

  return (
    <footer className="relative bg-purple-900 text-white mt-20 pt-12 pb-6 overflow-hidden">
     
      <div className="hidden sm:block absolute top-10 right-10 text-yellow-400 text-4xl animate-bounce delay-700 opacity-50">
        ⭐
      </div>
      <div className="hidden sm:block absolute bottom-20 left-10 text-pink-400 text-5xl animate-pulse opacity-30">
        🎈
      </div>
     
      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-8 md:mb-12">
          {/* COLUMN 1: BRANDING */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-3xl">🖐️</span>
              <h2 className="text-2xl font-black tracking-wide">
                Mini Miracle
              </h2>
            </div>
            <p className="text-purple-200 text-sm leading-relaxed">
              We provide a nurturing environment where children can explore,
              learn, and grow. Every child is a mini miracle waiting to shine!
            </p>
         
            <div className="flex gap-4 mt-4">
              {socialLinks.map(({ name, icon: Icon, url }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-yellow-400 hover:text-purple-900
                                        flex items-center justify-center transition-all duration-300
                                        transform hover:-translate-y-1"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div>
            <h3 className="text-xl font-bold mb-4 md:mb-6 text-white-300 inline-block pb-1">
              Quick Links
            </h3>
            <ul className="space-y-3 text-purple-100">
              {quickLinks.map((items) => (
                <li key={items.label}>
                  <NavLink
                    to={items.to}
                     end={items.to === "/"}   // VERY IMPORTANT for Home
                     onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="hover:text-pink-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-2 h-2 bg-green-400 rounded-full group-hover:scale-150 transition-transform"></span>
                    {items.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: CONTACT INFO */}
          <div>
            <h3 className="text-xl font-bold mb-4 md:mb-6 text-white-300 inline-block pb-1">
              Get in Touch
            </h3>
            <ul className="space-y-4 text-purple-100">
              <li className="flex items-start gap-3">
                <MapPin
                  className="mt-1 text-green-400 flex-shrink-0"
                  size={20}
                />
                <span className="text-sm md:text-base">
                  123 Rainbow Street,
                  <br />
                  Happy Valley, Kids City
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-yellow-400 flex-shrink-0" size={20} />
                <span className="text-sm md:text-base">+1 (234) 567-890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-pink-400 flex-shrink-0" size={20} />
                <span className="text-sm md:text-base">
                  hello@minimiracle.com
                </span>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: NEWSLETTER */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold mb-4 md:mb-6 text-white-300 inline-block pb-1">
              Newsletter
            </h3>
            <p className="text-sm text-purple-200 mb-4">
              Subscribe to get the latest updates and news!
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-3 rounded-full bg-purple-800 border border-purple-700 text-white placeholder-purple-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 text-sm md:text-base"
              />
              <button className="px-6 py-3 bg-teal-500 rounded-full font-bold text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition-transform text-sm md:text-base hover:bg-teal-300 hover:cursor-pointer">
                Subscribe
              </button>
            </form>
          </div>
        </div>

    
        <div className="border-t border-purple-800 pt-6 md:pt-8 mt-6 md:mt-8 text-center text-purple-300 text-xs sm:text-sm">
          <p>
            © {new Date().getFullYear()} Mini Miracle Pre-School. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
