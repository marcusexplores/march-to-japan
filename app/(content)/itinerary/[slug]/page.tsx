import { notFound } from 'next/navigation';
import { itineraryRoutes } from '@/src/domains/itinerary';

export const generateStaticParams = () => {
  return itineraryRoutes.map((route) => ({
    slug: route.path.replace('/itinerary/', ''), // extracts 'day-0', 'day-1', etc.
  }));
};

interface ItineraryDayPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ItineraryDayPage({
  params,
}: ItineraryDayPageProps) {
  const { slug } = await params;
  const currentRoute = itineraryRoutes.find(
    (route) => route.path === `/itinerary/${slug}`,
  );

  if (!currentRoute) {
    notFound();
  }

  const ItineraryDay = currentRoute.component;

  return <ItineraryDay />;
}
