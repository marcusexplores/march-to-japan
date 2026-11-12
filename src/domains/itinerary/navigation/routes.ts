import { ComponentType } from 'react';
import { routes } from '@/src/common/utilities/routes';
import { ItineraryDay0 } from '../ItineraryDay0';
import { ItineraryDay1 } from '../ItineraryDay1';
import { ItineraryDay2 } from '../ItineraryDay2';
import { ItineraryDay3 } from '../ItineraryDay3';
import { ItineraryDay4 } from '../ItineraryDay4';
import { ItineraryDay5 } from '../ItineraryDay5';
import { ItineraryDay6 } from '../ItineraryDay6';
import { ItineraryDay7 } from '../ItineraryDay7';
import { ItineraryDay8 } from '../ItineraryDay8';
import { ItineraryDay9 } from '../ItineraryDay9';
import { ItineraryDay10 } from '../ItineraryDay10';
import { ItineraryDay11 } from '../ItineraryDay11';
import { ItineraryDay12 } from '../ItineraryDay12';
import { ItineraryDay13 } from '../ItineraryDay13';
import { ItineraryDay14 } from '../ItineraryDay14';

interface ItineraryRoute {
  name: string;
  date: string;
  path: string;
  component: ComponentType;
}

export const itineraryRoutes = [
  {
    name: 'Day 0',
    date: '19 March 2023',
    path: routes.itinerary.day0.root,
    component: ItineraryDay0,
  },
  {
    name: 'Day 1',
    date: '20 March 2023',
    path: routes.itinerary.day1.root,
    component: ItineraryDay1,
  },
  {
    name: 'Day 2',
    date: '21 March 2023',
    path: routes.itinerary.day2.root,
    component: ItineraryDay2,
  },
  {
    name: 'Day 3',
    date: '22 March 2023',
    path: routes.itinerary.day3.root,
    component: ItineraryDay3,
  },
  {
    name: 'Day 4',
    date: '23 March 2023',
    path: routes.itinerary.day4.root,
    component: ItineraryDay4,
  },
  {
    name: 'Day 5',
    date: '24 March 2023',
    path: routes.itinerary.day5.root,
    component: ItineraryDay5,
  },
  {
    name: 'Day 6',
    date: '25 March 2023',
    path: routes.itinerary.day6.root,
    component: ItineraryDay6,
  },
  {
    name: 'Day 7',
    date: '26 March 2023',
    path: routes.itinerary.day7.root,
    component: ItineraryDay7,
  },
  {
    name: 'Day 8',
    date: '27 March 2023',
    path: routes.itinerary.day8.root,
    component: ItineraryDay8,
  },
  {
    name: 'Day 9',
    date: '28 March 2023',
    path: routes.itinerary.day9.root,
    component: ItineraryDay9,
  },
  {
    name: 'Day 10',
    date: '29 March 2023',
    path: routes.itinerary.day10.root,
    component: ItineraryDay10,
  },
  {
    name: 'Day 11',
    date: '30 March 2023',
    path: routes.itinerary.day11.root,
    component: ItineraryDay11,
  },
  {
    name: 'Day 12',
    date: '31 March 2023',
    path: routes.itinerary.day12.root,
    component: ItineraryDay12,
  },
  {
    name: 'Day 13',
    date: '1 April 2023',
    path: routes.itinerary.day13.root,
    component: ItineraryDay13,
  },
  {
    name: 'Day 14',
    date: '2 April 2023',
    path: routes.itinerary.day14.root,
    component: ItineraryDay14,
  },
] as const satisfies ItineraryRoute[];
