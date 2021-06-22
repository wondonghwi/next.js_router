import React from 'react';
import classes from '/styles/event-item.module.css';
import DateIcon from "../pages/icons/date-icon";
import AddressIcon from "../pages/icons/address-icon";
import ArrowRightIcon from "../pages/icons/arrow-right-icon";
import Button from "../pages/ui/button";

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
          <DateIcon />
          <time>{humanReadableDate}</time>
        </div>
        <div className={classes.address}>
          <AddressIcon />
          <address>{formattedAddress}</address>
        </div>
        {/*</div>*/}
        <div className={classes.actions}>
          <Button link={expolreLink}>
          <span>Explore</span>
          <span className={classes.icon}><ArrowRightIcon /></span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventListItem;
