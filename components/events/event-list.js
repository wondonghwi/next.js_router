import React from 'react';
import EventListItem from './event-list-item';
import classes from '/styles/event-list.module.css';

const EventList = ({ item }) => {
  return (
    <ul className={classes.list}>
      {item.map(event => (
        <EventListItem
          key={event.id}
          title={event.title}
          image={event.image}
          date={event.date}
          location={event.location}
          id={event.id}
        />
      ))}
    </ul>
  );
};

export default EventList;
