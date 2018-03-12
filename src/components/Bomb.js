// Bomb Component Code Goes Here

import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {
    let statement;

    if (this.state.secondsLeft > 0){
     statement = `${this.state.secondsLeft} seconds left before I go boom!`;

    }
    else if(this.state.secondsLeft == 0 ){
     statement = `Boom!`;
    }


    return (
      <h1>{statement}</h1>
    );
  }
}

export default Bomb;
