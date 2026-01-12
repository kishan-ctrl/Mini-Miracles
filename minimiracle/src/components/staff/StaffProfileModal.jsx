import React, { useEffect } from "react";
import { X, Mail, Phone, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

const StaffProfileModal = ({ open, member, onClose }) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open || !member) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <button
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-label="Close overlay"
      />
      <motion.div
        initial={{ opacity: 0, y: 14, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.25 }}
        className="relative z-10 w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-xl my-8"
        role="dialog"
        aria-modal="true"
        aria-label="Staff profile"
      >
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Left column: Portrait image with info overlay */}
          <div className="relative md:col-span-1">
            <div className="h-full min-h-[400px] md:h-full">
              <img
                src={member.image}
                alt={member.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 rounded-xl bg-white/90 p-2 hover:bg-white transition"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>

              {/* Name and role overlay on image */}
              <div className="absolute bottom-6 left-5 right-5">
                <p className="text-white text-2xl font-extrabold">
                  {member.name}
                </p>
                <p className="text-white/90 text-base mt-1">{member.role}</p>

                {/* Category badge */}
                <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2">
                  <BadgeCheck
                    className="h-4 w-4 text-white"
                    aria-hidden="true"
                  />
                  <span className="text-white text-sm font-semibold">
                    {member.category}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: Details */}
          <div className="md:col-span-2 p-6 md:p-8">
            <div className="space-y-6">
              {/* Bio */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  About
                </h3>
                <p className="text-gray-700 leading-relaxed">{member.bio}</p>
              </div>

              {/* Highlights */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Expertise
                </h3>
                <div className="flex flex-wrap gap-2">
                  {member.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-full bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-700"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact info with better styling */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4"></div>
              </div>

              {/* Quick action buttons */}
              <div className="flex flex-wrap gap-3 pt-4">
                <button
                  onClick={onClose}
                  className="flex-1 rounded-xl border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default StaffProfileModal;
