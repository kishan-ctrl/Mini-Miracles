import React from "react";
import PropTypes from "prop-types";

export default function StatCounter({ value, label }) {
  return (
    <section className="rounded-3xl bg-pink-600 text-white px-6 py-7 shadow-sm" aria-label="Academy statistics">
      <div className="flex items-end gap-3">
        <p className="text-5xl sm:text-6xl font-black leading-none">{value}</p>
        <p className="text-lg font-semibold pb-1">{label}</p>
      </div>
    </section>
  );
}

StatCounter.propTypes = {
  value: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};
