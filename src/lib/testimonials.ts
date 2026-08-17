import { placeholderImage } from './utils'

export interface Testimonial {
  id: string
  slug: string
  headline: string
  body: string
  name: string
  role: string
  image: string
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    slug: 'elin-marcus',
    headline: 'The day, not a performance of it.',
    body:
      'She photographed our wedding the way we *actually* experienced it — unhurried, a little imperfect, entirely ours. We look at the gallery and remember **the day itself**, not a performance of it.',
    name: 'Elin & Marcus',
    role: 'Wedding, Öland',
    image: placeholderImage('testimonial-elin-marcus', 900, 1100),
  },
  {
    id: 't2',
    slug: 'sofia-renn',
    headline: 'Better questions than our own team.',
    body:
      'We brought Kaia in for a campaign we thought we understood, and she asked **better questions** than our own team had. The images ended up carrying *the whole launch*.',
    name: 'Sofia Renn',
    role: 'Creative Director, Halvorsen & Co.',
    image: placeholderImage('testimonial-sofia-renn', 900, 1100),
  },
  {
    id: 't3',
    slug: 'daniel-okafor',
    headline: 'Not a photoshoot. A long walk with a friend.',
    body:
      'The portrait session did not feel like a photoshoot. It felt like **a long walk with a friend** who happened to be holding a camera at *exactly* the right moments.',
    name: 'Daniel Okafor',
    role: 'Portrait client',
    image: placeholderImage('testimonial-daniel-okafor', 900, 1100),
  },
  {
    id: 't4',
    slug: 'nadia-brandt',
    headline: 'Film day felt like the calmest part of the wedding.',
    body:
      'Having the film crew alongside the RECLIPSEs meant we never had to perform a second time for the camera. Watching it back is **the closest thing** we have to reliving the day.',
    name: 'Nadia Brandt',
    role: 'Wedding Film, Malmö',
    image: placeholderImage('testimonial-nadia-brandt', 900, 1100),
  },
]

export const brands = [
  'Halvorsen & Co.',
  'Nordvik Hospitality',
  'Atelier Nine',
  'Studio Marlin',
  'Fjord & Field',
  'Linden House',
]
