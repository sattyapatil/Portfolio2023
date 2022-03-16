import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './components/home/home'
import About from './components/about/about';

function App() {

  return (
    <React.Fragment>
      <div className="App">
          <Router>
              <Routes>

                <Route exact path="/" element={<Home />} />
                  
                <Route path="/about" element={<About />} />
                 
              </Routes>
          </Router>
      </div>
    </React.Fragment>
    
  );
}

export default App;
