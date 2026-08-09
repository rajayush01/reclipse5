import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "../components/Reveal";
import ImageCard from "../components/ImageCard";
import { categories, works, type WorkCategory, type WorkItem } from "../lib/data";

export default function Work() {
  const [active, setActive] = useState<WorkCategory | "All">("All");
  const [selected, setSelected] = useState<WorkItem | null>(null);

  const filtered = useMemo(
    () => (active === "All" ? works : works.filter((w) => w.category === active)),
    [active]
  );

  return (
    <div className="mx-auto max-w-7xl px-6 pb-28 pt-36 md:px-10">
      <Reveal>
        <span className="eyebrow">Archive</span>
        <h1 className="mt-3 max-w-2xl font-display text-4xl font-light text-ink md:text-5xl">
          The Work
        </h1>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-mute">
          Nine frames from recent studio and location shoots. Filter by
          category to see how the same discipline reads across material.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-y border-stone py-5">
          {(["All", ...categories] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-mono text-[11px] uppercase tracking-widest2 transition-colors duration-300 ${
                active === cat ? "text-accent" : "text-mute hover:text-ink"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </Reveal>

      <motion.div layout className="mt-14 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <ImageCard item={item} onOpen={setSelected} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-6 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-3xl"
            >
              <img
                src={selected.image}
                alt={selected.title}
                className="max-h-[70vh] w-auto rounded-sm object-contain"
              />
              <div className="mt-4 flex items-baseline justify-between">
                <div>
                  <p className="font-display text-lg text-paper">{selected.title}</p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-widest2 text-paper/60">
                    {selected.category} · {selected.year}
                  </p>
                </div>
                <span className="font-mono text-[11px] text-paper/60">{selected.meta}</span>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="mt-6 font-mono text-[11px] uppercase tracking-widest2 text-paper/70 hover:text-paper transition-colors"
              >
                Close ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
