// Every public claim on the site traces back to one of these sources.
export type Source = {
  id: string;
  outlet: string;
  title: string;
  /** 'YYYY', 'YYYY-MM' or 'YYYY-MM-DD': only as precise as the source itself. */
  date: string;
  url: string;
  summary: string;
  kind: 'article' | 'photos' | 'video' | 'record';
};

export const sources: Source[] = [
  {
    id: 'orator-2026',
    outlet: 'Rwanda Basic Education Board',
    title: 'From BK Arena to the United Kingdom: ORATOR competition rewards outstanding students',
    date: '2026-07-19',
    url: 'https://www.reb.gov.rw/news-detail/from-bk-arena-to-the-united-kingdom-orator-competition-opens-a-new-chapter-for-english-proficiency-rewarding-30-outstanding-students-with-an-international-leadership-experience',
    summary:
      'Anabella Mutara of LNDC is named national winner of the lower secondary category at the first ORATOR National English Competition.',
    kind: 'article',
  },
  {
    id: 'bpg-awards-2026',
    outlet: 'Imbuto Foundation',
    title: 'Awarding the Best Performing Girls at Lycée Notre Dame de Cîteaux',
    date: '2026-06-05',
    url: 'https://www.flickr.com/photos/196907695@N06/albums/72177720334068629',
    summary: "LNDC hosts Imbuto Foundation's Inkubito y'Icyeza ceremony celebrating girls who excelled in national examinations.",
    kind: 'photos',
  },
  {
    id: 'nesa-results-2025',
    outlet: 'The New Times',
    title: 'National exams: Top-ranking schools announced',
    date: '2025-08-29',
    url: 'https://www.newtimes.co.rw/article/29280/news/education/national-exams-top-ranking-schools-announced/amp',
    summary: 'LNDC is listed among high-performing O-Level schools, with all 172 candidates passing the 2024/25 national exams.',
    kind: 'article',
  },
  {
    id: 'cmc-2025',
    outlet: 'YouTube',
    title: '4th Place: Lycée Notre Dame de Citeaux Kigali — Rosas Pandan (arr. G. G. Hernandez), CMC 2025',
    date: '2025',
    url: 'https://www.youtube.com/watch?v=PNSTy4TSLf0',
    summary: "The LNDC choir's performance of Rosas Pandan, which placed fourth at the CMC 2025 choral competition.",
    kind: 'video',
  },
  {
    id: 'bpg-visit-2025',
    outlet: 'Imbuto Foundation',
    title: 'BPG Alumni Visit at Lycée Notre Dame de Cîteaux',
    date: '2025-05-07',
    url: 'https://www.flickr.com/photos/196907695@N06/albums/72177720325982559',
    summary: 'Alumnae of the Best Performing Girls programme return to mentor LNDC students in the Great Hall.',
    kind: 'photos',
  },
  {
    id: 'kwibuka31',
    outlet: 'Rwanda Defence Force',
    title: 'Defence Spokesperson joins Lycée Notre Dame de Cîteaux at #Kwibuka31',
    date: '2025-04-30',
    url: 'https://www.flickr.com/photos/rwandadefenceforce/albums/72177720325748633/',
    summary: 'Students, Sisters, staff and guests commemorate the 1994 Genocide against the Tutsi together.',
    kind: 'photos',
  },
  {
    id: 'best-student-2024',
    outlet: 'KT Press',
    title: 'The best student for PLE dreams to be Rwanda’s Minister of Education',
    date: '2024-08-27',
    url: 'https://www.ktpress.rw/2024/08/the-best-student-for-ple-dreams-to-be-rwandas-minister-of-education/',
    summary: 'Terimbere Ineza Alia Ange Stevine of LNDC is ranked the best O-Level student in Rwanda for 2023/24.',
    kind: 'article',
  },
  {
    id: 'money-makeover-2024',
    outlet: 'KT Press',
    title: 'Stella Matutina scoops 2024 Money Makeover Challenge',
    date: '2024-06-17',
    url: 'https://www.ktpress.rw/2024/06/stella-matutina-scoops-2024-money-makeover-challenge/',
    summary: 'LNDC debaters compete in the 2024 Money Makeover Challenge run by iDebate Rwanda and the BK Foundation.',
    kind: 'article',
  },
  {
    id: 'best-students-2023',
    outlet: 'KT Press',
    title: 'National exams results: best students awarded',
    date: '2023-09',
    url: 'https://www.ktpress.rw/2023/09/national-exams-results-best-students-awarded/',
    summary: 'Ihimbazwe Niyikora Kevine of LNDC is honoured as the second-best O-Level student in the country.',
    kind: 'article',
  },
  {
    id: 'cultural-month-2023',
    outlet: 'Wikimedia Commons',
    title: 'Student ballet at LNDC',
    date: '2023-05-07',
    url: 'https://commons.wikimedia.org/wiki/File:Student_ballet_at_LNDC.jpg',
    summary: 'LNDC dancers perform at the official launch of cultural month.',
    kind: 'photos',
  },
  {
    id: 'gsr-helene-2022',
    outlet: 'Global Sisters Report',
    title: 'Q&A with Sr. Hélène Nayituriki, who saved 150 people during Rwanda’s genocide',
    date: '2022-03-29',
    url: 'https://www.globalsistersreport.org/qas/q-sr-helene-nayituriki-who-saved-150-people-during-rwandas-genocide',
    summary: 'The former headmistress, an LNDC alumna, recalls protecting students, teachers and neighbours in 1994.',
    kind: 'article',
  },
  {
    id: 'girls-ict-2013',
    outlet: 'The New Times',
    title: 'Rwanda marks Girls in ICT Day',
    date: '2013-04-26',
    url: 'https://www.newtimes.co.rw/article/91652/National/rwanda-marks-girls-in-ict-day/amp',
    summary: "LNDC hosts Rwanda's Girls in ICT Day, where about 100 students from six Kigali schools meet women leaders in technology.",
    kind: 'article',
  },
  {
    id: 'model-school-2008',
    outlet: 'The New Times',
    title: 'Lycée Notre-Dame de Cîteaux, a model school',
    date: '2008-03-26',
    url: 'https://www.newtimes.co.rw/article/6242/lyce-notre-dame-de-cteaux-a-model-school',
    summary: 'LNDC is described as a role-model school for discipline and academic performance.',
    kind: 'article',
  },
];

