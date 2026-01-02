import kidsImg from "../assets/images/BOAY AND GIRL.jpg";

export default function HeroSection({ children }) {
  return (
    <section className="relative min-h-screen">
      {/* Navbar slot */}
      {children}

      {/* Background gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#8e24aa_0%,#9c27b0_35%,#7b1fa2_100%)]" />

      {/* Big watermark text (faint) */}
      <div className="pointer-events-none absolute inset-0 flex items-end justify-center pb-28">
        <p className="select-none text-[140px] font-black tracking-widest text-white/10 md:text-[220px]">
          SCHOOL
        </p>
      </div>

      <div className="relative z-10 mx-auto grid min-h-screen max-w-6xl grid-cols-1 items-center gap-10 px-6 pt-28 md:grid-cols-2 md:pt-24">
        {/* Left content */}
        <div className="relative">
          {/* Translucent panel behind text */}
          <div className="absolute -left-2 top-20 h-44 w-[360px] rounded-sm bg-white/10 blur-[0.2px] md:w-[420px]" />

          <h1 className="relative text-5xl font-extrabold text-white md:text-6xl">
            Admission
          </h1>

          <div className="relative mt-6 flex items-end gap-4">
            <span className="text-sm font-extrabold tracking-wide text-yellow-300">
              OPENFOR
            </span>
            <span className="text-2xl font-extrabold text-yellow-300">
              2025-2026
            </span>
          </div>

          <button
            type="button"
            className="relative mt-7 inline-flex items-center justify-center rounded-md bg-teal-600 px-7 py-3 text-sm font-semibold text-white shadow-[0_10px_20px_rgba(0,0,0,0.18)] hover:bg-teal-500 hover:cursor-pointer transition"
          >
            Enroll Now
          </button>
        </div>

        {/* Right visuals */}
        <div className="relative flex items-center justify-center md:justify-end">
          {/* Donut segmented ring */}
          <div className="absolute right-0 top-6 h-[320px] w-[320px] md:h-[380px] md:w-[380px] ring-donut" />

          {/* Kids image (front) */}
          <img
            src={kidsImg}
            alt="Kids"
            className="relative z-10 w-[360px] max-w-[90%] md:w-[440px]"
            draggable="false"
          />
        </div>
      </div>
    </section>
  );
}
