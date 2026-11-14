'use client';

import { ListBox, ListBoxItem } from 'react-aria-components';
import { BiRocket } from 'react-icons/bi';
import { PageSection } from '@/src/common/components/layout/PageSection';
import { ItineraryActivity } from './navigation';

interface ItineraryDayProps {
  activities: ItineraryActivity[];
}

export const ItineraryDay = ({ activities }: ItineraryDayProps) => {
  return (
    <PageSection className="antialiased">
      <div className="relative max-w-xl">
        <ListBox
          aria-label="Activity timeline"
          items={activities}
          className="outline-none"
        >
          {(item) => (
            <ListBoxItem
              textValue={item.name}
              className="group relative flex items-stretch gap-4 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-neutral-600"
            >
              {/* 1. Time Column (Left) */}
              <div className="w-12 shrink-0 pt-1.5 text-right">
                <span className="text-xs font-medium text-neutral-600 tabular-nums">
                  {item.time}
                </span>
              </div>

              {/* 2. Node + Connector Track Column (Center) */}
              <div className="relative flex flex-col items-center">
                {/* Circular Icon Node */}
                <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-neutral-800 bg-[#181818] text-neutral-400">
                  <BiRocket className="h-3.5 w-3.5" />
                </div>

                {/* Vertical Line: fills remaining height down to the next node */}
                <span
                  aria-hidden="true"
                  className="w-px flex-1 bg-neutral-800 group-last:hidden"
                />
              </div>

              {/* 3. Activity Content (Right) */}
              <div className="flex flex-col pt-1 pb-6 group-last:pb-0">
                <p className="text-sm font-semibold">{item.name}</p>
                <p className="text-sm font-medium">{item.description}</p>
              </div>
            </ListBoxItem>
          )}
        </ListBox>
      </div>
    </PageSection>
  );
};
