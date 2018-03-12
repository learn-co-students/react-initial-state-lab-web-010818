// Bomb Component Code Goes Here
import React, { Component } from "react";

class Bomb extends Component{
  state = {
    secondsLeft: this.props.initialCount
  }

  render(){

    let result = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;
    return(
      <h1>{result}</h1>
    )
  }
}




export default Bomb;