// Background sources used in the About page, not shown as news.
export const references = {
  nesaList: 'https://www.nesa.gov.rw/index.php?eID=dumpFile&t=f&f=107850&token=bdc15b35260d2854f25bc9b415afc7f163fe0f13',
  nesaPlacement: 'https://www.nesa.gov.rw/online-services/nesa-conducts-onsite-visits-to-boarding-schools-nationwide-for-fair-placement',
  nesaLaw: 'https://www.ktpress.rw/2023/09/nesa-warns-head-teachers-on-students-placement/',
  pathways: 'https://www.mineduc.gov.rw/news-detail/rwanda-introduces-new-a-level-learning-pathways-in-general-education',
  streams: 'https://www.africa-press.net/rwanda/culture-and-art/reb-unpacks-three-learning-pathways-for-students',
  agathe: 'https://en.wikipedia.org/wiki/Agathe_Uwilingiyimana',
  agatheNewTimes: 'https://www.newtimes.co.rw/article/4677/news/rwanda/agathe-uwilingiyimana-a-hero-whose-entire-political-career-had-seen-constant-threats',
  helene: 'https://en.wikipedia.org/wiki/Helene_Nayituriki',
  citeaux: 'https://en.wikipedia.org/wiki/C%C3%AEteaux_Abbey',
  bernardines: 'https://citeaux-abbaye.org/en/the-cistercians-yesterday-today-tomorrow/the-family/bernardines',
} as const;

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export function formatDate(date: string) {
  const [y, m, d] = date.split('-');
  if (!m) return y;
  if (!d) return `${months[+m - 1]} ${y}`;
  return `${+d} ${months[+m - 1]} ${y}`;
}

export const byId = (id: string) => {
  const s = sources.find((x) => x.id === id);
  if (!s) throw new Error(`Unknown source: ${id}`);
  return s;
};
