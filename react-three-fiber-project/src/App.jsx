import { useState } from 'react';
import frog from './assets/frog.png';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://github.com/frogspond?tab=repositories" target="_blank">
          <img src={frog} className="logo" alt="Frog" />
        </a>
      </div>
      <h1>Hola, putaracha</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Swear count for today is {count}
        </button>
      </div>
    </>
  );
}

export default App;
