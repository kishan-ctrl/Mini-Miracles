import React from "react";
import { Target, Layers, MapPin, Bus } from "lucide-react";

const ICONS = {
  target: Target,
  layers: Layers,
  mapPin: MapPin,
  bus: Bus,
};

export default function WhyChooseCard({ item }) {
  const Icon = ICONS[item.iconKey] || Target;

  return (
    <div className="flex items-center gap-4">
      <div
        className={`w-12 h-12 rounded-full ${item.bgClass} flex items-center justify-center shadow-sm`}
      >
        <Icon className="w-6 h-6 text-white" />
      </div>

      <p className="font-semibold text-gray-800 leading-5 whitespace-pre-line">
        {item.title}
      </p>
    </div>
  );
}
