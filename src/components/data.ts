import bayern from '../assets/images/bayern-munchen.png';
import psg from '../assets/images/psg.png';
import barcelona from '../assets/images/barcelona.png';
import chelsea from '../assets/images/chelsea.png';
import liverpool from '../assets/images/liverpool.png';
import arsenal from '../assets/images/arsenal.png';
import napoli from '../assets/images/napoli.png';
import juventus from '../assets/images/juventus.png';

export const eventsArray = [
  {
    tournamentName: 'Лига чемпионов 2022/23',
    events: [
      {
        id: 1,
        team1: 'Бавария',
        team2: 'ПСЖ',
        team1logo: bayern,
        team2logo: psg,
      },
      {
        id: 2,
        team1: 'Барселона',
        team2: 'Челси',
        team1logo: barcelona,
        team2logo: chelsea,
      },
    ],
  },
  {
    tournamentName: 'Англия. Премьер Лига',
    events: [
      {
        id: 1,
        team1: 'Ливерпуль',
        team2: 'Арсенал',
        team1logo: liverpool,
        team2logo: arsenal,
      },
    ],
  },
  {
    tournamentName: 'Италия. Серия A',
    events: [
      {
        id: 1,
        team1: 'Наполи',
        team2: 'Ювентус',
        team1logo: napoli,
        team2logo: juventus,
      },
    ],
  },
];
