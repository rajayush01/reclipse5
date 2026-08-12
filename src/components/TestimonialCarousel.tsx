import { useState } from 'react'
import { AnimatePresence, motion, type PanInfo } from 'framer-motion'
import { testimonials } from '../lib/testimonials'

// Parses **bold** and *italic* markers into styled spans, matching
// the mixed emphasis in the reference copy — no markdown lib needed.
function renderEmphasis(text: string) {
  const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g).filter(Boolean)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-semibold text-ink">
          {part.slice(2, -2)}
        </strong>
      )
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return (
        <em key={i} className="italic text-ink">
          {part.slice(1, -1)}
        </em>
      )
    }
    return <span key={i}>{part}</span>
  })
}

const SWIPE_THRESHOLD = 80

export function TestimonialsCarousel() {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0])
  const active = testimonials[index]

  const go = (dir: 1 | -1) => {
    setIndex(([current]) => {
      const next = (current + dir + testimonials.length) % testimonials.length
      return [next, dir]
    })
  }

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -SWIPE_THRESHOLD) go(1)
    else if (info.offset.x > SWIPE_THRESHOLD) go(-1)
  }

  return (
    <section className="relative w-full overflow-hidden bg-paper-soft px-6 py-24 md:py-32">
      <p className="eyebrow mb-14 text-center md:mb-20">Words, Kept</p>

      <div className="mx-auto max-w-6xl">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={active.slug}
            custom={direction}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.6}
            onDragEnd={handleDragEnd}
            initial={{ opacity: 0, x: direction >= 0 ? 60 : -60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction >= 0 ? -60 : 60 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="grid cursor-grab grid-cols-1 items-center gap-12 active:cursor-grabbing md:grid-cols-[1.2fr_0.8fr] md:gap-16"
          >
            {/* Text side */}
            <div className="order-2 md:order-1">
              <h3 className="font-display text-3xl italic leading-tight text-ink md:text-5xl">
                “{active.headline}”
              </h3>

              <p className="mt-8 max-w-xl font-display text-base italic leading-relaxed text-ink/70 md:text-lg">
                {renderEmphasis(active.body)}
              </p>

              <p
                className="mt-10 font-display text-2xl italic text-ink/80 md:text-3xl"
                style={{ transform: 'rotate(-1.5deg)' }}
              >
                {active.name}
              </p>
              <p className="font-nav mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-ink-soft">
                {active.role}
              </p>
            </div>

            {/* Portrait side */}
            <div className="order-1 flex justify-center md:order-2 md:justify-end">
              <div className="bg-paper p-3 shadow-xl shadow-ink/10 md:p-4">
                <img
                  src={active.image}
                  alt={active.name}
                  className="h-[340px] w-[260px] object-cover md:h-[420px] md:w-[320px]"
                  draggable={false}
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="mt-16 flex items-center justify-center gap-8">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous testimonial"
          className="font-nav text-xs uppercase tracking-[0.14em] text-ink-soft transition-colors duration-300 hover:text-ink"
        >
          ← Prev
        </button>

        <div className="flex items-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.slug}
              type="button"
              onClick={() => setIndex([i, i > index ? 1 : -1])}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? 'w-6 bg-ink' : 'w-1.5 bg-ink-soft/30 hover:bg-ink-soft'
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next testimonial"
          className="font-nav text-xs uppercase tracking-[0.14em] text-ink-soft transition-colors duration-300 hover:text-ink"
        >
          Next →
        </button>
      </div>
    </section>
  )
}