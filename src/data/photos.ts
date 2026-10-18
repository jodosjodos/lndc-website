import type { ImageMetadata } from 'astro';

import culturalDance from '../assets/photos/cultural-dance.jpg';
import classroomFocus from '../assets/photos/classroom-focus.jpg';
import greatHall from '../assets/photos/great-hall.jpg';
import studentPortrait from '../assets/photos/student-portrait.jpg';
import studentsClapping from '../assets/photos/students-clapping.jpg';
import classApplause from '../assets/photos/class-applause.jpg';
import classSmile from '../assets/photos/class-smile.jpg';
import hallAudience from '../assets/photos/hall-audience.jpg';
import classPair from '../assets/photos/class-pair.jpg';
import classRow from '../assets/photos/class-row.jpg';
import bpgSign from '../assets/photos/bpg-sign.jpg';
import greatHallAbove from '../assets/photos/great-hall-above.jpg';
import bpgStudents from '../assets/photos/bpg-students.jpg';
import bpgCheer from '../assets/photos/bpg-cheer.jpg';
import bpgCrowd from '../assets/photos/bpg-crowd.jpg';
import kwibukaWalk from '../assets/photos/kwibuka-walk.jpg';
import kwibukaSilence from '../assets/photos/kwibuka-silence.jpg';
import kwibukaTalk from '../assets/photos/kwibuka-talk.jpg';
import kwibukaGuests from '../assets/photos/kwibuka-guests.jpg';

export type Credit = { name: string; url: string; license: string };
export type Album = 'learning' | 'celebration' | 'culture' | 'remembrance';
export type Photo = {
  src: ImageMetadata;
  alt: string;
  caption: string;
  credit: Credit;
  album: Album;
  /** CSS object-position, for crops that must keep faces in frame. */
  focus?: string;
};

const imbuto2025: Credit = {
  name: 'Imbuto Foundation',
  url: 'https://www.flickr.com/photos/196907695@N06/albums/72177720325982559',
  license: 'All rights reserved',
};
const imbuto2026: Credit = {
  name: 'Imbuto Foundation',
  url: 'https://www.flickr.com/photos/196907695@N06/albums/72177720334068629',
  license: 'All rights reserved',
};
const rdf: Credit = {
  name: 'Rwanda Defence Force',
  url: 'https://www.flickr.com/photos/rwandadefenceforce/albums/72177720325748633/',
  license: 'All rights reserved',
};
const commons: Credit = {
  name: 'Jelka Bisa / Wikimedia Commons',
  url: 'https://commons.wikimedia.org/wiki/File:Student_ballet_at_LNDC.jpg',
  license: 'CC BY-SA 4.0',
};

export const albums: Record<Album, string> = {
  learning: 'Learning together',
  celebration: 'Celebrating success',
  culture: 'Culture',
  remembrance: 'Remembrance',
};

