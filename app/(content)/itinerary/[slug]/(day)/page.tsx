import { notFound } from 'next/navigation';
import { itineraryDays } from '@/src/domains/itinerary';
import { ItineraryDay } from '@/src/domains/itinerary/ItineraryDay';

export const generateStaticParams = () => {
  return itineraryDays.map((day) => ({
    slug: day.route.replace('/itinerary/', ''), // extracts 'day-0', 'day-1', etc.
  }));
};

interface ItineraryDayPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ItineraryDayPage({
  params,
}: ItineraryDayPageProps) {
  const { slug } = await params;
  const currentDay = itineraryDays.find(
    (day) => day.route === `/itinerary/${slug}`,
  );

  if (!currentDay) {
    notFound();
  }

  return <ItineraryDay activities={currentDay.activities} />;
}
