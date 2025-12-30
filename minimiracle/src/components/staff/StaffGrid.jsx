import React from "react";
import StaffCard from "./StaffCard";

const StaffGrid = ({ members, onOpen }) => {
  if (!members.length) {
    return (
      <div className="mt-10 rounded-3xl bg-white p-8 ring-1 ring-gray-100 text-center">
        <p className="text-sm text-gray-600">No staff found for your search.</p>
      </div>
    );
  }

  return (
    <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {members.map((m) => (
        <StaffCard key={m.id} member={m} onOpen={onOpen} />
      ))}
    </div>
  );
};

export default StaffGrid;
