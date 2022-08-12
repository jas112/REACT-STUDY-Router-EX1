import logo from './logo.svg';
import { Route } from 'react-router-dom'
import About from './pages/About';
import Dog from './pages/Dog';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <div className="App">

      <Route path="/dog" component={Dog} />

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
