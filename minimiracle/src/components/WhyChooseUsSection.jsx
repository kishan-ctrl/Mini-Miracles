import React from "react";
import WhyChooseCard from "./WhyChooseCard";

export default function WhyChooseUsSection({ data }) {
  return (
    <section className="w-full">
      <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
        {data.heading}
      </h2>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 max-w-md">
        {data.items.map((item) => (
          <WhyChooseCard key={item.id} item={item} />
        ))}
      </div>

      <button className="mt-10 px-8 py-3 rounded-full bg-indigo-700 text-white font-semibold shadow hover:bg-indigo-800 transition">
        {data.buttonText}
      </button>
    </section>
  );
}
