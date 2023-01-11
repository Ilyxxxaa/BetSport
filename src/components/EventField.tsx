import React from 'react';

interface IProps {
  event: {
    id: number;
    team1: string;
    team2: string;
    team1logo: string;
    team2logo: string;
  };
}

const EventField = ({ event }: IProps) => {
  return (
    <a
      key={event.id}
      className="event-field cursor-pointer border-t-4  border-green-400  hover:bg-green-100 p-2 sm:p-4"
    >
      <div className="justify-self-center text-red-600 text-xs mb-2 font-medium sm:font-bold sm:text-base sm:mb-0">
        LIVE
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
    </a>
  );
};

export default EventField;
