import React from "react";
import { Mail, Phone, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

const StaffCard = ({ member, onOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className="group overflow-hidden rounded-3xl bg-white ring-1 ring-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-md transition"
    >
      {/* Portrait image container with fixed aspect ratio */}
      <div className="relative pt-[125%]"> {/* 4:5 aspect ratio for portraits */}
        <div className="absolute inset-0 overflow-hidden bg-gray-100">
          <img
            src={member.image}
            alt={member.name}
            className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
          {/* Gradient overlay at bottom for text readability */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />
        </div>
        
        {/* Name and role positioned over the image */}
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-white text-lg font-extrabold drop-shadow-md">{member.name}</p>
          <p className="text-white/90 text-sm drop-shadow-md">{member.role}</p>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-purple-50 px-3 py-1.5 text-xs font-semibold text-purple-700">
            <BadgeCheck className="h-4 w-4" aria-hidden="true" />
            {member.category}
          </span>

          <button
            onClick={() => onOpen(member)}
            className="rounded-xl bg-purple-700 px-4 py-2 text-xs font-semibold text-white hover:bg-purple-800 active:scale-[0.98] transition"
          >
            View Profile
          </button>
        </div>

        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4">
          {member.bio}
        </p>

        <div className="mb-4 flex flex-wrap gap-2">
          {member.highlights.slice(0, 3).map((h) => (
            <span
              key={h}
              className="rounded-full bg-gray-50 px-3 py-1.5 text-xs text-gray-600 ring-1 ring-gray-100"
            >
              {h}
            </span>
          ))}
        </div>

        <div className="h-px bg-gray-100 mb-4" />

       
      </div>
    </motion.div>
  );
};

export default StaffCard;