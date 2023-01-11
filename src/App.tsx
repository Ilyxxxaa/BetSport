import Events from './components/Events';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import EventPage from './components/EventPage';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Events />} />
            <Route path="/event/:id" element={<EventPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
