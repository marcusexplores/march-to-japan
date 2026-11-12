// import { ReactNode } from 'react';
// import { AppNavigation } from '@/src/common/components/navigation';
// import { navRoutes } from '@/src/common/utilities/routes';
// import ExpenditurePage from './expenditure/page';
// import ItineraryPage from './itinerary/page';
// import PreparationPage from './preparation/page';

// import HomePage from '@/app/(home)/page';

// interface ContentLayoutProps {
//   children: ReactNode;
// }

// export default function ContentLayout({ children }: ContentLayoutProps) {
//   return (
//     <div className="flex h-full flex-col">
//       {children}
//       <AppNavigation routes={navItems} />
//     </div>
//   );
// }

// type RouteName = (typeof navRoutes)[number]['name'];

// const routeComponents: Record<RouteName, ReactNode> = {
//   Home: <HomePage />,
//   Itinerary: <ItineraryPage />,
//   Expenditure: <ExpenditurePage />,
//   Preparation: <PreparationPage />,
// };

// const navItems = navRoutes.map((route) => ({
//   ...route,
//   component: routeComponents[route.name],
// }));
