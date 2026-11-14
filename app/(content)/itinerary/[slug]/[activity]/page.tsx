import { notFound } from 'next/navigation';
import { itineraryDays } from '@/src/domains/itinerary';

export const generateStaticParams = () => {
  return itineraryDays.flatMap((day) => {
    const daySlug = day.route.replace('/itinerary/', '');

    // Use `'route' in activity` to safely narrow the union type
    const routedActivities = day.activities.filter(
      (activity): activity is Extract<typeof activity, { route: string }> =>
        'route' in activity && typeof activity.route === 'string',
    );

    const uniqueRoutes = Array.from(
      new Set(routedActivities.map((a) => a.route)),
    );

    return uniqueRoutes.map((route) => ({
      slug: daySlug,
      activity: route.replace(`${day.route}/`, ''),
    }));
  });
};

interface ItineraryActivityPageProps {
  params: Promise<{
    slug: string;
    activity: string;
  }>;
}

export default async function ItineraryActivityPage({
  params,
}: ItineraryActivityPageProps) {
  const { slug, activity } = await params;

  const currentDay = itineraryDays.find(
    (day) => day.route === `/itinerary/${slug}`,
  );

  // Check `'route' in item` before accessing `item.route`
  const currentActivity = currentDay?.activities.find(
    (item) =>
      'route' in item && item.route === `/itinerary/${slug}/${activity}`,
  );

  if (!currentDay || !currentActivity) {
    notFound();
  }

  // Safely check `'component' in currentActivity` as well
  const ActivityComponent =
    'component' in currentActivity ? currentActivity.component : undefined;

  return (
    <div>
      {ActivityComponent ? (
        <ActivityComponent />
      ) : (
        <section>
          <h1>{currentActivity.name}</h1>
          <p>{currentActivity.time}</p>
          <p>{currentActivity.description}</p>
        </section>
      )}
    </div>
  );
}
