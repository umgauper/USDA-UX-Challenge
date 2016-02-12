import React, { Component } from 'react'
import { Link } from 'react-router'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
       <h1>Main App</h1>
       <Link to="children">Children</Link>
       // <Link to="assistance">Assistance</Link>
       // <Link to="childIncome">Child Income</Link>
       // <Link to="adultIncome">Adult Income</Link>
       // <Link to="contact">Contact Information</Link>
       {this.props.children}
      </div>
    );
  }
}
//TODO: figure  out why typing /assistance (or other route) in address bar doesn't work, but clicking link to /assistance works?
//TODO: figure out how to trigger route change in click handler
//TODO: why is there # in the url ?