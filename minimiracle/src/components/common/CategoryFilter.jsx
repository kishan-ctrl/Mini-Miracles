import React from "react";
import PropTypes from "prop-types";

const CategoryFilter = React.memo(function CategoryFilter({ categories, active, onChange }) {
  return (
    <nav aria-label="Photo category filters">
      <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1">
        {categories.map((cat) => {
          const isActive = cat === active;

          return (
            <button
              key={cat}
              type="button"
              onClick={() => onChange(cat)}
              aria-pressed={isActive}
              className={[
                "whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2",
                isActive
                  ? "bg-pink-600 text-white shadow-sm"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50",
              ].join(" ")}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </nav>
  );
});

CategoryFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  active: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
