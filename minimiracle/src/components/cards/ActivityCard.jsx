import React from "react";
import PropTypes from "prop-types";

const ActivityCard = React.memo(function ActivityCard({ title, imgId, img, imgAlt }) {
  return (
    <article
      className="group rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden
                 hover:-translate-y-1 hover:shadow-md transition-transform"
      aria-label={`Activity: ${title}`}
    >
      <div className="w-full aspect-[3/2] bg-slate-100 overflow-hidden">
        {img ? (
          <img
            src={img}
            alt={imgAlt || `${title} activity image`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div
            className="h-full w-full flex items-center justify-center"
            data-image-id={imgId || "activity-placeholder"}
            role="img"
            aria-label={`${title} activity image placeholder`}
          >
            <span className="text-xs text-slate-500">300 × 200</span>
          </div>
        )}
      </div>

      <div className="p-3 sm:p-4">
        <h3 className="font-bold text-slate-900 text-sm sm:text-base">{title}</h3>
      </div>
    </article>
  );
});

ActivityCard.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string,
  imgAlt: PropTypes.string,
  imgId: PropTypes.string,
};

export default ActivityCard;