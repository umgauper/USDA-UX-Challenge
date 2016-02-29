import React, { Component } from 'react'
import { Link } from 'react-router'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    let styles = {
      mainDiv: {
        margin: '4% 20% 0% 10%',
      }
    }
    return (
      <div style={styles.mainDiv}>
       {this.props.children}
      </div>
    );
  }
}
//TODO: figure  out why typing /assistance (or other route) in address bar doesn't work, but clicking link to /assistance works?
//TODO: figure out how to trigger route change in click handler
//TODO: why is there # in the url ?