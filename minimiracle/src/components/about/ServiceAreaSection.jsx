import React from "react";
import PropTypes from "prop-types";
import LocationList from "./LocationList";

const ServiceAreaSection = React.memo(function ServiceAreaSection({ title, locations, columns }) {
  return (
    <section aria-label={`Service areas: ${title}`} className="space-y-3">
      <h2 className="text-lg font-extrabold text-slate-900">{title}</h2>

      {/* Primary single list */}
      {locations ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <LocationList locations={locations} />
        </div>
      ) : null}

      {/* Secondary two columns */}
      {columns ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {columns.map((col, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <LocationList locations={col.locations} />
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
});

ServiceAreaSection.propTypes = {
  title: PropTypes.string.isRequired,
  locations: PropTypes.arrayOf(PropTypes.string),
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      locations: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ),
};

export default ServiceAreaSection;
