import React from 'react';

// Components
import EventBanner from '../../components/Sections/EventBanner';
import { EventBlock } from '../../components/Common/Block';
import BookATable from '../../components/Sections/BookATable';
import SpecialFeature from '../../components/Sections/SpecialFeature';
import EventGallery from '../../components/Sections/EventGallery/EventGallery';

const EventsPage: React.FC = () => {
  return (
    <>
      <h1 style={{ display: 'none' }} aria-label='Events Info'>Events Info</h1>
      {/* Event Banner */}
      <EventBanner />
      {/* Discover upcoming block */}
      <EventBlock />
      {/* Book a table */}
      <BookATable />
      {/* Special feature */}
      <SpecialFeature />
      {/* Gallery */}
      <EventGallery />
    </>
  );
};

export default EventsPage;