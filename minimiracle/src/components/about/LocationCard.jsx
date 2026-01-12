// src/components/about/LocationCard.jsx
import React from "react";
import { MapPin, Navigation, Globe, Smartphone } from "lucide-react";

const LocationCard = ({ contact }) => {
  const fullAddress = `${contact.addressLine1}, ${contact.addressLine2}`;
  const encodedAddress = encodeURIComponent(fullAddress);

  // Navigation URLs
  const urls = {
    google: `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`,
    apple: `https://maps.apple.com/?q=${encodedAddress}`,
    waze: `https://www.waze.com/ul?q=${encodedAddress}&navigate=yes`,
    osm: `https://www.openstreetmap.org/search?query=${encodedAddress}`,
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-300 overflow-hidden shadow-sm">
      {/* Header */}
      <div className="bg-purple-600 to-pink-600 p-6 text-white">
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 rounded-full bg-white/20 flex items-center justify-center">
            <MapPin className="h-7 w-7" />
          </div>
          <div>
            <h3 className="text-xl font-bold">Our Location</h3>
            <p className="text-white/90 text-sm">Baby Smith Academy</p>
          </div>
        </div>
      </div>

      {/* Address */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-start gap-3">
          <MapPin className="h-5 w-5 text-purple-600 mt-1" />
          <div>
            <p className="font-medium text-gray-900">{contact.addressLine1}</p>
            <p className="text-gray-600 mt-1">{contact.addressLine2}</p>
            <div className="mt-3 p-3 bg-purple-50 rounded-lg"></div>
          </div>
        </div>
      </div>

      {/* Map Apps */}
      <div className="p-6 grid grid-cols-2 gap-3">
        <a
          href={urls.google}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-colors group"
        >
          <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100">
            <span className="text-blue-600 font-bold text-sm">G</span>
          </div>
          <div>
            <p className="font-medium text-gray-900">Google Maps</p>
            <p className="text-xs text-gray-500">Get directions</p>
          </div>
        </a>

        <a
          href={urls.apple}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors group"
        >
          <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-gray-200">
            <Navigation className="h-5 w-5 text-gray-700" />
          </div>
          <div>
            <p className="font-medium text-gray-900">Apple Maps</p>
            <p className="text-xs text-gray-500">iOS directions</p>
          </div>
        </a>

        <a
          href={urls.waze}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors group"
        >
          <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center group-hover:bg-blue-200">
            <Smartphone className="h-5 w-5 text-blue-700" />
          </div>
          <div>
            <p className="font-medium text-gray-900">Waze</p>
            <p className="text-xs text-gray-500">Live traffic</p>
          </div>
        </a>

        <a
          href={urls.osm}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-colors group"
        >
          <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center group-hover:bg-green-200">
            <Globe className="h-5 w-5 text-green-700" />
          </div>
          <div>
            <p className="font-medium text-gray-900">OpenStreetMap</p>
            <p className="text-xs text-gray-500">Open source map</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default LocationCard;
