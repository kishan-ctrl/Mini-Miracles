import React from "react";
import { motion } from "framer-motion";
import { Users, CalendarDays, HandHeart } from "lucide-react";

const CommunitySection = ({ community }) => {
  const cards = [
    {
      title: "PTA & Feedback",
      icon: Users,
      desc: "Regular sessions to support student growth.",
    },
    {
      title: "School Events",
      icon: CalendarDays,
      desc: "Concerts, sports meets, and celebration days.",
    },
    {
      title: "Volunteering",
      icon: HandHeart,
      desc: "Parents can help with trips, events, and activities.",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-5 py-14 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-extrabold text-gray-900">
          {community.title}
        </h2>
        <p className="mt-2 text-sm text-gray-600">{community.subtitle}</p>
      </motion.div>

      <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="rounded-3xl bg-purple-100/60 p-6 ring-1 ring-purple-200 shadow-sm">
          <h3 className="text-base font-bold text-gray-900">
            How parents can participate
          </h3>
          <ul className="mt-4 space-y-3">
            {community.points.map((p) => (
              <li
                key={p}
                className="flex items-start gap-3 text-sm text-gray-700"
              >
                <span className="mt-2 h-2 w-2 rounded-full bg-purple-700" />
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <button
            className="mt-6 inline-flex rounded-xl bg-purple-700 px-5 py-3 text-sm font-semibold text-white
                       hover:bg-purple-800 active:scale-[0.98] transition"
          >
            {community.ctaText}
          </button>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-1">
          {cards.map(({ title, icon: Icon, desc }) => (
            <div
              key={title}
              className="rounded-3xl bg-purple-50 p-6 ring-1 ring-purple-200"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white">
                <Icon className="h-5 w-5 text-purple-700" aria-hidden="true" />
              </div>
              <h4 className="mt-4 text-sm font-bold text-gray-900">{title}</h4>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
