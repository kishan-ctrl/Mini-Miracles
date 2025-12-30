import React from "react";

/**
 * @typedef {Object} SectionDividerProps
 * @property {string=} label
 */

const SectionDivider = React.memo(
  /**
   * @param {SectionDividerProps} props
   */
  function SectionDivider({ label }) {
    return (
      <div className="my-8 flex items-center gap-4" aria-label="Section divider">
        <div className="h-px flex-1 bg-gray-200" />
        {label ? (
          <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
            {label}
          </span>
        ) : null}
        <div className="h-px flex-1 bg-gray-200" />
      </div>
    );
  }
);

export default SectionDivider;
