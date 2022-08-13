// import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/header/Header';
// import About from './pages/About';
// import Droid from './pages/Droid';
// import Contact from './pages/Contact';
import VendingMachine from './components/vendingMachine/VendingMachine';
import Chips from './components/chips/Chips';
import Sardines from './components/sardines/Sardines';
import Soda from './components/soda/Soda';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <div className='container'>
            <Header />
            <Routes>
              {/* React Router Exercise A Begin */}
              {/* <Route path="/" element={<About />} /> */}
              {/* <Route path="/droid" element={<Droid name='c1d2' />} /> */}
              {/* <Route path="/droid/r" element={<Droid name='r3c3' />} /> */}
              {/* <Route path="/contact" element={<Contact />} /> */}
              {/* React Router Exercise A End */}

              {/* React Router Exercise B Begin */}
              <Route path="/" element={<VendingMachine />} />
              <Route path="/chips" element={<Chips />} />
              <Route path="/sardines" element={<Sardines />} />
              <Route path="/soda" element={<Soda />} />
              {/* React Router Exercise B End */}
            </Routes>
          </div>
        </div>
      </Router>
    </>

    
  );
}

export default App;
