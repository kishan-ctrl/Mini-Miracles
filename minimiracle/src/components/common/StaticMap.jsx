// components/common/StaticMap.jsx
import React from "react";
import { ExternalLink, MapPin, Navigation } from "lucide-react";

const StaticMap = ({ address = "Number 20 Pansala Road Hatton Sri Lanka" }) => {
  const encodedAddress = encodeURIComponent(address);
  
  // MapBox Static Image (Free tier - up to 50,000 requests/month)
  // Sign up for a free MapBox account at mapbox.com to get an access token
  // const mapboxToken = "your_mapbox_token"; // Optional, works without token too
  
  // Coordinates for Hatton, Sri Lanka (approximate)
  const lat = 6.891;
  const lng = 80.595;
  
  // MapBox static image URL (works without token in limited capacity)
  const staticMapUrl = `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-l+ff0000(${lng},${lat})/${lng},${lat},14,0/600x300?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA`;
  
  // Alternative: OpenStreetMap static image
  const osmStaticUrl = `https://staticmap.openstreetmap.de/staticmap.php?center=${lat},${lng}&zoom=15&size=600x300&markers=${lat},${lng},red`;
  
  // Google Maps URL (for directions)
  const googleMapsUrl = `https://www.google.com/maps?q=${encodedAddress}`;
  
  // Apple Maps URL
  const appleMapsUrl = `https://maps.apple.com/?q=${encodedAddress}`;

  return (
    <div className="space-y-4">
      {/* Map Image with Link */}
      <a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block group relative"
      >
        <div className="relative overflow-hidden rounded-xl border border-gray-200">
          {/* Map Image */}
          <div 
            className="h-64 w-full bg-cover bg-center"
            style={{
              backgroundImage: `url(https://maps.googleapis.com/maps/api/staticmap?center=${encodedAddress}&zoom=15&size=600x300&maptype=roadmap&markers=color:red%7Clabel:A%7C${encodedAddress})`,
              backgroundColor: '#f3f4f6'
            }}
          >
            {/* Fallback if image doesn't load */}
            <div className="absolute inset-0 flex items-center justify-center bg-white/80">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-500 flex items-center justify-center animate-bounce">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <p className="text-lg font-semibold text-gray-800">View Location</p>
                <p className="text-sm text-gray-600 mt-1">{address}</p>
              </div>
            </div>
          </div>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="bg-white px-6 py-3 rounded-full flex items-center gap-3 shadow-lg transform -translate-y-2 group-hover:translate-y-0 transition-transform">
              <ExternalLink className="h-5 w-5" />
              <span className="font-semibold text-gray-800">Open in Google Maps</span>
            </div>
          </div>
        </div>
      </a>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3">
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-colors text-sm font-medium"
        >
          <img src="/google-maps-icon.png" alt="Google Maps" className="h-5 w-5" />
          Google Maps
        </a>
        
        <a
          href={appleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-colors text-sm font-medium"
        >
          <img src="/apple-maps-icon.png" alt="Apple Maps" className="h-5 w-5" />
          Apple Maps
        </a>
        
        <a
          href={`https://www.openstreetmap.org/search?query=${encodedAddress}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-colors text-sm font-medium"
        >
          <MapPin className="h-5 w-5" />
          OpenStreetMap
        </a>
      </div>
    </div>
  );
};

export default StaticMap;