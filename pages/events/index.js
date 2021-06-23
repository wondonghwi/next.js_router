import { getAllEvents } from '../../data/dummy-data';
import EventList from '../../components/event-list'

const AllEventsPage = () => {

    const events = getAllEvents();

    return (
        <div>
            <EventList />
        </div>
    );
};

export default AllEventsPage;
