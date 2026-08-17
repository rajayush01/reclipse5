import img1 from "../assets/img1.webp"
import img2 from "../assets/img2.webp"
import img3 from "../assets/img3.webp"
import img4 from "../assets/img4.webp"
import img5 from "../assets/img5.webp"
import img6 from "../assets/img6.webp"
import img7 from "../assets/img7.webp"
import img8 from "../assets/img8.webp"
import img9 from "../assets/img9.webp"
import img10 from "../assets/img10.webp"
import img11 from "../assets/img11.webp"


export type WorkCategory = "Ceramics" | "Textiles" | "Objects" | "Light Studies";

export interface WorkItem {
  id: string;
  index: string; // catalogue number, e.g. "01"
  title: string;
  category: WorkCategory;
  year: string;
  meta: string; // exif-style caption
  image: string;
  aspect: "portrait" | "square" | "landscape";
}

export const works: WorkItem[] = [
  {
    id: "porcelain-form",
    index: "01",
    title: "Porcelain Form",
    category: "Ceramics",
    year: "2025",
    meta: "f/8 · 100mm · natural light",
    image: img1,
    aspect: "portrait",
  },
  {
    id: "raw-linen",
    index: "02",
    title: "Raw Linen",
    category: "Textiles",
    year: "2025",
    meta: "f/4 · 85mm · softbox",
    image: img2,
    aspect: "landscape",
  },
  {
    id: "brass-object",
    index: "03",
    title: "Brass Object No. 3",
    category: "Objects",
    year: "2024",
    meta: "f/11 · 100mm · continuous",
    image: img3,
    aspect: "square",
  },
  {
    id: "afternoon-shadow",
    index: "04",
    title: "Afternoon Shadow Study",
    category: "Light Studies",
    year: "2024",
    meta: "f/2.8 · 50mm · window light",
    image: img4,
    aspect: "portrait",
  },
  {
    id: "unglazed-clay",
    index: "05",
    title: "Unglazed Clay",
    category: "Ceramics",
    year: "2024",
    meta: "f/5.6 · 100mm · natural light",
    image: img5,
    aspect: "landscape",
  },
  {
    id: "woven-edge",
    index: "06",
    title: "Woven Edge",
    category: "Textiles",
    year: "2024",
    meta: "f/6.3 · 90mm · softbox",
    image: img6,
    aspect: "square",
  },
  {
    id: "steel-vessel",
    index: "07",
    title: "Steel Vessel",
    category: "Objects",
    year: "2023",
    meta: "f/9 · 100mm · continuous",
    image: img7,
    aspect: "portrait",
  },
  {
    id: "morning-glass",
    index: "08",
    title: "Morning, Glass",
    category: "Light Studies",
    year: "2023",
    meta: "f/2 · 50mm · window light",
    image: img8,
    aspect: "landscape",
  },
  {
    id: "stacked-bowls",
    index: "09",
    title: "Stacked Bowls",
    category: "Ceramics",
    year: "2023",
    meta: "f/8 · 100mm · natural light",
    image: img9,
    aspect: "square",
  },
];

export const categories: WorkCategory[] = ["Ceramics", "Textiles", "Objects", "Light Studies"];

// ---------------------------------------------------------------------------
// Client photography — case-study style projects (distinct from the Work
// archive, which is the studio's own curated portfolio).
// ---------------------------------------------------------------------------
export interface ClientProject {
  id: string;
  client: string;
  title: string;
  category: WorkCategory;
  year: string;
  description: string;
  images: string[];
}

export const clientProjects: ClientProject[] = [
  {
    id: "kumhar-ceramics",
    client: "Kumhar Ceramics",
    title: "A catalogue for a slow ceramics studio",
    category: "Ceramics",
    year: "2025",
    description:
      "Forty pieces photographed over three days in natural light, for a catalogue that had to read as calmly as the studio makes its work.",
    images: [
      img10,img1,img2
    ],
  },
  {
    id: "linen-house",
    client: "The Linen House",
    title: "Texture-first product photography for a linen label",
    category: "Textiles",
    year: "2024",
    description:
      "A campaign built entirely around how the fabric folds and holds light — shot on location in a north-facing studio.",
    images: [
      img3,img4,img11
    ],
  },
  {
    id: "forge-objects",
    client: "Forge & Co.",
    title: "A brass hardware line, shot like sculpture",
    category: "Objects",
    year: "2024",
    description:
      "Small brass fittings photographed at a scale usually reserved for jewellery, to give an everyday product a sense of weight.",
    images: [
      img5,img6,img7
    ],
  },
];

// ---------------------------------------------------------------------------
// Films — motion work, played inline via a lightweight lightbox.
// Thumbnails and clips are placeholders; swap for real assets.
// ---------------------------------------------------------------------------
export interface Film {
  id: string;
  title: string;
  client: string;
  duration: string;
  year: string;
  thumbnail: string;
  videoUrl: string;
}

export const films: Film[] = [
  {
    id: "kumhar-film",
    title: "In the Studio — Kumhar Ceramics",
    client: "Kumhar Ceramics",
    duration: "1:42",
    year: "2025",
    thumbnail: img8,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
  {
    id: "linen-film",
    title: "Woven — The Linen House",
    client: "The Linen House",
    duration: "0:58",
    year: "2024",
    thumbnail: img9,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    id: "forge-film",
    title: "Cast & Cut — Forge & Co.",
    client: "Forge & Co.",
    duration: "2:15",
    year: "2024",
    thumbnail: img10,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
];

// ---------------------------------------------------------------------------
// FAQs
// ---------------------------------------------------------------------------
export interface Faq {
  question: string;
  answer: string;
  group: "Booking" | "Pricing" | "Delivery" | "Usage";
}

export const faqs: Faq[] = [
  {
    group: "Booking",
    question: "How far in advance should we book?",
    answer:
      "Most shoots book two to four weeks out. For larger catalogues or multi-day shoots, we'd suggest reaching out six to eight weeks ahead so we can plan light and set properly.",
  },
  {
    group: "Booking",
    question: "Do you shoot on location or studio only?",
    answer:
      "Both. Around two-thirds of our work happens in our Lower Parel studio, where we control light precisely — but we regularly shoot on location when the object or brand calls for it.",
  },
  {
    group: "Pricing",
    question: "How is a shoot priced?",
    answer:
      "By day rate plus deliverables — the number of final retouched images or the length of a finished film. Send us the brief through Enquire and we'll come back with a clear quote.",
  },
  {
    group: "Pricing",
    question: "Is retouching included?",
    answer:
      "Yes. Every delivered image is colour-corrected and retouched to our studio standard as part of the day rate — no separate line item.",
  },
  {
    group: "Delivery",
    question: "What's the typical turnaround?",
    answer:
      "Five to seven working days for a standard photography set. Films usually take one to two weeks longer, depending on the edit and any sound design involved.",
  },
  {
    group: "Delivery",
    question: "What file formats do we receive?",
    answer:
      "High-resolution TIFF and web-ready JPEG for RECLIPSEs, delivered via a private gallery link. Films are delivered as ProRes masters plus compressed web versions.",
  },
  {
    group: "Usage",
    question: "Who owns the final images?",
    answer:
      "You receive a full usage licence for the agreed purpose — typically e-commerce, catalogue, and social. Extended or exclusive licensing can be arranged separately.",
  },
  {
    group: "Usage",
    question: "Can we reshoot or request revisions?",
    answer:
      "One round of minor revisions is included on every project. Beyond that, we're happy to schedule an additional half-day at our standard rate.",
  },
];
