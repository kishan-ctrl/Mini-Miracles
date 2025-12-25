import React from "react";
import { announcementMock, whyChooseUsMock } from "../mockdata/mockData";
import AnnouncementSection from "../components/AnnouncementSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import students from "../../public/images/Students.png";
import saturn from "../../public/images/saturn.png"


const Home = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* ===================== HERO (PURPLE) ===================== */}
      <section className="relative bg-[#6A00FF]">
        {/* Watermark text */}
        <div className="pointer-events-none absolute inset-0">
          <div className="mx-auto max-w-7xl px-6">
            <div className="pt-24 md:pt-28">
              <h1 className="select-none text-white/10 font-black leading-none tracking-tight whitespace-nowrap text-[72px] sm:text-[96px] md:text-[140px] lg:text-[180px]">
                PRE SCHOOL
              </h1>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-14 md:pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* LEFT */}
            <div className="relative z-10">
              <h2 className="text-white font-extrabold leading-[0.95] text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                Admission
              </h2>

              <div className="mt-6 flex items-end gap-3">
                <span className="text-[#FFD400] font-extrabold uppercase tracking-wide text-base sm:text-lg">
                  OPENFOR
                </span>
                <span className="text-[#FFD400] font-extrabold text-3xl sm:text-4xl md:text-5xl">
                  2025-2026
                </span>
              </div>

              <div className="mt-8">
                <button className="rounded-xl bg-[#18C7B8] px-8 py-4 text-white font-semibold shadow-lg hover:brightness-95 active:brightness-90 transition">
                  Enroll Now
                </button>
              </div>

              {/* Globe icon */}
              <div className="mt-10">
                <div className="h-16 w-16 rounded-full bg-[#18C7B8] shadow-xl flex items-center justify-center">
                  <svg
                    className="h-9 w-9 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* RIGHT (Ring + kids image + rocket) */}
            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] md:w-[520px] md:h-[520px]">
               {/* Children Image Container */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[550px] h-[550px] rounded-full overflow-hidden flex items-center justify-center">
                  <img 
                    src="/images/Girl and Boy.png" 
                    alt="Happy students jumping"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

                {/* Rocket */}
                <div className="absolute -right-4 sm:-right-6 top-1/3 animate-bounce">
                  <div className="bg-white p-3 rounded-full shadow-xl">
                    <svg
                      className="w-9 h-9 sm:w-10 sm:h-10 text-[#6A00FF]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 2.5c-1.7 0-3 1.3-3 3v3.4c-1.6.4-3 1.6-3 3.1v2c0 .6.4 1 1 1s1-.4 1-1v-2c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v2c0 .6.4 1 1 1s1-.4 1-1v-2c0-1.5-1.4-2.7-3-3.1V5.5c0-1.7-1.3-3-3-3zm0 2c.6 0 1 .4 1 1v2h-2v-2c0-.6.4-1 1-1zM9 15c-1.1 0-2 .9-2 2v4c0 .6.4 1 1 1s1-.4 1-1v-4c0-.1 0-.1 0 0v4c0 .6.4 1 1 1s1-.4 1-1v-4c0-1.1-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2v4c0 .6.4 1 1 1s1-.4 1-1v-4h0v4c0 .6.4 1 1 1s1-.4 1-1v-4c0-1.1-.9-2-2-2z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cloud divider like screenshot */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 200"
            className="w-full h-24 sm:h-28 md:h-36"
            preserveAspectRatio="none"
          >
            <path
              fill="white"
              d="M0,96L48,106.7C96,117,192,139,288,138.7C384,139,480,117,576,112C672,107,768,117,864,128C960,139,1056,149,1152,144C1248,139,1344,117,1392,106.7L1440,96L1440,200L1392,200C1344,200,1248,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200L0,200Z"
            />
          </svg>
        </div>
      </section>

      {/* ===================== WHITE CONTENT SECTION ===================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* LEFT: Announcement + Why choose */}
            <div className="space-y-12">
              <AnnouncementSection data={announcementMock} />
              <WhyChooseUsSection data={whyChooseUsMock} />
            </div>

            {/* RIGHT: text + button + planet + image (like screenshot) */}
            <div className="relative">
              {/* Small confetti dots (simple) */}
              <span className="absolute -top-2 right-10 text-pink-500">•</span>
              <span className="absolute top-6 right-2 text-pink-500">•</span>
              <span className="absolute top-12 right-24 text-pink-500">•</span>

              <div className="rounded-3xl bg-white">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-md">
                  Appropriately engage diverse resources for next-generation
                  synergy. Professionally foster extensive paradigms vis-a-vis
                  multidisciplinary systems. Synergistically deploy maintainable
                  products and frictionless methodologies.
                </p>

                <div className="mt-5">
                  <button className="rounded-full bg-[#4B2BAF] px-6 py-2 text-white text-sm font-semibold shadow hover:brightness-95 active:brightness-90 transition">
                    View All
                  </button>
                </div>

                {/* Planet icon */}
                <div className="mt-8 flex justify-center lg:justify-start">
                  <img src={saturn} alt="" />
                </div>

                {/* Students image card (bottom-right feeling) */}
                <div className="mt-10 overflow-hidden rounded-[28px] bg-gray-100 shadow-sm">
                  <img
                    src={students}
                    alt="Students"
                    className="w-full h-[220px] sm:h-[260px] md:h-[320px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
