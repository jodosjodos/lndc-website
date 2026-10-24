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
  // Spellings people type into search, with and without accents.
  alternateNames: ['LNDC', 'Lycee Notre Dame de Citeaux', 'Lycée Notre Dame de Cîteaux', 'Notre Dame de Citeaux Secondary School'],
  profiles: [
    'https://x.com/LCiteaux',
    'https://rw.wikipedia.org/wiki/Lyc%C3%A9e_Notre-Dame_de_C%C3%AEteaux',
    'https://www.wikidata.org/wiki/Q106648211',
  ],
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

// Since September 2025 A-Level is organised into learning pathways (MINEDUC, REB); LNDC teaches Mathematics and Sciences.
export const pathway = {
  name: 'Mathematics and Sciences',
  languages: ['English', 'French', 'Kinyarwanda'],
  compulsory: ['ICT', 'Entrepreneurship', 'Religion and Ethics', 'Physical Education and Sports', 'General Studies'],
} as const;

export const streams = [
  {
    name: 'Stream 1',
    focus: 'Pure sciences',
    subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology'],
    formerly: ['MCB', 'PCB', 'PCM'],
    careers: 'Doctor, engineer, pharmacist, software developer, pilot, data analyst',
  },
  {
    name: 'Stream 2',
    focus: 'Science with economics',
    subjects: ['Mathematics', 'Economics', 'Geography', 'Physics'],
    formerly: ['MPG'],
    careers: 'Economist, financial analyst, GIS specialist, environmental planner',
  },
] as const;
