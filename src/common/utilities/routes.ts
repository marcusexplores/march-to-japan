import { IconType } from 'react-icons';
import { GoChecklist } from 'react-icons/go';
import { IoHomeOutline } from 'react-icons/io5';
import { MdOutlineAttachMoney, MdOutlineTimeline } from 'react-icons/md';

export const routes = {
  root: '/',
  itinerary: {
    day0: {
      root: '/itinerary/day-0',
      airport: '/itinerary/day-0/changi-airport',
      lounge: '/itinerary/day-0/changi-lounge',
      flight: '/itinerary/day-0/flight',
    },
    day1: {
      root: '/itinerary/day-1',
      airport: '/itinerary/day-1/narita-airport',
      train: '/itinerary/day-1/narita-express',
      hotel: '/itinerary/day-1/shinjuku-washington-hotel',
      lunch: '/itinerary/day-1/gyukatsu-motomura',
      takeshita: '/itinerary/day-1/takeshita-street',
      shrine: '/itinerary/day-1/meiji-shrine',
      park: '/itinerary/day-1/yoyogi-park',
      shibuyaSky: '/itinerary/day-1/shibuya-sky',
      dinner: '/itinerary/day-1/hobo-shinjuku-norengai',
    },
    day2: {
      root: '/itinerary/day-2',
      meguro: '/itinerary/day-2/meguro-river',
      donki: '/itinerary/day-2/mega-don-quijote',
      mugiwara: '/itinerary/day-2/mugiwara-store',
      lunch: '/itinerary/day-2/soup-noodle-ramen',
      parco: '/itinerary/day-2/parco',
      animate: '/itinerary/day-2/animate',
      dinner: '/itinerary/day-2/nadai-fujisoba',
    },
    day3: {
      root: '/itinerary/day-3',
      starbucks: '/itinerary/day-3/starbucks',
      cafe: '/itinerary/day-3/dawn-avatar-robot-cafe',
      akihabara: '/itinerary/day-3/akihabara',
      tower: '/itinerary/day-3/red-tower',
    },
    day4: {
      root: '/itinerary/day-4',
      park: '/itinerary/day-4/ueno-park',
      cafe: '/itinerary/day-4/at-home-cafe',
      akihabara: '/itinerary/day-4/akihabara',
      joypolis: '/itinerary/day-4/tokyo-joypolis',
      museum: '/itinerary/day-4/takoyaki-museum',
      lotteria: '/itinerary/day-4/lotteria',
    },
    day5: {
      root: '/itinerary/day-5',
      university: '/itinerary/day-5/university-of-tokyo',
      ameyoko: '/itinerary/day-5/ameyoko',
      akihabara: '/itinerary/day-5/akihabara',
      stadium: '/itinerary/day-5/asakusa-batting-stadium',
      skytree: '/itinerary/day-5/tokyo-skytree',
      dinner: '/itinerary/day-5/grill-cardinal',
      cafe: '/itinerary/day-5/hailey-cafe',
    },
    day6: {
      root: '/itinerary/day-6',
      anime: '/itinerary/day-6/anime-japan',
      shinjuku: '/itinerary/day-6/shinjuku-station',
      hotel: '/itinerary/day-6/wisterian-life-club-verde-no-mori',
    },
    day7: {
      root: '/itinerary/day-7',
      gotemba: '/itinerary/day-7/gotemba-premium-outlet',
      cruise: '/itinerary/day-7/hakone-sightseeing-cruise',
      shrine: '/itinerary/day-7/hakone-shrine',
    },
    day8: {
      root: '/itinerary/day-8',
      mishima: '/itinerary/day-8/mishima-sky-walk',
      musuem: '/itinerary/day-8/kyoto-international-manga-museum',
      hotel: '/itinerary/day-8/hotel-wing-international-kyoto-shijo-karasuma',
    },
    day9: {
      root: '/itinerary/day-9',
      iwatayama: '/itinerary/day-9/iwatayama-monkey-forest',
      kotogase: '/itinerary/day-9/kotogase-tea-house',
      arashiyama: '/itinerary/day-9/arashiyama-bamboo-grove',
      higashiyama: '/itinerary/day-9/higashiyama-district',
      fushimi: '/itinerary/day-9/fushimi-inari-taisha',
      dinner: '/itinerary/day-9/katsu-curry',
    },
    day10: {
      root: '/itinerary/day-10',
      park: '/itinerary/day-10/nara-park',
      hotel: '/itinerary/day-10/kuromon-crystal-hotel',
      lunch: '/itinerary/day-10/genrokuzushi',
      round1: '/itinerary/day-10/round1-stadium',
      shinsaibashi: '/itinerary/day-10/shinsaibashi-suji',
    },
    day11: {
      root: '/itinerary/day-11',
      market: '/itinerary/day-11/kuromon-market',
      dendenTown: '/itinerary/day-11/denden-town',
      umeda: '/itinerary/day-11/umeda-sky-building',
      dinner: '/itinerary/day-11/kura-sushi',
    },
    day12: {
      root: '/itinerary/day-12',
      ichiran: '/itinerary/day-12/ichiran',
      park: '/itinerary/day-12/osaka-maishima-seaside-park',
      aquarium: '/itinerary/day-12/osaka-aquarium',
      onsen: '/itinerary/day-12/solaniwa-onsen',
    },
    day13: {
      root: '/itinerary/day-13',
      dendenTown: '/itinerary/day-13/denden-town',
      teamlab: '/itinerary/day-13/teamlab-botanic-gardens',
    },
    day14: {
      root: '/itinerary/day-14',
      flight: '/itinerary/day-14/flight',
    },
  },
  expenditure: {
    root: '/expenditure',
  },
  preparation: {
    root: '/preparation',
  },
} as const satisfies Record<
  string,
  string | Record<string, string | Record<string, string>>
>;

export interface NavRoute {
  name: string;
  path: string;
  icon: IconType;
}

export const navRoutes = [
  {
    name: 'Home',
    path: routes.root,
    icon: IoHomeOutline,
  },
  {
    name: 'Itinerary',
    path: routes.itinerary.day0.root,
    icon: MdOutlineTimeline,
  },
  {
    name: 'Expenditure',
    path: routes.expenditure.root,
    icon: MdOutlineAttachMoney,
  },
  {
    name: 'Preparation',
    path: routes.preparation.root,
    icon: GoChecklist,
  },
] as const satisfies NavRoute[];
