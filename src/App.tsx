import Events from './components/Events';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <main>
          <Events />
        </main>
      </div>
    </div>
  );
}

export default App;
