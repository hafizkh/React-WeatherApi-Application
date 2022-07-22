import React from 'react'
import { Form, Button } from "react-bootstrap"

const Weather = () => {

  return (
    <div>
      <Form style={{ margin: '47.5rem' }} className="d-flex mt-4 search-form">
        <Form.Control
          type="search"
          placeholder="Search By City"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
     
    </div>
  )
}

export default Weather
