'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Focusable,
  Popover,
  PreviewTrigger,
  Tab,
  TabList,
  Tabs,
  Tooltip,
  TooltipTrigger,
} from 'react-aria-components';
import { TooltipPopover } from '@/src/common/components/popover/TooltipPopover';
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
              <PreviewTrigger delay={0} closeDelay={100}>
                <Focusable>
                  <div>{item.name}</div>
                </Focusable>
                <TooltipPopover>
                  <small>{item.date}</small>
                </TooltipPopover>
              </PreviewTrigger>
            </Tab>
          )}
        </TabList>

        {children}
      </Tabs>
    </div>
  );
}
