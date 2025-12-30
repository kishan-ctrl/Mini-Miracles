import React from "react";
import PropTypes from "prop-types";
import GalleryItem from "./GalleryItem";

export default function GalleryGrid({ items, onOpen, category, isLoading }) {
  // Skeleton loading
  if (isLoading) {
    return (
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="mb-4 break-inside-avoid">
            <div className="w-full aspect-[4/3] rounded-2xl bg-slate-200 animate-pulse" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <section aria-label="Photo gallery grid">
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
        {items.map((item, idx) => (
          <div key={item.id} className="mb-4 break-inside-avoid">
            <GalleryItem item={item} onOpen={() => onOpen(idx)} category={category} />
          </div>
        ))}
      </div>
    </section>
  );
}

GalleryGrid.propTypes = {
  items: PropTypes.array.isRequired,
  onOpen: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
};
