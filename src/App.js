import logo from './feet.jpeg';
import './App.css';
import Dictionary from './Dictionary'

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="img-fluid App-logo shadow" alt="logo"/>
        <p>
          Explore the <strong>MEANING</strong> of life
        </p>
      </header>
      <main>
      <Dictionary />
      </main>
    </div>
  );
}

