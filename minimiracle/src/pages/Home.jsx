import React from "react";
import { pageContent } from "../mock/mockdata";
import SectionHeader from "../components/common/SectionHeader";
import TextBlock from "../components/common/TextBlock";
import FeatureCard from "../components/cards/FeatureCard";
import CourseCard from "../components/cards/CourseCard";
import ActivityCard from "../components/cards/ActivityCard";
import GirlAndBoy from "../../public/images/Girl and Boy.png"

const Home = () => {
  const handleViewAll = (label) => {
    // keep it clean: no console logs (per requirement)
    // you can connect this to routing later
    void label;
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* HEADER / HERO */}
      <section
        className="relative overflow-hidden bg-purple-700 text-white"
        aria-label="Admission hero section"
      >
        {/* background text */}
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
            <p className="text-[4rem] sm:text-[6rem] lg:text-[9rem] font-black leading-none tracking-tight">
              PRE SCHOOL
            </p>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                {pageContent.hero.title}
              </h1>

              {/* Badge */}
              <div
                className="inline-flex items-center gap-3 rounded-full bg-white/15 px-4 py-2 backdrop-blur
                           border border-white/20"
                aria-label="Admission open badge"
              >
                <span className="text-sm font-semibold text-yellow-300">
                  {pageContent.hero.badgePrefix}
                </span>
                <span className="text-lg font-black">
                  {pageContent.hero.badgeYear}
                </span>
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  className="rounded-full bg-teal-400 text-slate-900 font-bold px-6 py-3
                             hover:bg-teal-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-purple-700
                             hover:cursor-pointer transition"
                  aria-label="Enroll now"
                >
                  {pageContent.hero.ctaPrimary}
                </button>

                <button
                  type="button"
                  className="rounded-full bg-white/15 border border-white/25 px-6 py-3 font-semibold
                             hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-purple-700
                             hover:cursor-pointer transition"
                  aria-label="View admission details"
                >
                  View Details
                </button>
              </div>
            </div>

            {/* Right: hero image placeholder */}
            <div className="lg:justify-self-end w-full max-w-xl">
              <div
                className="w-full aspect-[4/3] rounded-3xl bg-white/10 border border-white/20
                           flex items-center justify-center"
                data-image-id="hero-kids"
                role="img"
                aria-label="Hero kids image placeholder"
              >
                <span className="text-xs text-white/80">
                <img src={GirlAndBoy} alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ANNOUNCEMENT + WHY CHOOSE US */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Announcement */}
          <div className="space-y-5">
            <SectionHeader
              title="Announcement"
              actionLabel="View All"
              onAction={() => handleViewAll("announcement")}
              align="left"
            />

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
              <TextBlock text={pageContent.announcement[0]} />
              <TextBlock text={pageContent.announcement[1]} />
              <TextBlock text={pageContent.announcement[2]} />
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="space-y-5">
            <SectionHeader
              title="Why Choose us"
              actionLabel="View All"
              onAction={() => handleViewAll("features")}
              align="left"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FeatureCard
                icon={pageContent.features[0].icon}
                title={pageContent.features[0].title}
                desc={pageContent.features[0].desc}
              />
              <FeatureCard
                icon={pageContent.features[1].icon}
                title={pageContent.features[1].title}
                desc={pageContent.features[1].desc}
              />
              <FeatureCard
                icon={pageContent.features[2].icon}
                title={pageContent.features[2].title}
                desc={pageContent.features[2].desc}
              />
              <FeatureCard
                icon={pageContent.features[3].icon}
                title={pageContent.features[3].title}
                desc={pageContent.features[3].desc}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED COURSES */}
      <section className="bg-indigo-700 text-white" aria-label="Featured courses">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold">
                Featured Courses
              </h2>

              <button
                type="button"
                onClick={() => handleViewAll("courses")}
                className="rounded-full bg-white text-indigo-700 font-bold px-5 py-2
                           hover:bg-indigo-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-700
                           hover:cursor-pointer transition"
                aria-label="View all courses"
              >
                View All
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <CourseCard
  title={pageContent.courses[0].title}
  desc={pageContent.courses[0].desc}
  img={pageContent.courses[0].img}
  imgAlt={pageContent.courses[0].imgAlt}
/>

              <CourseCard
  title={pageContent.courses[1].title}
  desc={pageContent.courses[1].desc}
  img={pageContent.courses[1].img}
  imgAlt={pageContent.courses[1].imgAlt}
/>
              <CourseCard
  title={pageContent.courses[2].title}
  desc={pageContent.courses[2].desc}
  img={pageContent.courses[2].img}
  imgAlt={pageContent.courses[2].imgAlt}
/>
             <CourseCard
  title={pageContent.courses[3].title}
  desc={pageContent.courses[3].desc}
  img={pageContent.courses[3].img}
  imgAlt={pageContent.courses[3].imgAlt}
/>
            </div>
          </div>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" aria-label="Activities">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left text */}
          <div className="space-y-5">
            <SectionHeader
              title={pageContent.activities.header}
              align="left"
            />

            <ul className="space-y-2 text-slate-700">
              {pageContent.activities.descriptions.map((d, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-indigo-600 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm sm:text-base leading-relaxed">{d}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => handleViewAll("activities")}
              className="rounded-full bg-indigo-600 text-white font-bold px-6 py-3
                         hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2
                         hover:cursor-pointer transition"
              aria-label="View all activities"
            >
              {pageContent.activities.viewAll}
            </button>
          </div>

          {/* Right cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pageContent.activities.cards.map((card, idx) => (
              <ActivityCard
    key={idx}
    title={card.title}
    img={card.img}
    imgAlt={card.imgAlt}
    imgId={typeof card.img === "string" ? card.img : `activity-${idx + 1}`}
  />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-200" aria-label="Enrollment call to action">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p className="text-slate-900 font-extrabold text-lg sm:text-xl">
              {pageContent.cta.text}
            </p>

            <button
              type="button"
              className="rounded-full bg-slate-900 text-white font-bold px-7 py-3
                         hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-700 focus-visible:ring-offset-2
                         hover:cursor-pointer transition"
              aria-label="Enroll now from CTA section"
            >
              {pageContent.cta.button}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
