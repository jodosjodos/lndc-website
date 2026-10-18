// Headline numbers for the stats band. `value` animates; `prefix`/`suffix` stay put.
export const stats = [
  { value: 100, suffix: '%', label: 'O-Level pass rate', detail: '2024/25 national exams, 172 candidates', source: 'nesa-results-2025' },
  { value: 1, prefix: 'No. ', label: 'O-Level student in Rwanda', detail: 'Terimbere Ineza Alia Ange Stevine, 2023/24', source: 'best-student-2024' },
  { value: 2, prefix: 'No. ', label: 'O-Level student in Rwanda', detail: 'Ihimbazwe Niyikora Kevine, 2022/23', source: 'best-students-2023' },
  { value: 1, suffix: 'st', label: 'ORATOR national English competition', detail: 'Anabella Mutara, lower secondary, 2026', source: 'orator-2026' },
] as const;

export const milestones = [
  { year: '1098', title: 'The Abbey of Cîteaux is founded', text: 'In Burgundy, France, Cîteaux becomes the mother house of the Cistercian order, the family of the Bernardine Sisters who own LNDC today.' },
  { year: '1960s–70s', title: 'A future Prime Minister studies here', text: 'Agathe Uwilingiyimana spends seven years at LNDC. She later becomes the first woman to serve as Prime Minister of Rwanda.' },
  { year: '1994', title: 'Courage during the genocide', text: 'Sister Hélène Nayituriki, an alumna and teacher, protects more than 150 students, teachers and neighbours during the Genocide against the Tutsi.' },
  { year: '1997', title: 'Rebuilding together', text: 'Sister Hélène becomes headmistress and leads the school with one message: there are no ethnic groups at school, only students.' },
  { year: '2007', title: 'A nation says thank you', text: 'Sister Hélène receives a national medal for her role in protecting lives in 1994.' },
  { year: '2008', title: 'A model school', text: 'The New Times describes LNDC as a role-model school for discipline and academic performance.' },
  { year: '2013', title: 'Girls in ICT Day', text: "LNDC hosts Rwanda's Girls in ICT Day, welcoming students from six Kigali schools to meet women leaders in technology." },
  { year: '2024', title: 'Best in the country', text: 'Terimbere Ineza Alia Ange Stevine is ranked the best O-Level student in Rwanda.' },
  { year: '2025', title: 'Every candidate passes', text: 'All 172 LNDC candidates pass the 2024/25 O-Level national examinations.' },
  { year: '2026', title: 'A national voice', text: 'Anabella Mutara wins the lower secondary category of the first ORATOR National English Competition.' },
] as const;
