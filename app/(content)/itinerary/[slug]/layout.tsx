'use client';

import { ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import {
  Button,
  ListBox,
  ListBoxItem,
  Popover,
  Select,
  SelectValue,
} from 'react-aria-components';
import { Page } from '@/src/common/components/layout';
import { itineraryDays } from '@/src/domains/itinerary';

interface ItineraryLayoutProps {
  children: ReactNode;
}

export default function ItineraryLayout({ children }: ItineraryLayoutProps) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex h-full flex-col">
      <div className="py-2">
        <Select
          aria-label="Itinerary Days"
          value={pathname}
          onChange={(key) => {
            if (key) router.push(String(key));
          }}
        >
          {/* Trigger Button showing the currently selected item */}
          <Button className="hover:bg-accent flex items-center justify-between gap-2 rounded-full border px-4 py-2 text-left">
            <SelectValue>
              {({ selectedText, defaultChildren }) =>
                selectedText || defaultChildren
              }
            </SelectValue>
            <span aria-hidden="true">▼</span>
          </Button>

          {/* Dropdown list of all itinerary days */}
          <Popover className="bg-background min-w-(--trigger-width) rounded-xl border p-1 shadow-lg">
            <ListBox items={itineraryDays} className="outline-none">
              {(day) => (
                <ListBoxItem
                  id={day.route}
                  textValue={day.name}
                  className="hover:bg-accent data-selected:bg-active flex cursor-pointer items-center justify-between gap-4 rounded-lg px-3 py-2 outline-none"
                >
                  <span>{day.name}</span>
                  <small className="text-muted-foreground">{day.date}</small>
                </ListBoxItem>
              )}
            </ListBox>
          </Popover>
        </Select>
      </div>

      {/* Page content */}
      <Page>{children}</Page>
    </div>
  );
}
