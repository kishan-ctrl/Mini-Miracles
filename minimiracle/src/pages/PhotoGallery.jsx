import React, { useEffect, useMemo, useState } from "react";
import CategoryFilter from "../components/common/CategoryFilter";
import StatCounter from "../components/common/StartCounter";
import GalleryGrid from "../components/gallery/GalleryGrid";
import Lightbox from "../components/common/Lightbox";
import TestimonialSlider from "../components/testimonials/TestimonialSlider";
import { galleryContent } from "../mock/mockdata";

export default function PhotoGallery() {
  const categories = galleryContent.categories;

  const getInitialCategory = () => {
    const hash = decodeURIComponent(window.location.hash.replace("#", ""));
    return categories.includes(hash) ? hash : categories[0];
  };

  const [activeCategory, setActiveCategory] = useState(getInitialCategory);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // simple loading skeleton when switching category
  const [isLoading, setIsLoading] = useState(false);

  // sync URL hash for shareable state
  useEffect(() => {
    window.location.hash = encodeURIComponent(activeCategory);
  }, [activeCategory]);

  const photos = useMemo(() => {
    return galleryContent.photos[activeCategory] || [];
  }, [activeCategory]);

  useEffect(() => {
    setIsLoading(true);
    const t = window.setTimeout(() => setIsLoading(false), 350);
    return () => window.clearTimeout(t);
  }, [activeCategory]);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const prev = () => setLightboxIndex((i) => (i - 1 + photos.length) % photos.length);
  const next = () => setLightboxIndex((i) => (i + 1) % photos.length);

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-pink-600 via-fuchsia-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Photo gallery
          </h1>
          <p className="mt-2 text-white/90 text-sm sm:text-base max-w-2xl">
            Browse academy moments by category. Click any image to view.
          </p>
        </div>
      </section>

      {/* Category + Stats + Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-lg font-extrabold text-slate-900">Photo Category</h2>
            <CategoryFilter
              categories={categories}
              active={activeCategory}
              onChange={setActiveCategory}
            />
          </div>

          <div className="lg:col-span-5">
            <StatCounter value={galleryContent.statistics.parentsCount} label="Parents" />
          </div>
        </div>

        <div className="mt-8">
          <TestimonialSlider items={galleryContent.testimonials} intervalMs={6000} />
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
        <div className="flex items-center justify-between gap-4 mb-4">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            {activeCategory}
          </h2>
          <p className="text-sm text-slate-600">{photos.length} photos</p>
        </div>

        <GalleryGrid
          items={photos}
          onOpen={openLightbox}
          category={activeCategory}
          isLoading={isLoading}
        />
      </section>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        items={photos}
        index={lightboxIndex}
        onClose={closeLightbox}
        onPrev={prev}
        onNext={next}
      />
    </main>
  );
}
