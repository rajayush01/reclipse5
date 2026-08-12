import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";
import img4 from "../assets/img4.webp";
import img5 from "../assets/img5.webp";
import img6 from "../assets/img6.webp";
import img7 from "../assets/img7.webp";
import img8 from "../assets/img8.webp";
import img9 from "../assets/img9.webp";
import img10 from "../assets/img10.webp";
import img11 from "../assets/img11.webp";
import img12 from "../assets/img12.webp";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
];

export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Returns a deterministic local image based on the seed.
 * Uses the imported assets instead of an external image service.
 */
export function placeholderImage(
  seed: string,
  _width: number,
  _height: number
): string {
  let hash = 0;

  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }

  const index = Math.abs(hash) % images.length;

  return images[index];
}

export function readingTime(wordCount: number): number {
  return Math.max(1, Math.round(wordCount / 200));
}