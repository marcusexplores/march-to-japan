import Link from 'next/link';
// import {
//   type Key,
//   Tab,
//   TabList,
//   TabPanel,
//   TabPanels,
//   Tabs,
// } from 'react-aria-components';
import { NavRoute } from '@/src/common/utilities/routes';

// type AppNavItem = NavRoute & { component: ReactNode };

// interface AppNavigationProps {
//   items: AppNavItem[];
// }

// export const AppNavigation = ({ items }: AppNavigationProps) => {
//   const [tab, setTab] = useState<Key>('');
//   return (
//     <div>
//       <Tabs selectedKey={tab} onSelectionChange={setTab}>
//         <TabList items={items}>
//           {(item) => <Tab id={item.name}>{item.name}</Tab>}
//         </TabList>
//         <TabPanels items={items}>
//           {(item) => <TabPanel id={item.name}>{item.component}</TabPanel>}
//         </TabPanels>
//       </Tabs>
//     </div>
//   );
// };

interface AppNavigationProps {
  routes: NavRoute[];
}

export const AppNavigation = ({ routes }: AppNavigationProps) => {
  return (
    <div className="flex w-full p-4">
      {routes.map((route) => {
        const Icon = route.icon;
        return (
          <Link
            key={route.name}
            href={route.path}
            className="flex flex-1 flex-col items-center justify-center"
          >
            <Icon />
            <div>{route.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

// export const AppNavigation = ({ routes }: AppNavigationProps) => {
//   return (
//     <div className="flex w-full items-center justify-around p-4">
//       {routes.map((route) => {
//         const Icon = route.icon;
//         return (
//           <Link
//             key={route.name}
//             href={route.path}
//             className="flex flex-col items-center justify-center"
//           >
//             <Icon />
//             <div>{route.name}</div>
//           </Link>
//         );
//       })}
//     </div>
//   );
// };
