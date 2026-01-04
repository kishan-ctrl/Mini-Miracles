import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

const WhatsAppButton = () => {
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const observerRef = useRef(null);

  const whatsappLink = `https://wa.me/message/APC6K67QK43IF1`;

  useEffect(() => {
    // Run only on client
    if (typeof window === "undefined") return;

    const footerEl = document.getElementById("footer");
    if (!footerEl) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observerRef.current.observe(footerEl);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-constant-glow">
      {/* Popup Message */}
      {!isFooterVisible && (
        <div className="absolute bottom-16 right-0 max-sm:hidden bg-white shadow-md rounded-lg px-3 py-2 text-gray-600 text-xs w-44 animate-fadeIn mb-2">
          💬 Need help? Chat with us on WhatsApp!
        </div>
      )}

      {/* WhatsApp Floating Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="relative flex items-center justify-center bg-green-500 text-white rounded-full p-3 md:p-4 shadow-xl transition-transform duration-300 hover:scale-110 hover:bg-green-600 animate-pulse-glow"
      >
        {/* Constant inner glow */}
        <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20"></div>

        {/* Main icon container */}
        <div className="relative z-10">
          <FaWhatsapp
            size={28}
            className="sm:w-6 sm:h-6 md:w-7 md:h-7"
            aria-hidden="true"
          />
        </div>

        {/* Outer glow ring - constant animation */}
        <div className="absolute inset-0 rounded-full border-4 border-green-300 opacity-70 animate-pulse-ring"></div>

        {/* Additional outer glow */}
        <div
          className="absolute -inset-2 rounded-full bg-green-400 opacity-20 animate-pulse-ring"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </a>
    </div>
  );
};

export default WhatsAppButton;
