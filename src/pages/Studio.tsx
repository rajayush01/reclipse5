import Reveal from "../components/Reveal";

const stats = [
  { label: "Founded", value: "2018" },
  { label: "Shoots delivered", value: "340+" },
  { label: "Studio", value: "Mumbai" },
];

export default function Studio() {
  return (
    <div className="pb-28 pt-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 md:grid-cols-2 md:gap-20 md:px-10">
        <Reveal>
          <span className="eyebrow">Studio</span>
          <h1 className="mt-3 font-display text-4xl font-light leading-tight text-ink md:text-5xl">
            A small studio, working slowly on purpose.
          </h1>
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-mute">
            <p>
              RECLIPSE began as a one-room studio shooting ceramics for local
              makers. It stayed that size on purpose — every shoot is planned,
              shot, and edited by the same small team, so nothing about the
              object gets lost in translation.
            </p>
            <p>
              We work with brands and independent makers who care as much
              about how a thing is photographed as how it's made. Ceramics,
              textiles, and objects come through the studio most often, but
              the approach — patient light, minimal styling, honest color —
              stays the same regardless of material.
            </p>
            <p>
              Every project starts with the object in hand, not a mood board.
              We let its weight, texture, and proportions decide the light.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="md:pt-16">
          <div className="aspect-[4/5] w-full overflow-hidden bg-paper-deep">
            <img
              src="https://picsum.photos/seed/RECLIPSE-studio/900/1100"
              alt="Inside the RECLIPSE studio space"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>

      <div className="mx-auto mt-24 max-w-7xl px-6 md:px-10">
        <Reveal>
          <div className="grid grid-cols-1 gap-8 border-t border-stone pt-10 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-4xl font-light text-ink">{stat.value}</p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-widest2 text-mute">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="mx-auto mt-24 max-w-7xl px-6 md:px-10">
        <Reveal>
          <span className="eyebrow">How we work</span>
          <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-8 border-t border-stone pt-8 md:grid-cols-3">
            {[
              {
                title: "Understand the object",
                copy: "We start with the physical piece — its material, weight, and finish — before planning a single light.",
              },
              {
                title: "Light with restraint",
                copy: "One or two light sources, rarely more. Restraint keeps the material honest and the image calm.",
              },
              {
                title: "Edit to the essential",
                copy: "We deliver fewer, stronger frames rather than a large set of similar ones.",
              },
            ].map((step) => (
              <div key={step.title}>
                <h3 className="font-display text-lg text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{step.copy}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
