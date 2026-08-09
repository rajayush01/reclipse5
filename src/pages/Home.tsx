import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import { works, films } from "../lib/data";
import img from "../assets/img4.webp"
import img1 from "../assets/img1.webp"
import img2 from "../assets/img2.webp"
import img3 from "../assets/img3.webp"
import img4 from "../assets/img4.webp"
import img5 from "../assets/img5.webp"
import img6 from "../assets/img6.webp"


const capabilities = [
  {
    title: "Photography",
    copy: "Studio and on-location shoots for catalogue, campaign, and editorial use.",
    to: "/photography",
    image: img2,
  },
  {
    title: "Films",
    copy: "Short-form process and campaign films, shot with the same restraint as our stills.",
    to: "/films",
    image: img3,
  },
  {
    title: "Retouching",
    copy: "Precise, restrained post-production that keeps material and texture honest.",
    to: null,
    image: img4,
  },
  {
    title: "Art Direction",
    copy: "Set, light, and styling direction for brands building a visual language.",
    to: null,
    image: img5,
  },
];

const headline = ["Every object", "has a moment", "of stillness."];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-screen flex-col justify-end overflow-hidden pb-16 pt-32 md:pb-24">
        <div className="absolute inset-0 -z-10">
          <img
            src={img}
            alt="Ceramic form photographed in soft natural light"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-paper via-paper/10 to-transparent" />
        </div>

        <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="eyebrow mb-6 inline-block"
          >
            Product Photography Studio — Mumbai
          </motion.span>

          <h1 className="max-w-3xl font-display text-5xl font-light leading-[1.05] text-ink md:text-7xl">
            {headline.map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.9, delay: 0.25 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="block"
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-6 max-w-md text-base leading-relaxed text-mute"
          >
            We photograph what brands make — ceramics, textiles, objects — with
            a quiet, disciplined eye. Fewer frames, held longer.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="mt-9"
          >
            <Link
              to="/work"
              className="group inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest2 text-ink"
            >
              View the work
              <span className="relative h-px w-10 overflow-hidden bg-stone">
                <span className="absolute inset-0 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-smooth group-hover:scale-x-100" />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Statement — split editorial layout */}
      <section className="border-y border-stone bg-paper-deep">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-20 md:grid-cols-12 md:gap-6 md:px-10 md:py-28">
          <Reveal className="md:col-span-7">
            <span className="eyebrow">Our approach</span>
            <p className="mt-6 max-w-xl font-display text-2xl font-light leading-snug text-ink md:text-3xl">
              We don't chase trends in product photography. We slow the object
              down — study its weight, its texture, the way one light source
              falls across it — until a single frame says everything a page
              of copy would take longer to say.
            </p>
          </Reveal>

          <Reveal delay={0.12} className="md:col-span-5">
            <div className="aspect-[4/3] overflow-hidden bg-paper">
              <img
                src={img1}
                alt="Detail of light falling across a ceramic surface"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-widest2 text-mute">
              On set — single source, natural light
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured work — horizontal filmstrip */}
      <FilmstripSection />

      {/* Capabilities — interactive row list linking to Photography / Films */}
      <section className="border-t border-stone">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <Reveal>
            <span className="eyebrow">What we do</span>
            <h2 className="mt-3 font-display text-3xl font-light text-ink md:text-4xl">
              Capabilities
            </h2>
          </Reveal>

          <div className="mt-12 divide-y divide-stone border-y border-stone">
            {capabilities.map((cap, i) => (
              <Reveal key={cap.title} delay={i * 0.05}>
                <CapabilityRow {...cap} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — full-bleed band */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={img6}
            alt="Textile draped in soft studio light"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-ink/55" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-28 text-center md:px-10 md:py-40">
          <Reveal>
            <span className="font-mono text-[11px] uppercase tracking-widest2 text-paper/70">
              Have an object in mind?
            </span>
            <h2 className="mx-auto mt-4 max-w-xl font-display text-3xl font-light text-paper md:text-5xl">
              Let's find its stillness together.
            </h2>
            <Link
              to="/enquire"
              className="mt-9 inline-block border border-paper px-8 py-3 font-mono text-[11px] uppercase tracking-widest2 text-paper transition-colors duration-300 hover:bg-paper hover:text-ink"
            >
              Enquire now
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function CapabilityRow({
  title,
  copy,
  to,
  image,
}: {
  title: string;
  copy: string;
  to: string | null;
  image: string;
}) {
  const [hovered, setHovered] = useState(false);
  const content = (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group grid grid-cols-1 items-center gap-4 py-8 md:grid-cols-12 md:gap-6"
    >
      <div className="md:col-span-1">
        <span className="font-mono text-[11px] text-mute">{to ? "→" : ""}</span>
      </div>
      <h3 className="font-display text-2xl font-light text-ink transition-colors duration-300 md:col-span-4 md:text-3xl group-hover:text-accent">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-mute md:col-span-5">{copy}</p>
      <div className="hidden md:col-span-2 md:block">
        <motion.div
          initial={false}
          animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.94 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="aspect-[4/3] w-full overflow-hidden bg-paper-deep"
        >
          <img src={image} alt="" className="h-full w-full object-cover" />
        </motion.div>
      </div>
    </div>
  );

  return to ? (
    <Link to={to} className="block">
      {content}
    </Link>
  ) : (
    content
  );
}

function FilmstripSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const reel = [...works.slice(0, 6)];

  const scrollBy = (amount: number) => {
    scrollerRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <div className="mb-10 flex items-end justify-between">
            <div>
              <span className="eyebrow">Selected Work</span>
              <h2 className="mt-3 font-display text-3xl font-light text-ink md:text-4xl">
                A shortlist from the archive
              </h2>
            </div>
            <div className="hidden items-center gap-3 md:flex">
              <button
                type="button"
                aria-label="Scroll left"
                onClick={() => scrollBy(-420)}
                className="flex h-10 w-10 items-center justify-center border border-stone text-ink transition-colors duration-300 hover:border-ink"
              >
                ←
              </button>
              <button
                type="button"
                aria-label="Scroll right"
                onClick={() => scrollBy(420)}
                className="flex h-10 w-10 items-center justify-center border border-stone text-ink transition-colors duration-300 hover:border-ink"
              >
                →
              </button>
              <Link
                to="/work"
                className="ml-3 font-mono text-[11px] uppercase tracking-widest2 text-mute hover:text-accent transition-colors"
              >
                View all →
              </Link>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div
          ref={scrollerRef}
          className="scrollbar-none flex gap-6 overflow-x-auto px-6 pb-4 md:px-10"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {reel.map((item) => (
            <Link
              to="/work"
              key={item.id}
              className="group relative w-[78vw] flex-none overflow-hidden bg-paper-deep sm:w-[46vw] lg:w-[30vw]"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-smooth group-hover:scale-[1.045]"
                />
              </div>
              <div className="flex items-baseline justify-between pt-3">
                <span className="font-display text-[15px] text-ink">{item.title}</span>
                <span className="font-mono text-[11px] text-mute">{item.index}</span>
              </div>
            </Link>
          ))}

          {/* Trailing "view all" card */}
          <Link
            to="/work"
            className="flex w-[78vw] flex-none flex-col items-start justify-center gap-3 border border-stone px-8 sm:w-[46vw] lg:w-[30vw]"
            style={{ scrollSnapAlign: "start" }}
          >
            <span className="font-display text-2xl font-light text-ink">
              View the full archive
            </span>
            <span className="font-mono text-[11px] uppercase tracking-widest2 text-accent">
              {films.length + works.length}+ frames →
            </span>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
