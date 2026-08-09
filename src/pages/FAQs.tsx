import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import { faqs, type Faq } from "../lib/data";

const groups: Faq["group"][] = ["Booking", "Pricing", "Delivery", "Usage"];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const byGroup = useMemo(
    () =>
      groups.map((group) => ({
        group,
        items: faqs.filter((f) => f.group === group),
      })),
    []
  );

  return (
    <div className="mx-auto max-w-4xl px-6 pb-28 pt-36 md:px-10">
      <Reveal>
        <span className="eyebrow">Questions</span>
        <h1 className="mt-3 font-display text-4xl font-light text-ink md:text-5xl">
          FAQs
        </h1>
        <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-mute">
          Everything we're asked most often before a shoot. Can't find your
          answer here?{" "}
          <Link to="/enquire" className="text-ink underline decoration-accent underline-offset-4 hover:text-accent transition-colors">
            Get in touch
          </Link>
          .
        </p>
      </Reveal>

      <div className="mt-16 space-y-14">
        {byGroup.map(({ group, items }) => (
          <div key={group}>
            <Reveal>
              <span className="font-mono text-[11px] uppercase tracking-widest2 text-accent">
                {group}
              </span>
            </Reveal>

            <div className="mt-4 divide-y divide-stone border-t border-stone">
              {items.map((faq) => {
                const id = `${group}-${faq.question}`;
                const isOpen = openIndex === id;
                return (
                  <div key={id}>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : id)}
                      className="flex w-full items-center justify-between gap-6 py-5 text-left"
                    >
                      <span className="font-display text-lg font-light text-ink md:text-xl">
                        {faq.question}
                      </span>
                      <span
                        className={`flex h-6 w-6 flex-none items-center justify-center font-mono text-lg text-mute transition-transform duration-400 ease-smooth ${
                          isOpen ? "rotate-45 text-accent" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="max-w-xl pb-6 text-sm leading-relaxed text-mute">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
