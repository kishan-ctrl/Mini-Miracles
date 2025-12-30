import React from "react";
import { aboutPage } from "../mock/mockdata";

import HeroVisionMission from "../components/about/HeroVisionMission";
import DirectorMessage from "../components/about/DirectorMessage";
import ProgramsGrid from "../components/about/ProgramsGrid";
import PhotoGalleryStrip from "../components/about/PhotoGalleryStrip";
import CommunitySection from "../components/about/CommunitySection";
import ContactCard from "../components/about/ContactCard";

const AboutUs = () => {
  return (
    <main className="bg-white">
      <HeroVisionMission hero={aboutPage.hero} />
      <DirectorMessage director={aboutPage.director} />
      <ProgramsGrid programs={aboutPage.programs} />
      <PhotoGalleryStrip photos={aboutPage.photos} />
      <CommunitySection community={aboutPage.community} />
      <ContactCard contact={aboutPage.contact} />
    </main>
  );
};

export default AboutUs;
