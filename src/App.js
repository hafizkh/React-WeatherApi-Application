import React, { useState } from 'react';
import './App.css';
import Weather from './components/Weather';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import WeatherCard from './components/WeatherCard';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  const [city, setCity] = useState('')
  const [cityDetail, setCityDetail] = useState(null)
  const getCityInfo = (event) => {
    event.preventDefault()
    const apiKey = "fwzsDPtgLlBfdmzpO1MApM75L3UAifsA"
    const url = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${city}`
    fetch(url)
      .then(res => res.json())
      .then(data => console.log(data[0]))
      .catch((e) => console.log(e));
    setCity('')
  }
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/weather' element={<Weather city={city} setCity={setCity}
            getCityInfo={getCityInfo} cityDetail={cityDetail} />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/weatherCard' element={<WeatherCard cityDetail={cityDetail} />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>

      </Router>

    </div>
  );
}

export default App;
