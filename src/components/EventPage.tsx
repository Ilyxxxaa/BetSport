import { useEffect, useState } from 'react';
import { IEvent } from './EventField';
import { useParams } from 'react-router-dom';
import { eventsArray } from './data';

const EventPage = () => {
  const [event, setEvent] = useState<IEvent | null>(null);

  const { id } = useParams();

  useEffect(() => {
    eventsArray.map((item) => {
      if (item.id === Number(id)) {
        setEvent(item);
      }
    });
  }, [id]);

  if (!event) {
    return <div className="">Sorry, cant find this event</div>;
  }

  if (event) {
    return <div className="">{event.team1}</div>;
  }
  return null;
};

export default EventPage;
