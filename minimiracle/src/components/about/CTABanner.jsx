import React, { useState } from "react";
import PropTypes from "prop-types";
import { X, Send } from "lucide-react";

const CTABanner = React.memo(function CTABanner({ text }) {
  const [open, setOpen] = useState(false);

  return (
    <section aria-label="Call to action" className="relative">
      <div className="rounded-[2rem] bg-amber-400 text-slate-900 p-6 sm:p-8 shadow-sm overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-lg sm:text-xl font-extrabold">{text}</p>
            <p className="mt-1 text-sm text-slate-800/80">
              Click to ask questions about kids activities.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-6 py-3 font-bold
                       hover:bg-slate-800 active:scale-[0.99] transition
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
            aria-label="Open contact form"
          >
            <Send className="h-4 w-4" />
            Ask Now
          </button>
        </div>
      </div>

      {/* Optional modal (requested as optional enhancement) */}
      {open ? (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Ask about kids activities form"
          onMouseDown={() => setOpen(false)}
        >
          <div
            className="w-full max-w-lg rounded-2xl bg-white shadow-xl overflow-hidden"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="font-extrabold text-slate-900">Ask About Kids Activities</h3>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="p-2 rounded-lg hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500"
                aria-label="Close form"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form className="p-4 space-y-4">
              <div>
                <label className="text-sm font-semibold text-slate-700">Your Name</label>
                <input
                  className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none
                             focus:ring-2 focus:ring-pink-500"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-700">Email</label>
                <input
                  className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none
                             focus:ring-2 focus:ring-pink-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-700">Message</label>
                <textarea
                  className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none
                             focus:ring-2 focus:ring-pink-500 min-h-[110px]"
                  placeholder="Type your question..."
                />
              </div>

              <button
                type="button"
                className="w-full rounded-xl bg-pink-600 text-white font-bold py-3
                           hover:bg-pink-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2"
                aria-label="Submit form"
              >
                Submit
              </button>

              <p className="text-xs text-slate-500">
                (Demo modal only — connect to backend later)
              </p>
            </form>
          </div>
        </div>
      ) : null}
    </section>
  );
});

CTABanner.propTypes = {
  text: PropTypes.string.isRequired,
};

export default CTABanner;
