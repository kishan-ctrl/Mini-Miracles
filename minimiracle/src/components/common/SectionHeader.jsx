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
