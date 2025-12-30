import React from "react";
import PropTypes from "prop-types";

const FeatureCard = React.memo(function FeatureCard({ icon, title, desc }) {
  return (
    <article
      className="group rounded-2xl bg-white p-5 border border-slate-200 shadow-sm
                 hover:-translate-y-1 hover:shadow-md transition-transform"
      aria-label={`Feature: ${title}`}
    >
      <div className="flex items-start gap-4">
        <div
          className="h-12 w-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-2xl"
          aria-hidden="true"
        >
          {icon}
        </div>

        <div className="min-w-0">
          <h3 className="font-bold text-slate-900 text-base sm:text-lg">
            {title}
          </h3>
          <p className="mt-1 text-sm text-slate-600 leading-relaxed">{desc}</p>
        </div>
      </div>
    </article>
  );
});

FeatureCard.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default FeatureCard;
