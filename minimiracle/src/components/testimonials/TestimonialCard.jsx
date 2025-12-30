import React from "react";
import PropTypes from "prop-types";

export default function TestimonialCard({ item }) {
  return (
    <article className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200">
      <p className="text-xs font-extrabold tracking-widest text-pink-600">{item.date}</p>

      <p className="mt-3 text-slate-700 leading-relaxed">{item.text}</p>

      <div className="mt-5">
        <p className="font-bold text-slate-900">{item.author}</p>
        {item.role ? <p className="text-sm text-slate-500">{item.role}</p> : null}
      </div>
    </article>
  );
}

TestimonialCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    role: PropTypes.string,
  }).isRequired,
};
