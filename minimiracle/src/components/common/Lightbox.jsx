// Lightbox.jsx
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Lightbox({ open, items, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose, onPrev, onNext]);

  if (!open || !items || items.length === 0) return null;

  const current = items[index];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
      onClick={onClose}
    >
      <div 
        className="absolute inset-0 flex items-center justify-center p-4" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full max-w-4xl rounded-2xl bg-white overflow-hidden shadow-xl">
          {/* Header with title and close button */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex-1">
              <p className="text-sm font-semibold text-slate-800 line-clamp-1">
                {current?.alt || "Image"}
              </p>
              <p className="text-xs text-slate-500 mt-1">
                {index + 1} / {items.length}
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500"
              aria-label="Close lightbox"
              type="button"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Image container */}
          <div className="relative w-full bg-white">
            <div className="flex items-center justify-center min-h-[60vh] max-h-[70vh]">
              {current && (
                <img
                  src={current.imagePath}
                  alt={current.alt || "Gallery image"}
                  className="max-w-full max-h-full object-contain"
                  loading="eager"
                />
              )}
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center justify-between p-4 border-t">
            <button
              type="button"
              onClick={onPrev}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white
                         hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500
                         disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous image"
              disabled={items.length <= 1}
            >
              <ChevronLeft className="h-4 w-4" />
              Prev
            </button>

            <button
              type="button"
              onClick={onNext}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white
                         hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500
                         disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next image"
              disabled={items.length <= 1}
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

Lightbox.propTypes = {
  open: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      alt: PropTypes.string.isRequired,
      imagePath: PropTypes.string.isRequired,
      aspect: PropTypes.oneOf(["square", "landscape", "portrait"]),
    })
  ).isRequired,
  index: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};