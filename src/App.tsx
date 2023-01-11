import Events from './components/Events';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import EventPage, { INewBet } from './components/EventPage';
import { useEffect, useState } from 'react';

function App() {
  const [newBet, setNewBet] = useState<null | INewBet>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNewBet(null);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [newBet]);

  return (
    <div className="App">
      <div className="container">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Events newBet={newBet} />} />
            <Route path="/event/:id" element={<EventPage setNewBet={setNewBet} />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
