import { eventsArray } from './data';

const Events = () => {
  return (
    <div className="flex flex-col py-20">
      <div className="">
        <h2 className="w-full bg-green-700 text-center text-white font-bold rounded-t-xl">
          Текущие события
        </h2>
        <div className="border-x-4 border-b-4 border-green-700 h-[300px]">
          {eventsArray.map((item) => {
            return (
              <div key={item.tournamentName} className="block ">
                <h3 className="bg-green-400 w-full px-3">{item.tournamentName} </h3>
                {item.events.map((event) => {
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
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Events;
