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

  if (!open) return null;

  const current = items[index];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
      onMouseDown={onClose}
    >
      <div className="absolute inset-0 flex items-center justify-center p-4" onMouseDown={(e) => e.stopPropagation()}>
        <div className="relative w-full max-w-4xl rounded-2xl bg-white overflow-hidden shadow-xl">
          <div className="flex items-center justify-between p-3 border-b">
            <p className="text-sm font-semibold text-slate-800 line-clamp-1">{current?.alt}</p>

            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500"
              aria-label="Close lightbox"
              type="button"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Placeholder image area (replace later with real <img>) */}
          <div
            className="w-full bg-slate-100 flex items-center justify-center aspect-[16/10]"
            data-image-id={current?.imageId}
            role="img"
            aria-label={current?.alt || "Selected photo"}
          >
            <span className="text-xs text-slate-500">Lightbox Placeholder</span>
          </div>

          <div className="flex items-center justify-between p-3 border-t">
            <button
              type="button"
              onClick={onPrev}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white
                         hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-4 w-4" />
              Prev
            </button>

            <button
              type="button"
              onClick={onNext}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white
                         hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500"
              aria-label="Next image"
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
      imageId: PropTypes.string.isRequired,
    })
  ).isRequired,
  index: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};
