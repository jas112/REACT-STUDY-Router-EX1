// import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from './pages/About';
import Droid from './pages/Droid';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <div className='container'>
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/droid" element={<Droid />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>

    
  );
}

export default App;
