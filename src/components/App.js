import React, { Component } from 'react';
import { NICE, SUPER_NICE } from './../colors';
import { Link } from 'react-router';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
       <h1>Main App</h1>
       <Link to="children">Children</Link>
       <Link to="assistance">Assistance</Link>
       <Link to="income">Income</Link>
       <Link to="contact">Contact Information</Link>
       {this.props.children}
      </div>
    );
  }
}
//TODO: figure  out why typing /assistance (or other route) in url doesn't work, but clicking link to /assistance works?
//TODO: figure out how to trigger route change in click handler