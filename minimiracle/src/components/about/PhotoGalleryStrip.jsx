import React from "react";
import { motion } from "framer-motion";

const PhotoGalleryStrip = ({ photos }) => {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-extrabold text-gray-900">{photos.title}</h2>
        <p className="mt-2 text-sm text-gray-600">{photos.subtitle}</p>
      </motion.div>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {photos.images.map((src, i) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: i * 0.03 }}
            className="group overflow-hidden rounded-3xl bg-gray-100 ring-1 ring-gray-200"
          >
            <img
              src={src}
              alt={`School moment ${i + 1}`}
              className="h-52 w-full object-cover transition duration-500 group-hover:scale-[1.04]"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PhotoGalleryStrip;
