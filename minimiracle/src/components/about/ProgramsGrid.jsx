import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Palette, Trophy, Sparkles, Heart, Monitor } from "lucide-react";

const iconMap = {
  book: BookOpen,
  palette: Palette,
  trophy: Trophy,
  sparkles: Sparkles,
  heart: Heart,
  monitor: Monitor,
};

const ProgramsGrid = ({ programs }) => {
  return (
    <section className="bg-purple-500">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-extrabold text-white-50">{programs.title}</h2>
          <p className="mt-2 max-w-2xl text-sm text-white-600">{programs.subtitle}</p>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programs.items.map((item, idx) => {
            const Icon = iconMap[item.icon] || Sparkles;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.03 }}
                className="group rounded-3xl bg-white/50 p-6 ring-1 ring-gray-100 shadow-sm
           hover:-translate-y-1 hover:shadow-md transition"
              >
                <div className="flex items-start gap-3">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-50">
                    <Icon className="h-5 w-5 text-purple-700" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-gray font-bold text-gray-900">{item.title}</h3>
                    <p className="mt-2 text-sm text-white-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-5 h-px w-full bg-gray-100" />
                <p className="mt-4 text-xs text-white-500">
                  Fun + Learning + Confidence
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgramsGrid;
