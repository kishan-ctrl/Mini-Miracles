import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialSlider({ items, intervalMs = 6000 }) {
  const [index, setIndex] = useState(0);

  const total = items.length;

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  useEffect(() => {
    if (total <= 1) return;
    const t = window.setInterval(next, intervalMs);
    return () => window.clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total, intervalMs]);

  if (total === 0) return null;

  return (
    <section aria-label="Testimonials">
      <div className="flex items-center justify-between gap-4 mb-4">
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">Testimonials</h2>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            className="h-10 w-10 inline-flex items-center justify-center rounded-full bg-slate-900 text-white
                       hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={next}
            className="h-10 w-10 inline-flex items-center justify-center rounded-full bg-slate-900 text-white
                       hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((t) => (
            <div key={t.id} className="min-w-full">
              <TestimonialCard item={t} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2" role="tablist" aria-label="Testimonial dots">
        {items.map((_, i) => {
          const active = i === index;
          return (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={[
                "h-2.5 rounded-full transition",
                active ? "w-8 bg-pink-600" : "w-2.5 bg-slate-300 hover:bg-slate-400",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2",
              ].join(" ")}
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={active ? "true" : "false"}
            />
          );
        })}
      </div>
    </section>
  );
}

TestimonialSlider.propTypes = {
  items: PropTypes.array.isRequired,
  intervalMs: PropTypes.number,
};
