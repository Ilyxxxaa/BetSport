import React from 'react';
import { useNavigate } from 'react-router-dom';

interface IProps {
  event: IEvent;
  isLive: boolean;
}

export interface IEvent {
  id: number;
  team1: string;
  team2: string;
  team1logo: string;
  team2logo: string;
  time?: string;
}

const EventField = ({ event, isLive }: IProps) => {
  const navigate = useNavigate();

  const eventHandler = () => {
    navigate(`/event/${event.id}`);
  };

  return (
    <div
      onClick={eventHandler}
      key={event.id}
      className="event-field cursor-pointer border-t-4  border-green-400  hover:bg-green-100 p-2 sm:p-4"
    >
      <div
        className={`${
          isLive ? 'text-red-600' : 'text-black'
        } justify-self-center  text-xs mb-2 font-medium sm:font-bold sm:text-base sm:mb-0`}
      >
        {isLive ? 'LIVE' : event.time}
      </div>
      <div className="flex items-center gap-3 justify-self-center">
        <div className="flex items-center justify-center gap-2 font-medium">
          {event.team1}
          <img src={event.team1logo} alt={event.team1} />
        </div>
        <div className="font-extrabold">{' - '}</div>
        <div className="flex items-center justify-center gap-2 font-medium">
          {event.team2}
          <img src={event.team2logo} alt={event.team2} />
        </div>
      </div>
    </div>
  );
};

export default EventField;
