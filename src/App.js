import logo from './logo.jpg';
import ceva from './cevapcici.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br></br>
        <p>
          Tach Safet. Soweit hat es geklappt. Ist aber auch noch nichts Berauschendes drin.
          <br></br>
          Noch etwas mehr Text.
        </p>
        <p>Und noch mehr Text.</p>
        <img src={ceva} alt="hunger" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
