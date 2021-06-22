import React from 'react';
import EventListItem from './event-list-item';

const EventList = props => {
  const { item } = props;
  return (
    <ul>
      {item.map(event => (
        <EventListItem key={event.id} event={event} />
      ))}
    </ul>
  );
};

export default EventList;
