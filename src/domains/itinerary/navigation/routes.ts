import { routes } from '@/src/common/utilities/routes';

export interface ItineraryActivity {
  name: string;
  description: string;
  time: string;
  route?: string;
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
        time: '11:00',
        route: routes.itinerary.day0.airport,
      },
      {
        name: 'Lounge',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '11:00',
        route: routes.itinerary.day0.lounge,
      },
      {
        name: 'Lounge',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '11:00',
        route: routes.itinerary.day0.lounge,
      },
      {
        name: 'Lounge',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '11:00',
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
        name: 'Airport',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '11:00',
        route: routes.itinerary.day1.airport,
      },
      {
        name: 'Train',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '11:00',
        route: routes.itinerary.day1.train,
      },
    ],
  },
  {
    name: 'Day 2',
    date: '21 March 2023',
    route: routes.itinerary.day2.root,
    activities: [
      {
        name: 'Airport',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '11:00',
        route: routes.itinerary.day1.airport,
      },
      {
        name: 'Train',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '11:00',
        route: routes.itinerary.day1.train,
      },
    ],
  },
  {
    name: 'Day 3',
    date: '22 March 2023',
    route: routes.itinerary.day3.root,
    activities: [
      {
        name: '3',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '11:00',
        route: routes.itinerary.day1.airport,
      },
    ],
  },
  {
    name: 'Day 4',
    date: '23 March 2023',
    route: routes.itinerary.day4.root,
    activities: [
      {
        name: '4',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '11:00',
        route: routes.itinerary.day1.airport,
      },
    ],
  },
  {
    name: 'Day 5',
    date: '24 March 2023',
    route: routes.itinerary.day5.root,
    activities: [
      {
        name: '5',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '11:00',
        route: routes.itinerary.day1.airport,
      },
    ],
  },
  {
    name: 'Day 6',
    date: '25 March 2023',
    route: routes.itinerary.day6.root,
    activities: [
      {
        name: '6',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '11:00',
        route: routes.itinerary.day1.airport,
      },
    ],
  },
  {
    name: 'Day 7',
    date: '26 March 2023',
    route: routes.itinerary.day7.root,
    activities: [
      {
        name: '7',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '11:00',
        route: routes.itinerary.day1.airport,
      },
    ],
  },
  {
    name: 'Day 8',
    date: '27 March 2023',
    route: routes.itinerary.day8.root,
    activities: [
      {
        name: '8',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '11:00',
        route: routes.itinerary.day1.airport,
      },
    ],
  },
  {
    name: 'Day 9',
    date: '28 March 2023',
    route: routes.itinerary.day9.root,
    activities: [
      {
        name: '9',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '11:00',
        route: routes.itinerary.day1.airport,
      },
    ],
  },
  {
    name: 'Day 10',
    date: '29 March 2023',
    route: routes.itinerary.day10.root,
    activities: [
      {
        name: '10',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '11:00',
        route: routes.itinerary.day1.airport,
      },
    ],
  },
  {
    name: 'Day 11',
    date: '30 March 2023',
    route: routes.itinerary.day11.root,
    activities: [
      {
        name: '11',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '11:00',
        route: routes.itinerary.day1.airport,
      },
    ],
  },
  {
    name: 'Day 12',
    date: '31 March 2023',
    route: routes.itinerary.day12.root,
    activities: [
      {
        name: '12',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '11:00',
        route: routes.itinerary.day1.airport,
      },
    ],
  },
  {
    name: 'Day 13',
    date: '1 April 2023',
    route: routes.itinerary.day13.root,
    activities: [
      {
        name: '13',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '11:00',
        route: routes.itinerary.day1.airport,
      },
    ],
  },
  {
    name: 'Day 14',
    date: '2 April 2023',
    route: routes.itinerary.day14.root,
    activities: [
      {
        name: '14',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum.',
        time: '11:00',
        route: routes.itinerary.day1.airport,
      },
    ],
  },
] as const satisfies ItineraryDay[];
