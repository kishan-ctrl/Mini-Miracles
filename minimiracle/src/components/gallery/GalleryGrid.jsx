import React from "react";
import PropTypes from "prop-types";
import GalleryItem from "./GalleryItem";

export default function GalleryGrid({ items, onOpen, category, isLoading }) {
  // Skeleton loading
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="aspect-[4/3] rounded-2xl bg-slate-200 animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <section aria-label="Photo gallery grid">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {items.map((item, idx) => (
          <div key={item.id} className="h-fit">
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