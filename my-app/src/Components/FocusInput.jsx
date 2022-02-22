import React, { Component } from 'react'
import InputRefs from './InputRefs'

export class FocusInput extends Component {
    constructor(props) {
      super(props)
    
      this.componentRef=React.createRef()
    }
    clickHandle=()=>{
        this.componentRef.current.focusInput()
    }
  render() {
    return (
      <div>
          <InputRefs ref={this.componentRef}/>
          <button onClick={this.clickHandle}>FocusInput</button>
      </div>
    )
  }
}

export default FocusInput