import { ReactNode } from 'react';
import { BiLeftArrow } from 'react-icons/bi';
import { Page } from '@/src/common/components/layout';
import { PageSection } from '@/src/common/components/layout/PageSection';

interface ActivityContainerProps {
  title: string;
  rating?: number;
  website?: string;
  map?: string;
  children: ReactNode;
}

export const ActivityContainer = ({ children }: ActivityContainerProps) => {
  return (
    <Page>
      <PageSection className="flex">
        <BiLeftArrow />
        Back
      </PageSection>
      {children}
    </Page>
  );
};
