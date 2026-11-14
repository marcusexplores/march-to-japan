import { ComponentType } from 'react';
import { routes } from '@/src/common/utilities/routes';
import { Day1ChangiAirport } from '../activity';

export interface ItineraryActivity {
  name: string;
  description: string;
  time: string;
  route?: string;
  component?: ComponentType;
}

interface ItineraryDay {
  name: string;
  date: string;
  route: string;
  activities?: ItineraryActivity[];
}

export const itineraryDays = [
  {
    name: 'Day 0',
    date: '19 March 2023',
    route: routes.itinerary.day0.root,
    activities: [
      {
        name: 'Changi Airport',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '19:00',
        route: routes.itinerary.day0.airport,
        component: Day1ChangiAirport,
      },
      {
        name: 'Lounge',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '20:30',
        route: routes.itinerary.day0.lounge,
      },
      {
        name: 'Departure',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '22:20',
        route: routes.itinerary.day0.lounge,
      },
    ],
  },
  {
    name: 'Day 1',
    date: '20 March 2023',
    route: routes.itinerary.day1.root,
    activities: [
      {
        name: 'Narita International Airport',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '06:00',
        route: routes.itinerary.day1.airport,
      },
      {
        name: 'Narita Express Train',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '08:13',
        route: routes.itinerary.day1.train,
      },
      {
        name: 'Shinjuku Washington Hotel',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '10:45',
      },
      {
        name: 'Gyukatsu Motomura',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '11:45',
      },
      {
        name: 'Takeshita Street',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '13:15',
      },
      {
        name: 'Meiji Shrine',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '14:00',
      },
      {
        name: 'Yoyogi Park',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '15:15',
      },
      {
        name: 'Shibuya Sky',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '16:30',
      },
      {
        name: 'Hobo Shinjuku Norengai',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '18:45',
      },
    ],
  },
  {
    name: 'Day 2',
    date: '21 March 2023',
    route: routes.itinerary.day2.root,
    activities: [
      {
        name: 'Meguro River',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '09:30',
      },
      {
        name: 'MEGA Don Quijote Shibuya Honten',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '11:00',
      },
      {
        name: 'One Piece Mugiwara Store',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '13:30',
      },
      {
        name: 'Soup Noodle Ramen',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '14:30',
      },
      {
        name: 'Shibuya Parco',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '15:00',
      },
      {
        name: 'Animate Ikebukuro',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '17:30',
      },
      {
        name: 'Nadai Fujisoba',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '20:40',
      },
    ],
  },
  {
    name: 'Day 3',
    date: '22 March 2023',
    route: routes.itinerary.day3.root,
    activities: [
      {
        name: 'Tokyo Roastery | Starbucks Reserve®',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '08:00',
      },
      {
        name: 'DAWN Avatar Robot Café',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '11:30',
      },
      {
        name: 'Akihabara',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '12:30',
      },
      {
        name: 'Meal',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '16:45',
      },
      {
        name: 'RED° TOKYO TOWER',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '17:30',
      },
      {
        name: 'Dinner',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '21:00',
      },
    ],
  },
  {
    name: 'Day 4',
    date: '23 March 2023',
    route: routes.itinerary.day4.root,
    activities: [
      {
        name: 'Ueno Park',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '09:45',
      },
      {
        name: 'at-home cafe',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '11:00',
      },
      {
        name: 'Akihabara',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '12:30',
      },
      {
        name: 'Tokyo Joypolis',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '16:15',
      },
      {
        name: 'Takoyaki Museum',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '19:00',
      },
      {
        name: 'Lotteria',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '20:30',
      },
    ],
  },
  {
    name: 'Day 5',
    date: '24 March 2023',
    route: routes.itinerary.day5.root,
    activities: [
      {
        name: 'University of Tokyo',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '09:30',
      },
      {
        name: 'J.Chicken',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '11:00',
      },
      {
        name: 'Ameyoko Shopping Street',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '11:30',
      },
      {
        name: 'Akihabara',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '12:15',
      },
      {
        name: 'Asakusa Batting Stadium',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '17:00',
      },
      {
        name: 'Tokyo Skytree',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '18:00',
      },
      {
        name: 'Grill Cardinal',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '19:00',
      },
      {
        name: 'Hailey Cafe',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '21:00',
      },
    ],
  },
  {
    name: 'Day 6',
    date: '25 March 2023',
    route: routes.itinerary.day6.root,
    activities: [
      {
        name: 'AnimeJapan',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '09:30',
      },
      {
        name: 'Shinjuku Station',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '13:45',
      },
      {
        name: 'Wisterian Life Club Verde No Mori',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '20:15',
      },
    ],
  },
  {
    name: 'Day 7',
    date: '26 March 2023',
    route: routes.itinerary.day7.root,
    activities: [
      {
        name: 'Gotemba Premium Outlet',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '10:30',
      },
      {
        name: 'Hakone Sightseeing Cruise',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '14:25',
      },
      {
        name: 'Hakone Shrine',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '15:30',
      },
      {
        name: 'Public Bath',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '20:15',
      },
    ],
  },
  {
    name: 'Day 8',
    date: '27 March 2023',
    route: routes.itinerary.day8.root,
    activities: [
      {
        name: 'Mishima Sky Walk',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '09:45',
      },
      {
        name: 'Kyoto International Manga Museum',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '16:30',
      },
      {
        name: 'Dinner',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '18:00',
      },
      {
        name: 'Hotel Wing International Kyoto Shijo Karasuma',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '19:00',
      },
    ],
  },
  {
    name: 'Day 9',
    date: '28 March 2023',
    route: routes.itinerary.day9.root,
    activities: [
      {
        name: 'Some park near Iwatayama Monkey Forest',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '09:30',
      },
      {
        name: 'Iwatayama Monkey Forest',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '09:55',
      },
      {
        name: 'Kotogase Tea House',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '10:45',
      },
      {
        name: 'Arashiyama Bamboo Grove',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '11:30',
      },
      {
        name: 'Higashiyama District',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '13:30',
      },
      {
        name: 'Fushimi Inari Taisha',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '16:15',
      },
      {
        name: 'Katsu Curry',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '19:00',
      },
    ],
  },
  {
    name: 'Day 10',
    date: '29 March 2023',
    route: routes.itinerary.day10.root,
    activities: [
      {
        name: 'Nara Park',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '12:00',
      },
      {
        name: 'Kuromon Crystal Hotel',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '14:45',
      },
      {
        name: 'Genrokuzushi',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '15:45',
      },
      {
        name: 'Round 1 Stadium',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '16:15',
      },
      {
        name: 'Shinsaibashi Suji',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '19:30',
      },
      {
        name: 'Dinner',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '20:30',
      },
    ],
  },
  {
    name: 'Day 11',
    date: '30 March 2023',
    route: routes.itinerary.day11.root,
    activities: [
      {
        name: 'Kuromon Market',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '09:45',
      },
      {
        name: 'Nipponbashi Denden Town',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '13:00',
      },
      {
        name: 'Umeda Sky Building',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '17:30',
      },
      {
        name: 'Kura sushi Dinner',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '19:30',
      },
    ],
  },
  {
    name: 'Day 12',
    date: '31 March 2023',
    route: routes.itinerary.day12.root,
    activities: [
      {
        name: 'Ichiran',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '09:15',
      },
      {
        name: 'Osaka Maishima Seaside Park',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '11:40',
      },
      {
        name: 'Osaka Aquarium Kaiyukan',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '13:30',
      },
      {
        name: 'Solaniwa Onsen',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '16:00',
      },
      {
        name: 'Okonomiyaki Dinner',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '18:35',
      },
    ],
  },
  {
    name: 'Day 13',
    date: '1 April 2023',
    route: routes.itinerary.day13.root,
    activities: [
      {
        name: 'Nipponbashi Denden Town',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '11:15',
      },
      {
        name: 'Sushi Lunch',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '13:45',
      },
      {
        name: 'Free Time',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '14:00',
      },
      {
        name: 'teamlab Botanic Gardens',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '19:45',
      },
    ],
  },
  {
    name: 'Day 14',
    date: '2 April 2023',
    route: routes.itinerary.day14.root,
    activities: [
      {
        name: 'Namba Station',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '13:00',
      },
      {
        name: 'Kansai International Airport',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '13:45',
      },
      {
        name: 'Onboard Scoot (TR819)',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '16:45',
      },
      {
        name: 'Home Sweet Home',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '21:45',
      },
    ],
  },
] as const satisfies ItineraryDay[];
