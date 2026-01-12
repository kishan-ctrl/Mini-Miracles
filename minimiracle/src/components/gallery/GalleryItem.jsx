import React from "react";
import PropTypes from "prop-types";
import { Expand } from "lucide-react";

const GalleryItem = React.memo(function GalleryItem({ item, onOpen, category }) {
  const aspectClass =
    item.aspect === "portrait"
      ? "aspect-[3/4]"
      : item.aspect === "square"
      ? "aspect-square"
      : "aspect-[4/3]";

  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative w-full overflow-hidden rounded-2xl bg-slate-100 shadow-sm
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2"
      aria-label={`Open photo: ${item.alt}`}
      data-category={category}
      data-image-id={item.id}
    >
      {/* Image container with fixed aspect ratio */}
      <div className={`relative ${aspectClass} overflow-hidden`}>
        <img
          src={item.imagePath}
          alt={item.alt}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Hover overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute top-3 right-3 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-xs font-semibold text-slate-900">
          <Expand className="h-4 w-4" />
          View
        </div>
      </div>
    </button>
  );
});

GalleryItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    alt: PropTypes.string.isRequired,
    aspect: PropTypes.oneOf(["square", "landscape", "portrait"]),
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
  onOpen: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
};

export default GalleryItem;