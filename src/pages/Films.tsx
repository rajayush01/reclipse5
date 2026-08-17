import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "../components/Reveal";
import { films, type Film } from "../lib/data";

export default function Films() {
  const [playing, setPlaying] = useState<Film | null>(null);

  return (
    <div className="mx-auto max-w-7xl px-6 pb-28 pt-36 md:px-10">
      <Reveal>
        <span className="eyebrow">Motion</span>
        <h1 className="mt-3 max-w-2xl font-display text-4xl font-light text-ink md:text-5xl">
          Films
        </h1>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-mute">
          Short-form process and campaign films, shot with the same
          restraint as our RECLIPSEs.
        </p>
      </Reveal>

      <div className="mt-16 space-y-16 md:space-y-20">
        {films.map((film, i) => (
          <Reveal key={film.id} delay={i * 0.05}>
            <button
              type="button"
              onClick={() => setPlaying(film)}
              className="group relative block w-full overflow-hidden text-left"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-ink">
                <img
                  src={film.thumbnail}
                  alt={film.title}
                  className="h-full w-full object-cover opacity-90 transition-transform duration-[900ms] ease-smooth group-hover:scale-[1.03] group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-ink/25 transition-colors duration-500 ease-smooth group-hover:bg-ink/15" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border border-paper/70 text-paper transition-transform duration-500 ease-smooth group-hover:scale-110 group-hover:bg-paper group-hover:text-ink">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
                      <path d="M4 2.5v13l11-6.5-11-6.5z" />
                    </svg>
                  </span>
                </div>

                <span className="absolute bottom-4 right-4 font-mono text-[11px] uppercase tracking-widest2 text-paper/80">
                  {film.duration}
                </span>
              </div>

              <div className="mt-4 flex items-baseline justify-between border-t border-stone pt-3">
                <div>
                  <p className="font-display text-xl text-ink">{film.title}</p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-widest2 text-mute">
                    {film.client}
                  </p>
                </div>
                <span className="font-mono text-[11px] text-mute">{film.year}</span>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {playing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-6 backdrop-blur-sm"
            onClick={() => setPlaying(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl"
            >
              <video
                src={playing.videoUrl}
                controls
                autoPlay
                className="w-full bg-black"
              />
              <div className="mt-4 flex items-baseline justify-between">
                <div>
                  <p className="font-display text-lg text-paper">{playing.title}</p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-widest2 text-paper/60">
                    {playing.client} · {playing.year}
                  </p>
                </div>
                <button
                  onClick={() => setPlaying(null)}
                  className="font-mono text-[11px] uppercase tracking-widest2 text-paper/70 hover:text-paper transition-colors"
                >
                  Close ✕
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
