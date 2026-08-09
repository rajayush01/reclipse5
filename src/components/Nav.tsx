import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const links = [
  { to: "/work", label: "Work" },
  { to: "/photography", label: "Photography" },
  { to: "/films", label: "Films" },
  { to: "/faqs", label: "FAQs" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ease-smooth ${
        scrolled ? "bg-paper/85 backdrop-blur-md border-b border-stone" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <NavLink to="/" className="font-display text-lg tracking-wide text-ink">
          STILL
        </NavLink>

        <nav className="flex items-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `group relative font-mono text-[11px] uppercase tracking-widest2 transition-colors duration-300 ${
                  isActive ? "text-ink" : "text-mute hover:text-ink"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ease-smooth ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}

          <NavLink
            to="/enquire"
            className={({ isActive }) =>
              `border px-4 py-2 font-mono text-[11px] uppercase tracking-widest2 transition-colors duration-300 ease-smooth ${
                isActive
                  ? "border-ink bg-ink text-paper"
                  : "border-ink text-ink hover:bg-ink hover:text-paper"
              }`
            }
          >
            Enquire
          </NavLink>
        </nav>
      </div>
    </motion.header>
  );
}
