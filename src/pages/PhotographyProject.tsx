import { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "../components/Reveal";
import { clientProjects } from "../lib/data";

export default function PhotographyProject() {
  const { id } = useParams<{ id: string }>();
  const project = clientProjects.find((p) => p.id === id);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!project) {
    return <Navigate to="/photography" replace />;
  }

  const closeLightbox = () => setOpenIndex(null);

  const showPrev = () =>
    setOpenIndex((prev) =>
      prev === null ? null : (prev - 1 + project.images.length) % project.images.length
    );

  const showNext = () =>
    setOpenIndex((prev) => (prev === null ? null : (prev + 1) % project.images.length));

  return (
    <div className="pb-28 pt-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <Link
            to="/photography"
            className="font-mono text-[11px] uppercase tracking-widest2 text-mute transition-colors duration-300 hover:text-ink"
          >
            ← Back to Photography
          </Link>

          <span className="eyebrow mt-8 block text-accent">{project.client}</span>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-light leading-tight text-ink md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-mute">
            {project.description}
          </p>

          <div className="mt-6 flex gap-6 border-t border-stone pt-4">
            <div>
              <span className="eyebrow block">Category</span>
              <span className="mt-1 block text-sm text-ink">{project.category}</span>
            </div>
            <div>
              <span className="eyebrow block">Year</span>
              <span className="mt-1 block text-sm text-ink">{project.year}</span>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mx-auto mt-16 max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {project.images.map((src, idx) => (
            <Reveal
              key={src}
              delay={idx * 0.06}
              className={idx === 0 ? "md:col-span-2" : "col-span-1"}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(idx)}
                className="block w-full overflow-hidden bg-paper-deep"
              >
                <img
                  src={src}
                  alt={`${project.title} — image ${idx + 1}`}
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-smooth hover:scale-[1.03]"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-6"
            onClick={closeLightbox}
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute right-6 top-6 font-mono text-[11px] uppercase tracking-widest2 text-paper/70 transition-colors duration-300 hover:text-paper"
            >
              Close ✕
            </button>

            {project.images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    showPrev();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-2xl text-paper/70 transition-colors duration-300 hover:text-paper md:left-8"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    showNext();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-2xl text-paper/70 transition-colors duration-300 hover:text-paper md:right-8"
                >
                  ›
                </button>
              </>
            )}

            <motion.img
              key={openIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              src={project.images[openIndex]}
              alt={`${project.title} — full view ${openIndex + 1}`}
              className="max-h-[85vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <span className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[11px] uppercase tracking-widest2 text-paper/50">
              {openIndex + 1} / {project.images.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}