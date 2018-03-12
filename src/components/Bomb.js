import React from 'react'

export default class Bomb extends React.Component {
  constructor(props) {
    super();
    this.state = {secondsLeft : props.initialCount}
  }
  render() {
    const message = this.state.secondsLeft ? `${this.state.secondsLeft} seconds left before I go boom!` : 'Boom!'
    return (
      <p>{message}</p>
    )
  }
}
