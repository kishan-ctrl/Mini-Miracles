import React from "react";
import { motion } from "framer-motion";
import AnimatedCounter from "../common/AnimatedCounter";


const HeroVisionMission = ({ hero }) => {
  return (
    <header className="relative overflow-hidden bg-gradient-to-r from-purple-800 via-purple-700 to-indigo-700 text-white">
      {/* soft glow */}
      <div className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-pink-300/15 blur-3xl" />

      <div className="mx-auto max-w-6xl px-5 pt-14 pb-12 sm:px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-xs font-semibold ring-1 ring-white/15">
              Welcome to our school
            </p>

            <h1 className="mt-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              {hero.title}
            </h1>
            <p className="mt-3 max-w-xl text-sm text-white/80 sm:text-base">
              {hero.tagline}
            </p>

            {/* stats */}
           {/* stats */}
<div className="mt-7 grid max-w-lg grid-cols-3 gap-3">
  {hero.stats.map((s) => (
    <div
      key={s.label}
      className="rounded-2xl bg-white/10 p-3 ring-1 ring-white/15"
    >
      <p className="text-lg font-extrabold">
        <AnimatedCounter value={s.value} suffix={s.suffix} />
      </p>
      <p className="text-[11px] text-white/75">{s.label}</p>
    </div>
  ))}
</div>

          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-3xl bg-white/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl bg-white/10 ring-1 ring-white/15">
              <img
                src={hero.heroImage}
                alt="About school"
                className="h-[280px] w-full object-cover sm:h-[340px]"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>

        {/* Vision + Mission inside banner */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/15">
            <h2 className="text-3xl font-bold">{hero.visionTitle}</h2>
            <p className="mt-2 text-xl font-bold text-white/80 leading-relaxed">
              {hero.visionText}
            </p>
          </div>

          <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/15">
            <h2 className="text-3xl font-bold">{hero.missionTitle}</h2>
            <p className="mt-2 text-xl font-bold text-white/80 leading-relaxed">
              {hero.missionText}
            </p>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default HeroVisionMission;
