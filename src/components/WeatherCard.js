import React from 'react'
import { Card, Button } from 'react-bootstrap'

const WeatherCard = ({cityData}) => {
return(
    <div >

      <Card style={{ borderRadius: '1rem', height: '20rem' }} className= 'mt-3'>
        <Card.Img variant="top" src="" />
        <Card.Body>
          {/* <Card.Title>{cityData.EnglishName}</Card.Title> */}
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
