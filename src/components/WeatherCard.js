import React,{useState,useEffect} from 'react'
import { Card, Button } from 'react-bootstrap'

const WeatherCard = ({cityDetail}) => {
  // console.log(cityDetail);
  const [data, setData] = useState(null);

  // useEffect(()=>{
  //   setData(null)
  //   const apiKey = "fwzsDPtgLlBfdmzpO1MApM75L3UAifsA"
  //   const url = `http://dataservice.accuweather.com/currentconditions/v1/${cityDetail.Key}?apikey=${apiKey}`
  //   fetch(url)
  //   .then((response)=>{
  //     setData(response.data([0]))
  //   })
  
  // },[cityDetail.Key])

    
  return (
    <div >

      <Card style={{ borderRadius: '1rem', height: '20rem' }} className= 'mt-3'>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

    </div>
  )
}

export default WeatherCard
