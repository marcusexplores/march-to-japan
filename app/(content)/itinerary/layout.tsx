'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Tab, TabList, Tabs } from 'react-aria-components';
import { itineraryRoutes } from '@/src/domains/itinerary';

interface ItineraryLayoutProps {
  children: ReactNode;
}

export default function ItineraryLayout({ children }: ItineraryLayoutProps) {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col">
      <Tabs selectedKey={pathname}>
        <TabList
          aria-label="Itinerary Days"
          items={itineraryRoutes}
          className="flex w-full scrollbar-none overflow-x-auto py-2 [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {(item) => (
            <Tab
              id={item.path}
              href={item.path}
              className="hover:bg-accent data-selected:bg-active flex shrink-0 flex-col rounded-full px-4 py-2 whitespace-nowrap"
              render={(domProps) =>
                'href' in domProps ? (
                  <Link {...domProps} href={domProps.href} />
                ) : (
                  <div {...domProps} />
                )
              }
            >
              <div>{item.name}</div>
              {/* <small>{item.date}</small> */}
            </Tab>
          )}
        </TabList>

        {children}
      </Tabs>
    </div>
  );
}
