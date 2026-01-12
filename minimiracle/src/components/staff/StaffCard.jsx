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
      <div className="relative">
        <img
          src={member.image}
          alt={member.name}
          className="w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3">
          <p className="text-white text-sm font-extrabold">{member.name}</p>
          <p className="text-white/85 text-xs">{member.role}</p>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-2 rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-700">
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

        <p className="mt-4 text-sm text-gray-600 leading-relaxed line-clamp-3">
          {member.bio}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {member.highlights.slice(0, 2).map((h) => (
            <span
              key={h}
              className="rounded-full bg-gray-50 px-3 py-1 text-xs text-gray-600 ring-1 ring-gray-100"
            >
              {h}
            </span>
          ))}
        </div>

        <div className="mt-5 h-px bg-gray-100" />

        <div className="mt-4 flex items-center justify-between text-xs text-gray-600">
          <a
            href={`mailto:${member.contact.email}`}
            className="inline-flex items-center gap-2 hover:text-purple-700 transition"
            aria-label={`Email ${member.name}`}
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Email
          </a>
          <a
            href={`tel:${member.contact.phone.replace(/\s+/g, "")}`}
            className="inline-flex items-center gap-2 hover:text-purple-700 transition"
            aria-label={`Call ${member.name}`}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default StaffCard;
