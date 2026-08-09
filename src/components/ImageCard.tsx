import { motion } from "framer-motion";
import type { WorkItem } from "../lib/data";

interface ImageCardProps {
  item: WorkItem;
  onOpen?: (item: WorkItem) => void;
  priority?: boolean;
}

const aspectClass: Record<WorkItem["aspect"], string> = {
  portrait: "aspect-[4/5]",
  square: "aspect-square",
  landscape: "aspect-[4/3]",
};

export default function ImageCard({ item, onOpen, priority }: ImageCardProps) {
  return (
    <motion.button
      type="button"
      onClick={() => onOpen?.(item)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group relative block w-full overflow-hidden bg-paper-deep text-left"
    >
      <div className={`relative overflow-hidden ${aspectClass[item.aspect]}`}>
        <img
          src={item.image}
          alt={item.title}
          loading={priority ? "eager" : "lazy"}
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-smooth group-hover:scale-[1.045]"
        />
        <div className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-500 ease-smooth group-hover:bg-ink/10" />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-all duration-400 ease-smooth group-hover:translate-y-0 group-hover:opacity-100">
          <span className="font-mono text-[10px] uppercase tracking-widest2 text-paper">
            {item.meta}
          </span>
        </div>
      </div>

      <div className="flex items-baseline justify-between pt-3">
        <span className="font-display text-[15px] text-ink">{item.title}</span>
        <span className="font-mono text-[11px] text-mute">{item.index}</span>
      </div>
    </motion.button>
  );
}
