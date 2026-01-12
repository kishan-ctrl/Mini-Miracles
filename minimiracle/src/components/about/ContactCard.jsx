import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import LocationCard from "./LocationCard"; // Adjust import path

const ContactCard = ({ contact }) => {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-extrabold text-gray-900">{contact.title}</h2>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Info */}
         <div className="rounded-3xl bg-purple-50 p-4 ring-1 ring-purple-500 shadow-sm transition hover:bg-purple-100">


            <InfoRow 
              Icon={Phone} 
              text={contact.phone} 
              href={`tel:${contact.phone.replace(/\s+/g, "")}`} 
            />
            <InfoRow 
              Icon={Mail} 
              text={contact.email} 
              href={`mailto:${contact.email}`} 
            />
            <InfoRow 
              Icon={MapPin} 
              text={contact.addressLine1} 
            />
            <p className="ml-12 -mt-2 text-sm text-gray-600">{contact.addressLine2}</p>
            
           
          </div>

          {/* Location Card */}
          <LocationCard contact={contact} />
        </div>
      </div>
    </section>
  );
};

export default ContactCard;

function InfoRow({ Icon, text, href }) {
  const row = (
    <div className="flex items-start gap-3 py-3">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-purple-50">
        <Icon className="h-5 w-5 text-purple-700" aria-hidden="true" />
      </span>
      <p className="mt-2 text-sm text-gray-700">{text}</p>
    </div>
  );

  return href ? (
    <a
      href={href}
      className="block rounded-2xl outline-none hover:bg-gray-50 transition px-2"
      aria-label={text}
    >
      {row}
    </a>
  ) : (
    <div className="px-2">{row}</div>
  );
}