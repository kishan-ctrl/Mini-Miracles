import React from "react";
import PropTypes from "prop-types";

const TextBlock = React.memo(function TextBlock({ text }) {
  return (
    <article
      className="rounded-2xl bg-white/90 backdrop-blur p-4 sm:p-5 shadow-sm border border-slate-200
                 hover:shadow-md transition"
    >
      <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
        {text}
      </p>
    </article>
  );
});

TextBlock.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TextBlock;
