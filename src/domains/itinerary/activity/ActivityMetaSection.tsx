import { ReactNode } from 'react';
import { IconType } from 'react-icons';
import { BiLink, BiMap } from 'react-icons/bi';
import { ExternalLink } from '@/src/common/components';
import { PageSection } from '@/src/common/components/layout/PageSection';
import { ActivityMap } from './ActivityMap';

interface ActivityMetaSectionProps {
  addressEn?: string;
  addressJp?: string;
  map?: string;
  website?: string;
}

export const ActivityMetaSection = ({
  addressEn,
  addressJp,
  map,
  website,
}: ActivityMetaSectionProps) => {
  return (
    <PageSection
      classNames={{
        content:
          'bg-dango-white/50 flex items-center justify-between gap-4 rounded-lg p-4',
      }}
    >
      <div className="min-w-0 flex-1 text-sm">
        {addressEn && (
          <ActivityMetaLine icon={BiMap}>{addressEn}</ActivityMetaLine>
        )}
        {addressJp && (
          <ActivityMetaLine icon={BiMap}>{addressJp}</ActivityMetaLine>
        )}
        {website && (
          <ActivityMetaLine icon={BiLink}>
            <ExternalLink href={website} />
          </ActivityMetaLine>
        )}
      </div>
      {map && (
        <div className="shrink-0">
          <ActivityMap map={map} />
        </div>
      )}
    </PageSection>
  );
};

interface ActivityMetaLineProps {
  icon: IconType;
  children: ReactNode;
}

const ActivityMetaLine = ({ icon: Icon, children }: ActivityMetaLineProps) => {
  return (
    <div className="flex items-center gap-2">
      <Icon />
      {children}
    </div>
  );
};
