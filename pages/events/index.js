import { getAllEvents } from '../../data/dummy-data';
import EventList from '../../components/events/event-list';
import EventsSearch from './events-search';
import { useRouter } from 'next/router';

const AllEventsPage = () => {
  const router = useRouter();
  const events = getAllEvents();

  const findEventHandler = (year, month) => {
    // console.log(year);
    // console.log(month);
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <>
      <EventsSearch onSearch={findEventHandler} />
      <EventList item={events} />
    </>
  );
};

export default AllEventsPage;
