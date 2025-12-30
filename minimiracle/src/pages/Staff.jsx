import React, { useMemo, useState } from "react";
import { staffPage } from "../mock/mockdata";
import StaffHero from "../components/staff/StaffHero";
import StaffFilters from "../components/staff/StaffFilters";
import StaffGrid from "../components/staff/StaffGrid";
import StaffProfileModal from "../components/staff/StaffProfileModal";

const Staff = () => {
  const [selected, setSelected] = useState("All");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeMember, setActiveMember] = useState(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return staffPage.staff.filter((m) => {
      const matchesCategory = selected === "All" ? true : m.category === selected;
      const matchesQuery =
        !q ||
        m.name.toLowerCase().includes(q) ||
        m.role.toLowerCase().includes(q) ||
        m.category.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [selected, query]);

  const openProfile = (member) => {
    setActiveMember(member);
    setOpen(true);
  };

  const closeProfile = () => {
    setOpen(false);
    setActiveMember(null);
  };

  return (
    <main className="bg-white">
      <StaffHero hero={staffPage.hero} />

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-6">
        <StaffFilters
          categories={staffPage.categories}
          selected={selected}
          onSelect={setSelected}
          query={query}
          onQuery={setQuery}
        />

        <StaffGrid members={filtered} onOpen={openProfile} />
      </section>

      <StaffProfileModal open={open} member={activeMember} onClose={closeProfile} />
    </main>
  );
};

export default Staff;
