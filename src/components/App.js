// import React from 'react';

// export default class App extends React.Component {
//   constructor() {
//     super();
//   }

//   render() {
//     return(
//       <div>
//         <h1>Working !</h1>
//       </div>
//     )
//   }
// }

import React, { Component } from 'react';
import { NICE, SUPER_NICE } from './../colors';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.interval = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      counter: this.state.counter + this.props.increment
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <h1 style={{ color: this.props.color }}>
        Counter ({this.props.increment}): {this.state.counter}
      </h1>
    );
  }
}

export class App extends Component {
  render() {
    return (
      <div>
        <h2>HI Im Una GAUPER</h2>
        <Counter increment={1} color={NICE} />
        <Counter increment={5} color={SUPER_NICE} />
      </div>
    );
  }
}