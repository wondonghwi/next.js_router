import React from 'react';
import Link from 'next/link';
import classes from '/styles/event-item.module.css';

const EventListItem = ({ title, image, date, location, id }) => {
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedAddress = location.replace(', ', '\n');
  const expolreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={`/${image}`} alt={title} />
      <div className={classes.content}>
        {/*<div className={classes.summary}>*/}
        <h2>TITLE</h2>
        <div className={classes.date}>
          <time>{humanReadableDate}</time>
        </div>
        <div className={classes.address}>
          <address>{formattedAddress}</address>
        </div>
        {/*</div>*/}
        <div className={classes.actions}>
          <Link href={expolreLink}>Explore</Link>
        </div>
      </div>
    </li>
  );
};

export default EventListItem;
