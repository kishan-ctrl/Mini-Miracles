import React from "react";
import girl from "../../public/images/GIRL ICON NEAR ANNOUNCE.png"

export default function AnnouncementSection({ data }) {
  return (
    <section className="w-full">
      <div className="flex items-start gap-4">
        <img
          src={girl}
          alt="Girl icon near announce"
          className="w-16 h-16 object-contain"
        />

        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900">
          {data.title}
        </h1>
      </div>

      {/* arrows like your UI (simple mock) */}
      <div className="mt-6 flex items-center gap-3">
        <button className="w-10 h-10 rounded-full bg-pink-400 text-white flex items-center justify-center shadow">
          ‹
        </button>
        <button className="w-10 h-10 rounded-full bg-gray-300 text-gray-700 flex items-center justify-center shadow">
          ›
        </button>
      </div>

      {/* right side paragraph + button like Image 1 */}
      <div className="mt-8 flex flex-col gap-4 max-w-xl">
        <p className="text-gray-600 leading-6">{data.description}</p>

        <div>
          <button className="px-8 py-3 rounded-full bg-indigo-700 text-white font-semibold shadow hover:bg-indigo-800 transition">
            {data.buttonText}
          </button>
        </div>
      </div>
    </section>
  );
}
