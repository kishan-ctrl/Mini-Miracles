import React from "react";

/**
 * @typedef {Object} LocationListProps
 * @property {string[]} locations
 * @property {boolean=} dense
 */

const LocationList = React.memo(
  /**
   * @param {LocationListProps} props
   */
  function LocationList({ locations, dense = false }) {
    return (
      <ul
        className={`mt-4 grid gap-2 ${
          dense ? "text-sm" : "text-sm"
        }`}
        aria-label="Service locations list"
      >
        {locations.map((loc) => (
          <li
            key={loc}
            className="flex items-center gap-2 rounded-lg border border-gray-100 bg-white px-3 py-2 text-gray-700 shadow-sm"
          >
            <span
              className="h-1.5 w-1.5 rounded-full bg-purple-600"
              aria-hidden="true"
            />
            <span className="truncate">{loc}</span>
          </li>
        ))}
      </ul>
    );
  }
);

export default LocationList;