export const photos = {
  culturalDance: {
    src: culturalDance,
    alt: 'LNDC students perform a traditional Rwandan dance on the Great Hall stage beneath the national flag',
    caption: 'Traditional dance at the launch of cultural month, May 2023',
    credit: commons,
    album: 'culture',
    focus: '50% 30%',
  },
  greatHallAbove: {
    src: greatHallAbove,
    alt: 'The Great Hall seen from the balcony, filled with students in white uniforms on blue chairs',
    caption: 'A full Great Hall for the Best Performing Girls awards, June 2026',
    credit: imbuto2026,
    album: 'celebration',
  },
  classApplause: {
    src: classApplause,
    alt: 'Two LNDC students applaud at their desks, one smiling broadly',
    caption: 'Applause during the alumni visit, May 2025',
    credit: imbuto2025,
    album: 'learning',
    focus: '50% 35%',
  },
  bpgSign: {
    src: bpgSign,
    alt: "A student in glasses holds a pink 'Inkubito y'Icyeza' sign, classmates beside her",
    caption: "Inkubito y'Icyeza: Imbuto Foundation's Best Performing Girls awards, June 2026",
    credit: imbuto2026,
    album: 'celebration',
    focus: '55% 40%',
  },
  classroomFocus: {
    src: classroomFocus,
    alt: 'Two students at a shared desk, one writing in a notebook, the other listening closely',
    caption: 'Taking notes during the alumni visit, May 2025',
    credit: imbuto2025,
    album: 'learning',
    focus: '50% 40%',
  },
  studentPortrait: {
    src: studentPortrait,
    alt: 'A smiling student in glasses sits with her hands folded on her desk',
    caption: 'Listening in the Great Hall, May 2025',
    credit: imbuto2025,
    album: 'learning',
    focus: '45% 35%',
  },
  studentsClapping: {
    src: studentsClapping,
    alt: 'A student in round glasses laughs and claps with her classmates',
    caption: 'Joy in the room during the alumni visit, May 2025',
    credit: imbuto2025,
    album: 'learning',
    focus: '35% 40%',
  },
  classSmile: {
    src: classSmile,
    alt: 'Students seated in rows, smiling towards the stage',
    caption: 'Front row at the alumni visit, May 2025',
    credit: imbuto2025,
    album: 'learning',
  },
  classPair: {
    src: classPair,
    alt: 'Two students sit side by side, one smiling with her chin on her hands',
    caption: 'Classmates at the alumni visit, May 2025',
    credit: imbuto2025,
    album: 'learning',
  },
  classRow: {
    src: classRow,
    alt: 'A row of smiling students at their desks in the Great Hall',
    caption: 'Smiles from the front row, May 2025',
    credit: imbuto2025,
    album: 'learning',
  },
  hallAudience: {
    src: hallAudience,
    alt: 'Rows of students in the Great Hall listening to a speaker',
    caption: 'Mentorship session with Best Performing Girls alumnae, May 2025',
    credit: imbuto2025,
    album: 'learning',
  },
  greatHall: {
    src: greatHall,
    alt: 'The Great Hall from the back: rows of students at desks facing a panel of speakers on stage',
    caption: 'The Great Hall, May 2025',
    credit: imbuto2025,
    album: 'learning',
  },
  bpgStudents: {
    src: bpgStudents,
    alt: 'Students in pink Imbuto Foundation T-shirts seated together in the hall',
    caption: 'Award winners at the Best Performing Girls ceremony, June 2026',
    credit: imbuto2026,
    album: 'celebration',
  },
  bpgCheer: {
    src: bpgCheer,
    alt: 'Students hold up a pink sign and cheer in the hall',
    caption: 'Cheering on the award winners, June 2026',
    credit: imbuto2026,
    album: 'celebration',
  },
  bpgCrowd: {
    src: bpgCrowd,
    alt: 'Students in pink T-shirts watch the ceremony from their seats',
    caption: 'Best Performing Girls ceremony, June 2026',
    credit: imbuto2026,
    album: 'celebration',
  },
  kwibukaWalk: {
    src: kwibukaWalk,
    alt: 'Students holding hymn books walk and sing in procession, led by a Sister and a Rwanda Defence Force officer',
    caption: 'Walking in remembrance during Kwibuka31, 30 April 2025',
    credit: rdf,
    album: 'remembrance',
  },
  kwibukaSilence: {
    src: kwibukaSilence,
    alt: 'Hundreds of students stand with heads bowed in the Great Hall',
    caption: 'A moment of silence in the Great Hall, Kwibuka31',
    credit: rdf,
    album: 'remembrance',
  },
  kwibukaTalk: {
    src: kwibukaTalk,
    alt: 'Students listen as the Rwanda Defence Force spokesperson speaks from the stage',
    caption: 'The Defence Spokesperson addresses students, Kwibuka31',
    credit: rdf,
    album: 'remembrance',
  },
  kwibukaGuests: {
    src: kwibukaGuests,
    alt: 'A Sister, staff, parents and guests seated among students at the commemoration',
    caption: 'Sisters, staff and guests at the Kwibuka31 commemoration',
    credit: rdf,
    album: 'remembrance',
  },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;
export const allPhotos: Photo[] = Object.values(photos);
