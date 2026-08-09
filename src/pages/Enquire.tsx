import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";

const projectTypes = ["Photography", "Film", "Both"];
const budgets = ["Under ₹1L", "₹1L – ₹3L", "₹3L – ₹7L", "₹7L+"];
const timelines = ["Within 2 weeks", "This month", "Next quarter", "Just exploring"];

export default function Enquire() {
  const [submitted, setSubmitted] = useState(false);
  const [projectType, setProjectType] = useState(projectTypes[0]);
  const [budget, setBudget] = useState(budgets[0]);
  const [timeline, setTimeline] = useState(timelines[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-7xl px-6 pb-28 pt-36 md:px-10">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-24">
        <Reveal>
          <span className="eyebrow">Start a project</span>
          <h1 className="mt-3 font-display text-4xl font-light leading-tight text-ink md:text-5xl">
            Enquire
          </h1>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-mute">
            Tell us a little about what you're making and we'll come back
            within two working days with availability and a rough quote.
          </p>

          <div className="mt-12 space-y-4 border-t border-stone pt-8">
            <div>
              <span className="eyebrow">Email</span>
              <a href="mailto:hello@still-studio.com" className="mt-1 block text-[15px] text-ink hover:text-accent transition-colors">
                hello@still-studio.com
              </a>
            </div>
            <div>
              <span className="eyebrow">Phone</span>
              <a href="tel:+912200000000" className="mt-1 block text-[15px] text-ink hover:text-accent transition-colors">
                +91 22 0000 0000
              </a>
            </div>
            <div>
              <span className="eyebrow">Studio</span>
              <p className="mt-1 text-[15px] text-ink">Lower Parel, Mumbai</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex h-full min-h-[420px] flex-col justify-center border border-stone px-8 py-12"
            >
              <p className="font-display text-2xl text-ink">Enquiry sent.</p>
              <p className="mt-3 text-sm leading-relaxed text-mute">
                Thank you — we'll be in touch within two working days.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <Field label="Name" name="name" type="text" placeholder="Your full name" />
                <Field label="Email" name="email" type="email" placeholder="you@company.com" />
              </div>

              <SelectGroup
                label="Project type"
                value={projectType}
                onChange={setProjectType}
                options={projectTypes}
              />
              <SelectGroup
                label="Estimated budget"
                value={budget}
                onChange={setBudget}
                options={budgets}
              />
              <SelectGroup
                label="Timeline"
                value={timeline}
                onChange={setTimeline}
                options={timelines}
              />

              <div>
                <label htmlFor="message" className="eyebrow block">
                  Project details
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="What are we photographing or filming, and when?"
                  className="mt-3 w-full resize-none border-b border-stone bg-transparent py-2 text-[15px] text-ink placeholder:text-mute/60 focus:border-accent focus:outline-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="border border-ink px-8 py-3 font-mono text-[11px] uppercase tracking-widest2 text-ink transition-colors duration-300 hover:bg-ink hover:text-paper"
              >
                Send enquiry
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow block">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-3 w-full border-b border-stone bg-transparent py-2 text-[15px] text-ink placeholder:text-mute/60 focus:border-accent focus:outline-none transition-colors"
      />
    </div>
  );
}

function SelectGroup({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <div>
      <span className="eyebrow block">{label}</span>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`border px-4 py-2 font-mono text-[11px] uppercase tracking-widest2 transition-colors duration-300 ease-smooth ${
              value === option
                ? "border-ink bg-ink text-paper"
                : "border-stone text-mute hover:border-ink hover:text-ink"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
