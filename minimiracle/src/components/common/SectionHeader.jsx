import React from "react";
import PropTypes from "prop-types";

const SectionHeader = React.memo(function SectionHeader({
  title,
  actionLabel,
  onAction,
  align = "center",
}) {
  const alignClass =
    align === "left"
      ? "items-start text-left"
      : align === "right"
      ? "items-end text-right"
      : "items-center text-center";

  return (
    <header className={`flex flex-col gap-3 ${alignClass}`}>
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900">
        {title}
      </h2>

      {actionLabel ? (
        <button
          type="button"
          onClick={onAction}
          className="inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold bg-indigo-600 text-white
                     hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2
                     transition"
          aria-label={actionLabel}
        >
          {actionLabel}
        </button>
      ) : null}
    </header>
  );
});

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  actionLabel: PropTypes.string,
  onAction: PropTypes.func,
  align: PropTypes.oneOf(["left", "center", "right"]),
};

export default SectionHeader;
