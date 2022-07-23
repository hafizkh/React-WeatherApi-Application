import React from 'react'
import { Form, Button } from "react-bootstrap"
import WeatherCard from './WeatherCard'

const Weather = ({city,setCity, getCityInfo}) => {
  const handleChange =(e)=>{
    setCity(e.target.value)
  }

  return (
    <div style={{width: '25rem'}} className='container'>

      <Form style={{ height: '2.4rem'}} className="d-flex mt-4" onSubmit={getCityInfo}>
        <Form.Control
          type="search"
          placeholder="Search By City"
          className="me-2"
          aria-label="Search"
          value={city}
          onChange={handleChange}
        />
        <Button style={{alignSelf: 'center'}} variant="outline-success" type='submit'>Search</Button>
      </Form>
      
      <WeatherCard/>
    </div>
  )
}

export default Weather
