import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
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
            <div className="flex items-center gap-3 mb-2">
              <img
                src="/images/logo.png"
                alt="Mini Miracle Logo"
                className="w-10 h-10 object-contain"
              />
              <h2 className="text-2xl font-black tracking-wide">
                Mini Miracle
              </h2>
            </div>

            <p className="text-purple-200 text-sm leading-relaxed">
              We provide a nurturing environment where children can explore,
              learn, and grow. Every child is a mini miracle waiting to shine!
            </p>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div>
            <h3 className="text-xl font-bold mb-4 md:mb-6 text-white-300 inline-block pb-1 ml-[20px]">
              Quick Links
            </h3>
            <ul className="space-y-3 text-purple-100 ml-[20px]">
              {quickLinks.map((items) => (
                <li key={items.label}>
                  <NavLink
                    to={items.to}
                    end={items.to === "/"} // VERY IMPORTANT for Home
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="hover:text-pink-400 transition-colors flex items-center gap-2 group"
                  >
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
                  Number: 20 Pansala Road
                  <br />
                  Halton
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-yellow-400 flex-shrink-0" size={20} />
                <span className="text-sm md:text-base">+1 (224) 557-890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-pink-400 flex-shrink-0" size={20} />
                <span className="text-sm md:text-base">
                  nishiamthenadangha@gmail.com
                </span>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: SOCIAL MEDIA */}
          <div>
            <h3 className="text-xl font-bold mb-4 md:mb-6 text-white-300 inline-block pb-1">
              Follow Us
            </h3>
            <div className="space-y-6">
              {/* Social Media Icons */}
              <div className="flex gap-3">
                {/* Facebook */}
                <a
                  href="https://web.facebook.com/groups/1069615483659040/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white
                             flex items-center justify-center transition-all duration-300
                             transform hover:-translate-y-1 hover:scale-110"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@nishaanthenadarajah8103"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-12 h-12 rounded-full bg-red-600 hover:bg-red-700 text-white
                             flex items-center justify-center transition-all duration-300
                             transform hover:-translate-y-1 hover:scale-110"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/94765085575"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-12 h-12 rounded-full bg-green-600 hover:bg-green-700 text-white
                             flex items-center justify-center transition-all duration-300
                             transform hover:-translate-y-1 hover:scale-110"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.262-6.169-3.553-8.416" />
                  </svg>
                </a>

                {/* Google */}
                <a
                  href="https://g.page/r/CQJSwjNZFUMlEBM/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google Business"
                  className="w-12 h-12 rounded-full bg-white hover:bg-gray-200 text-purple-900
                             flex items-center justify-center transition-all duration-300
                             transform hover:-translate-y-1 hover:scale-110"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796 1.081-3.46 2.949-3.461.844 0 1.607.355 2.142.926.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
                  </svg>
                </a>
              </div>

            </div>
          </div>
        </div>

        <div className="border-t border-purple-800 pt-6 md:pt-8 mt-6 md:mt-8 text-center text-purple-300 text-xs sm:text-sm">
          <p>© 2026 Mini Miracle Pre-School. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
