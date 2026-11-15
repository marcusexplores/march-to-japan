'use client';

import { Image, PageSection } from '@/src/common/components';
import { ActivityContainer } from './ActivityContainer';
import luggageImage from '@/public/images/day-0-luggage.jpg';
import familyImage from '@/public/images/day-0-shiseido-forest.jpg';
import friendImage from '@/public/images/day-0-sour-bombe.jpg';

export const Day0ChangiAirport = () => {
  return (
    <ActivityContainer
      title="Changi Airport"
      location={{
        addressEn: '60 Airport Blvd., Singapore 819643',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5925.907297375861!2d103.9903272!3d1.3618583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da3c898c3078d5%3A0x13e102b3520c66dc!2sTerminal%201%2C%20Singapore%20819642!5e1!3m2!1sen!2ssg!4v1794722271188!5m2!1sen!2ssg',
      }}
      website="https://www.changiairport.com/"
    >
      <PageSection>
        The long-awaited journey to Japan was finally happening! Despite the
        numerous obstacles and setbacks that had come our way, we were
        determined to make the most of this graduation trip that we had been
        eagerly planning for months. Our initial plans to travel in May 2020 had
        been cancelled due to the Covid-19 pandemic, forcing us to cancel all
        our bookings and put our dreams of exploring Japan on hold. However,
        after much persistence and patiently waiting for Covid-19 measures to
        dissipate, we finally managed to find a common time to take annual leave
        from work and embark on our much-anticipated adventure.
      </PageSection>
      <PageSection title="A Stress-free Check-in Experience">
        Knowing that Scoot opens their counters three hours before the flight
        and closes them 60 minutes before, we made sure to arrive at least 90
        minutes early for our departure time. Upon arrival at the airport, we
        headed straight to the Automated Check-in Kiosk to obtain our baggage
        tags for check-in. It had been a while since we last flew, and we had a
        funny moment where one of our Baggage Identification Tag was
        accidentally covered while attaching the main tag to the luggage. This
        tag contained important information about the owner and the main tag,
        which we could use to enquire with the airline in case our baggage went
        missing.
      </PageSection>
      <PageSection classNames={{ content: 'flex justify-center' }}>
        <Image
          src={luggageImage}
          alt="Luggages with tags"
          loading="eager"
          classNames={{ image: 'sm:w-3/4 lg:w-1/2' }}
        />
      </PageSection>
      <PageSection>
        After obtaining our baggage tags, we proceeded to the Automated Bag-Drop
        Machine to drop off our bags. We realized that we had not attached the
        bag tag to the side handle, which caused one of our bags to be
        undetected by the machine. We quickly rectified the situation by taking
        the tag off slowly and reattaching it to the side handle.
      </PageSection>
      <PageSection title="Quality Time with Family">
        Having some extra time before our flight, we decided to take a leisurely
        stroll around the airport and soak up the delightful atmosphere of the
        Disney100 anniversary celebrations at the renowned Shiseido Forest
        Valley. As we walked through the Disney100 archway, we were captivated
        by the enchanting surroundings and couldn&apos;t resist taking some
        photos with the magnificent 4m-tall platinum statue of the legendary
        Mickey Mouse.
      </PageSection>
      <PageSection classNames={{ content: 'flex justify-center' }}>
        <Image
          src={familyImage}
          alt="Shiseido Forest Valley with family"
          classNames={{ image: 'sm:w-3/4 lg:w-1/2' }}
        />
      </PageSection>
      <PageSection title="Quality Time with Friends">
        When our friend who came to send us off arrived, we bid farewell to our
        family and headed to Pizzamaru for dinner. While munching on pizza, we
        caught up with each other&apos;s recent travels - she shared her trip to
        Taiwan while we talked about our upcoming plans for Japan.
      </PageSection>
      <PageSection>
        After dinner, we headed over to Sourbombe to satisfy our sweet tooth
        with some delicious dessert. We managed to video call another friend who
        unfortunately couldn&apos;t join us because she was getting ready for
        work. However, the background noise was quite loud, so we had difficulty
        hearing her. We tried to guess what she was saying and replied
        accordingly, which resulted in some hilarious moments where our
        responses didn&apos;t match her questions. Despite the communication
        challenges, we were grateful for the opportunity to catch up with her
        virtually. Before parting ways, we took a group photo and headed off to
        try out the Changi Jewel Lounge.
      </PageSection>
      <PageSection classNames={{ content: 'flex justify-center' }}>
        <Image
          src={friendImage}
          alt="Sour Bombe with Jeanie"
          classNames={{ image: 'sm:w-3/4 lg:w-1/2' }}
        />
      </PageSection>
    </ActivityContainer>
  );
};
