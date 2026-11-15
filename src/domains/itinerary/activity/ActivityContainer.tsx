import { ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from 'react-aria-components';
import { BiLeftArrowAlt } from 'react-icons/bi';
import { Page } from '@/src/common/components/layout';
import { PageSection } from '@/src/common/components/layout/PageSection';
import { ActivityMetaSection } from './ActivityMetaSection';

interface ActivityLocation {
  addressEn: string;
  addressJp?: string;
  map?: string;
}

interface ActivityContainerProps {
  title: string;
  location?: ActivityLocation;
  website?: string;
  children: ReactNode;
}

export const ActivityContainer = ({
  title,
  location,
  website,
  children,
}: ActivityContainerProps) => {
  const router = useRouter();
  return (
    <Page>
      <PageSection classNames={{ content: 'flex' }}>
        <Button
          onPress={() => router.back()}
          className="inline-flex cursor-pointer items-center gap-1"
        >
          <BiLeftArrowAlt />
          <span>Back</span>
        </Button>
      </PageSection>
      <PageSection classNames={{ content: 'flex items-center justify-center' }}>
        <p className="text-3xl">{title}</p>
      </PageSection>
      <ActivityMetaSection
        addressEn={location?.addressEn}
        addressJp={location?.addressJp}
        map={location?.map}
        website={website}
      />
      {children}
      <PageSection classNames={{ content: 'flex' }}>
        <Button
          onPress={() => router.back()}
          className="inline-flex cursor-pointer items-center gap-1"
        >
          <BiLeftArrowAlt />
          <span>Back</span>
        </Button>
      </PageSection>
    </Page>
  );
};
