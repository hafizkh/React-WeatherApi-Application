import React, { Component } from 'react'

export default class Weather extends Component {

    constructor(){
        super();
        this.state = {
            day : 'Thursday',
            yesterday: 'Wednesday'
            
        }
    }
  render() {
    return (
      <div >
        <h1> On {this.state.day}, there is Raining</h1>
        <h1> On {this.state.day}, there was Sunny</h1>
      </div>
    )
  }
}
