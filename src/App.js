import React from 'react';
import './App.css';
import Weather from './components/Weather';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div >
      <Router>
      <NavBar/>
      <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/weather' element={<Weather/>}/>
          <Route exact path='/contact' element={<Contact />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>

      </Router>
      
    </div>
  );
}

export default App;
