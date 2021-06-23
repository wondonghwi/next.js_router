import React from 'react';
import { getFeaturedEvents } from '../data/dummy-data';
import EventList from '../components/events/event-list';

const HomePage = () => {
  const featureEvents = getFeaturedEvents();

  return (
    <div>
      <EventList item={featureEvents} />
    </div>
  );
};

export default HomePage;
