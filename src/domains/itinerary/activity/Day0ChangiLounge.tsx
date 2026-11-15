'use client';

import { Image, PageSection } from '@/src/common/components';
import { ActivityContainer } from './ActivityContainer';
import loungeBeverageImage from '@/public/images/day-0-lounge-drinks.jpg';
import loungeFoodBeefLasagna from '@/public/images/day-0-lounge-food-beef-lasagna.jpg';
import loungeFoodChilliCrabMantou from '@/public/images/day-0-lounge-food-chilli-crab-mantou.jpg';
import loungeTicketImage from '@/public/images/day-0-lounge-ticket.jpg';

export const Day0ChangiLounge = () => {
  return (
    <ActivityContainer
      title="Changi Lounge"
      location={{
        addressEn: '78 Airport Blvd., #01 - 304, Singapore 819666',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5925.91161740341!2d103.9901333!3d1.3601002000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da3ddea8a3b7d5%3A0xa01626cde3675803!2sChangi%20Lounge!5e1!3m2!1sen!2ssg!4v1794738991479!5m2!1sen!2ssg',
      }}
      website="https://www.jewelchangiairport.com/en/changi-lounge.html"
    >
      <PageSection>Lorem ipsum</PageSection>
      <PageSection classNames={{ content: 'flex justify-center' }}>
        <Image
          src={loungeTicketImage}
          alt="Priority Pass Ticket for Lounge"
          loading="eager"
          classNames={{ image: 'w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/3' }}
        />
      </PageSection>
      <PageSection classNames={{ content: 'flex justify-center' }}>
        <Image
          src={loungeBeverageImage}
          alt="Priority Pass Ticket for Lounge"
          classNames={{ image: 'w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/3' }}
        />
      </PageSection>
      <PageSection classNames={{ content: 'flex justify-center gap-4' }}>
        <Image
          src={loungeFoodChilliCrabMantou}
          alt="Lounge Beverages"
          classNames={{ image: 'w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/3' }}
        />
        <Image
          src={loungeFoodBeefLasagna}
          alt="Lounge Beverages"
          classNames={{ image: 'w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/3' }}
        />
      </PageSection>
    </ActivityContainer>
  );
};
