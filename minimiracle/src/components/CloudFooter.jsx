import worldImg from "../assets/images/World.png";
import rocketImg from "../assets/images/ROCKET.png";

export default function CloudFooter() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20">
      {/* World + Rocket icons */}
      <img
        src={worldImg}
        alt="World"
        className="absolute left-10 bottom-20 w-16 md:left-16 md:w-20"
        draggable="false"
      />
      <img
        src={rocketImg}
        alt="Rocket"
        className="absolute right-8 bottom-16 w-16 md:right-14 md:w-20"
        draggable="false"
      />

      {/* Small star */}
      <span className="absolute right-1/2 bottom-14 h-2 w-2 rounded-full bg-pink-400" />

      {/* Cloud SVG */}
      <svg
        viewBox="0 0 1440 220"
        className="h-[140px] w-full md:h-[170px]"
        preserveAspectRatio="none"
      >
        <path
          fill="white"
          d="
            M0,120
            C80,90 140,90 220,120
            C260,60 340,60 380,120
            C440,70 520,70 580,120
            C620,80 700,80 740,120
            C800,70 880,70 940,120
            C980,60 1060,60 1100,120
            C1160,90 1220,90 1300,120
            C1340,80 1400,80 1440,120
            L1440,220 L0,220 Z
          "
        />
      </svg>
    </div>
  );
}
