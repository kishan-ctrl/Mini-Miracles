import React from "react";
import { Search } from "lucide-react";

const StaffFilters = ({ categories, selected, onSelect, query, onQuery }) => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => onSelect(c)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ring-1
              ${
                selected === c
                  ? "bg-purple-700 text-white ring-purple-700"
                  : "bg-white text-gray-700 ring-gray-200 hover:bg-gray-50"
              }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2 rounded-2xl bg-white p-2 ring-1 ring-gray-200">
        <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
        <input
          value={query}
          onChange={(e) => onQuery(e.target.value)}
          placeholder="Search staff name or role..."
          className="w-full bg-transparent px-2 py-2 text-sm outline-none"
          aria-label="Search staff"
        />
      </div>
    </div>
  );
};

export default StaffFilters;
