
import './App.css';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <>
     <Router>
      <Navbar title="Inotebook" home="Home" aboutText="About Us"/> 
      <div className="container my-3">
          <Routes>
            {/* using "exact" before path="" is necessary otherwise react matches partially and will load another page */}
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/about" element={<About/>} />
          </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
