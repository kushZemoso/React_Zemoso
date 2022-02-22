import React, { Component } from 'react'
import withCounter from './withCOunter'

 class ClickCounter extends Component {
     

  render() {
      const{count,increment}=this.props
    return (
      <div>
          <button onClick={increment}>{this.props.name} Click counter {count} times</button>
      </div>
    )
  }
}

export default withCounter(ClickCounter,5)