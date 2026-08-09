import Reveal from "../components/Reveal";
import { clientProjects } from "../lib/data";

export default function Photography() {
  return (
    <div className="pb-28 pt-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <span className="eyebrow">Client Photography</span>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-light leading-tight text-ink md:text-5xl">
            Case studies from the studio floor
          </h1>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-mute">
            A closer look at how a handful of recent projects came together —
            the brief, the light, and what shipped.
          </p>
        </Reveal>
      </div>

      <div className="mt-24 space-y-28 md:space-y-36">
        {clientProjects.map((project, i) => {
          const reversed = i % 2 === 1;
          return (
            <section key={project.id} className="mx-auto max-w-7xl px-6 md:px-10">
              <div
                className={`grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-6 ${
                  reversed ? "" : ""
                }`}
              >
                {/* Text column */}
                <Reveal
                  className={`md:col-span-4 ${reversed ? "md:order-2" : "md:order-1"}`}
                >
                  <span className="font-mono text-[11px] uppercase tracking-widest2 text-accent">
                    {project.client}
                  </span>
                  <h2 className="mt-4 font-display text-2xl font-light leading-snug text-ink md:text-3xl">
                    {project.title}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-mute">
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

                {/* Image column */}
                <div
                  className={`md:col-span-8 grid grid-cols-2 gap-4 ${
                    reversed ? "md:order-1" : "md:order-2"
                  }`}
                >
                  {project.images.map((src, idx) => (
                    <Reveal
                      key={src}
                      delay={idx * 0.08}
                      className={idx === 0 ? "col-span-2" : "col-span-1"}
                    >
                      <div className="overflow-hidden bg-paper-deep">
                        <img
                          src={src}
                          alt={`${project.title} — image ${idx + 1}`}
                          className="h-full w-full object-cover transition-transform duration-[900ms] ease-smooth hover:scale-[1.03]"
                        />
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
