import { redirect } from 'next/navigation';
import { routes } from '@/src/common/utilities/routes';

export default function ItineraryPage() {
  redirect(routes.itinerary.day0.root);
}
