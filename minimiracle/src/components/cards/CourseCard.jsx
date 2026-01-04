import React from "react";
import PropTypes from "prop-types";

const CourseCard = React.memo(function CourseCard({ title, desc, imgId,imgAlt,img }) {
  return (
    <article
      className="group rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden
                 hover:-translate-y-1 hover:shadow-md transition-transform"
      aria-label={`Course: ${title}`}
    >
      {/* 400x300 placeholder */}
      <div className="w-full aspect-[4/3] bg-slate-100 overflow-hidden">
  {img ? (
    <img
      src={img}
      alt={imgAlt}
      loading="lazy"
      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
  ) : (
    <div
      className="h-full w-full flex items-center justify-center"
      data-image-id="course-placeholder"
    >
      <span className="text-xs text-slate-500">400 × 300</span>
    </div>
  )}
</div>


      <div className="p-5">
        <h3 className="font-bold text-slate-900 text-base sm:text-lg">
          {title}
        </h3>
        <p className="mt-1 text-sm text-slate-600 leading-relaxed">{desc}</p>

        <button
          type="button"
          className="mt-4 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold
                     bg-slate-900 text-white hover:bg-slate-800
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-700 focus-visible:ring-offset-2
                     hover:cursor-pointer transition"
          aria-label={`View details for ${title}`}
        >
          View Details
        </button>
      </div>
    </article>
  );
});

CourseCard.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  imgId: PropTypes.string.isRequired,
};

export default CourseCard;
