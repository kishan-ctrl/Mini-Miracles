import React, { useEffect } from "react";
import { X, Mail, Phone } from "lucide-react";
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-label="Close overlay"
      />
      <motion.div
        initial={{ opacity: 0, y: 14, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.25 }}
        className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-xl"
        role="dialog"
        aria-modal="true"
        aria-label="Staff profile"
      >
        <div className="relative h-100">
          <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-xl bg-white/90 p-2 hover:bg-white transition"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>

          <div className="absolute bottom-4 left-5 right-5">
            <p className="text-white text-xl font-extrabold">{member.name}</p>
            <p className="text-white/85 text-sm">{member.role}</p>
          </div>
        </div>

        <div className="p-6">
          <p className="text-sm text-gray-700 leading-relaxed">{member.bio}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {member.highlights.map((h) => (
              <span key={h} className="rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-700">
                {h}
              </span>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <a
              href={`mailto:${member.contact.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-800 ring-1 ring-gray-100 hover:bg-gray-100 transition"
            >
              <Mail className="h-5 w-5 text-purple-700" aria-hidden="true" />
              {member.contact.email}
            </a>

            <a
              href={`tel:${member.contact.phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-purple-700 px-4 py-3 text-sm font-semibold text-white hover:bg-purple-800 transition"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {member.contact.phone}
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default StaffProfileModal;
