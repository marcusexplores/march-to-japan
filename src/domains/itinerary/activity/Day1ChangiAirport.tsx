'use client';

import { PageSection } from '@/src/common/components/layout/PageSection';
import { ActivityContainer } from './ActivityContainer';

export const Day1ChangiAirport = () => {
  return (
    <ActivityContainer
      title="Changi Airport"
      location={{
        addressEn: '60 Airport Blvd., Singapore 819643',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5925.907297375861!2d103.9903272!3d1.3618583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da3c898c3078d5%3A0x13e102b3520c66dc!2sTerminal%201%2C%20Singapore%20819642!5e1!3m2!1sen!2ssg!4v1794722271188!5m2!1sen!2ssg',
      }}
      website="https://www.changiairport.com/"
    >
      <PageSection>xxx</PageSection>
    </ActivityContainer>
  );
};
