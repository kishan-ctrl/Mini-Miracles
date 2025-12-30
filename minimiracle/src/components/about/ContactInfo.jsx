import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

/**
 * @typedef {"phone"|"email"|"address"} ContactType
 * @typedef {{id:number,type:ContactType,text:string}} ContactItem
 * @typedef {{title:string,image:string,items:ContactItem[]}} ContactInfoProps
 */

function iconFor(type) {
  const cls = "h-4 w-4 text-white";
  if (type === "phone") return <Phone className={cls} aria-hidden="true" />;
  if (type === "email") return <Mail className={cls} aria-hidden="true" />;
  return <MapPin className={cls} aria-hidden="true" />;
}

function bgFor(type) {
  if (type === "phone") return "bg-pink-500";
  if (type === "email") return "bg-sky-500";
  return "bg-amber-500";
}

function hrefFor(item) {
  if (item.type === "phone") return `tel:${item.text.replace(/\s+/g, "")}`;
  if (item.type === "email") return `mailto:${item.text}`;
  return null;
}

const ContactInfo = React.memo(function ContactInfo({ title, image, items }) {
  return (
    <section aria-labelledby="get-in-touch" className="w-full">
      <h2 id="get-in-touch" className="text-sm font-semibold text-gray-700">
        {title}
      </h2>

      <div className="mt-4 flex flex-col gap-6 sm:flex-row sm:items-center">
        {/* Circle Photo */}
        <div className="relative h-28 w-28 shrink-0">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-300 via-purple-300 to-pink-300 blur-[10px] opacity-60" />
          <div className="relative h-full w-full overflow-hidden rounded-full border-[6px] border-white shadow">
            <img
              src={image}
              alt="Contact"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Contact list */}
        <ul className="w-full space-y-3">
          {items.map((item) => {
            const href = hrefFor(item);
            const row = (
              <div className="flex items-start gap-3">
                <span
                  className={`mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full ${bgFor(
                    item.type
                  )} shadow`}
                  aria-label={`${item.type} icon`}
                >
                  {iconFor(item.type)}
                </span>

                <p className="text-sm text-gray-600 leading-snug">
                  {item.text}
                </p>
              </div>
            );

            return (
              <li key={item.id}>
                {href ? (
                  <a
                    href={href}
                    className="block rounded-lg outline-none transition hover:opacity-90 focus:ring-2 focus:ring-purple-500/30"
                    aria-label={item.type === "phone" ? `Call ${item.text}` : `Email ${item.text}`}
                  >
                    {row}
                  </a>
                ) : (
                  row
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
});

export default ContactInfo;
