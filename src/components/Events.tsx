import { liveEventsArray, nextEventsArray } from './data';
import EventField from './EventField';
import { INewBet } from './EventPage';

interface IProps {
  newBet: INewBet | null;
}

const Events = ({ newBet }: IProps) => {
  return (
    <div className="flex flex-col py-20">
      {newBet && (
        <div className="mb-10 text-center text-red-400 font-bold">{`Ваша ставка ${newBet.winner} в матче ${newBet.team1} - ${newBet.team2} принята (коэфф ${newBet.coef}) `}</div>
      )}
      <div className="mb-10">
        <h2 className="w-full bg-green-700 text-center text-white font-bold rounded-t-xl">
          Текущие события
        </h2>
        <div className="border-x-4 border-b-4 border-green-700">
          {liveEventsArray.map((item) => {
            return (
              <div key={item.tournamentName} className="block ">
                <h3 className="bg-green-400 w-full px-3">{item.tournamentName} </h3>
                {item.events.map((event) => {
                  return <EventField key={event.id} event={event} isLive={true} />;
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className="">
        <h2 className="w-full bg-green-700 text-center text-white font-bold rounded-t-xl">
          Предстоящие события
        </h2>
        <div className="border-x-4 border-b-4 border-green-700">
          {nextEventsArray.map((item) => {
            return (
              <div key={item.tournamentName} className="block ">
                <h3 className="bg-green-400 w-full px-3">{item.tournamentName} </h3>
                {item.events.map((event) => {
                  return <EventField key={event.id} event={event} isLive={false} />;
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
