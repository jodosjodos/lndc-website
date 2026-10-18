export const school = {
  name: 'Lycée Notre-Dame de Cîteaux',
  short: 'LNDC',
  description:
    "A Catholic boarding secondary school for girls in Kiyovu, Kigali, owned by the Bernardine Sisters and offering O-Level and A-Level studies.",
  motto: { rw: 'Byose mu rukundo', en: 'All things in love' },
  headTeacher: 'Antoinette Masengesho',
  email: 'info@lndc.rw',
  phone: { display: '+250 788 465 767', href: 'tel:+250788465767' },
  poBox: 'P.O. Box 607',
  city: 'Kigali, Rwanda',
  area: 'Kiyovu, Nyarugenge District',
  x: { handle: '@LCiteaux', url: 'https://x.com/LCiteaux' },
  geo: { lat: -1.9545042, lon: 30.0600872 },
} as const;

export const nav = [
  { href: '/about', label: 'About' },
  { href: '/academics', label: 'Academics' },
  { href: '/student-life', label: 'Student Life' },
  { href: '/admissions', label: 'Admissions' },
  { href: '/news', label: 'News' },
  { href: '/gallery', label: 'Gallery' },
] as const;

// From the values sign on campus, headed "Tugomba twese" — "We must all".
export const values = [
  { rw: 'Kubaha Imana', en: 'Respect God', note: 'Faith is the foundation of everything we do.' },
  { rw: 'Kubaha abandi', en: 'Respect others', note: 'Courtesy and kindness towards everyone we meet.' },
  { rw: 'Kwiyubaha', en: 'Respect yourself', note: 'Dignity in how we speak, study and carry ourselves.' },
  { rw: 'Kubahana', en: 'Respect one another', note: 'Respect that flows in every direction.' },
  { rw: 'Gufatanya', en: 'Work together', note: 'Achieving more through shared effort.' },
  { rw: 'Gufashanya', en: 'Help one another', note: 'Lifting each other up, in class and beyond.' },
  { rw: 'Kuba indashyikirwa', en: 'Be outstanding', note: 'Striving for excellence in all that we do.' },
] as const;

// Source: NESA list of accredited schools in Nyarugenge District.
export const combinations = [
  { code: 'MCB', name: 'Mathematics, Chemistry, Biology', path: 'Medicine, pharmacy, biotechnology and the life sciences' },
  { code: 'PCB', name: 'Physics, Chemistry, Biology', path: 'Medicine, nursing, laboratory and health sciences' },
  { code: 'PCM', name: 'Physics, Chemistry, Mathematics', path: 'Engineering, architecture and the physical sciences' },
  { code: 'MPG', name: 'Mathematics, Physics, Geography', path: 'Engineering, surveying, environmental and earth sciences' },
] as const;
