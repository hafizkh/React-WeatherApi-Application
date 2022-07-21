import React, { useState } from 'react';
import './App.css';
import Weather from './components/Weather';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {


  // const getCityInfo = async (city) => {
  //   const apiKey = "fwzsDPtgLlBfdmzpO1MApM75L3UAifsA"
  //   const url = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${city}`
  //   const data = await fetch(url)
  //   const result = data.json()
  //   console.log(result);
  //   return result
  // }
  // getCityInfo("Lahore")
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/weather' element={<Weather />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>

      </Router>

    </div>
  );
}

export default App;
