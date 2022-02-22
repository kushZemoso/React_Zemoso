import React, { Component } from 'react'
import withCounter from './withCOunter'

class Hover extends Component {
 
  render() {
    const{count,increment}=this.props
    return (
      <h1 onMouseOver={increment}>Hover {count} no of times</h1>
    )
  }
}

export default withCounter(Hover,10)