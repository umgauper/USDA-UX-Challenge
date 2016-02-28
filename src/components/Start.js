import React, { Component } from 'react'
import { Link } from 'react-router'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h4>Welcome to the USDA Application for free school lunches.</h4>
       <Link to="children/1"><button>START</button></Link>
      </div>
    );
  }
}