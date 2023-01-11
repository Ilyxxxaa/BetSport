import React, { Dispatch, useCallback, useEffect, useState } from 'react';
import { IEvent } from './EventField';
import { useParams, useNavigate } from 'react-router-dom';
import { eventsArray } from './data';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export interface IEventWithCoef extends IEvent {
  coef: {
    [key: string]: number;
  };
}

export interface INewBet {
  team1: string;
  team2: string;
  winner: string;
  coef: number;
}

interface IProps {
  setNewBet: Dispatch<React.SetStateAction<null | INewBet>>;
}

const EventPage = ({ setNewBet }: IProps) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [event, setEvent] = useState<IEventWithCoef | null>(null);
  const [result, setResult] = useState<null | string>(null);

  useEffect(() => {
    eventsArray.map((item) => {
      if (item.id === Number(id)) {
        setEvent(item);
      }
    });
  }, [id]);

  const btnHandler = useCallback(() => {
    let winner;
    switch (result) {
      case 'win1':
        winner = 'Победа 1';
        break;
      case 'draw':
        winner = 'Ничья';
        break;
      case 'win2':
        winner = 'Победа 2';
        break;
    }

    const newBet = {
      team1: event?.team1 || '',
      team2: event?.team2 || '',
      winner: winner || '',
      coef: event?.coef[result as string] || 0,
    };
    setNewBet(newBet);
    navigate('/');
  }, [navigate, event, result, setNewBet]);

  if (!event) {
    return <div className="">Sorry, cant find this event</div>;
  }

  if (event) {
    return (
      <div className="flex flex-col pt-5 gap-5 text-center  sm:pt-16 ">
        <h2 className="font-bold text-xl sm:text-2xl">Сделать ставку</h2>
        <div className="flex flex-col gap-4 items-center justify-center bg-slate-50 p-3 rounded-3xl  shadow-md sm:p-6">
          <div className="flex justify-center items-center gap-4 mt-5 sm:gap-8 ">
            <div className="flex flex-col items-center gap-3 ">
              <img src={event.team1logo} alt={event.team1} className="w-[32px] h-[32px]" />
              <p className="text-xl font-bold">{event.team1}</p>
            </div>
            <div className={`${event.time ? 'text-black' : 'text-red-600'} font-bold`}>
              {event.time ? event.time : 'LIVE'}
            </div>
            <div className="flex flex-col items-center gap-3 ">
              <img src={event.team2logo} alt={event.team2} className="w-[32px] h-[32px]" />
              <p className="text-lg font-bold sm:text-xl">{event.team2}</p>
            </div>
          </div>
          <div className="flex gap-3">
            Коэффициент:
            <span>{result ? event.coef[result] : ''}</span>
          </div>

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label" color="info" disabled>
              Результат
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              name="row-radio-buttons-group"
              defaultValue={null}
              onChange={(e, value) => setResult(value)}
            >
              <FormControlLabel value="win1" control={<Radio />} label="Победа 1" />
              <FormControlLabel value="draw" control={<Radio />} label="Ничья" />
              <FormControlLabel value="win2" control={<Radio />} label="Победа 2" />
            </RadioGroup>
          </FormControl>

          <button
            onClick={btnHandler}
            className="bg-green-400 py-2 px-5 rounded-lg transition-all text-white font-bold hover:bg-green-800 active:scale-90 "
          >
            Сделать ставку
          </button>
        </div>
      </div>
    );
  }
  return null;
};

export default EventPage;
