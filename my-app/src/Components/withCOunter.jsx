import React from "react";
import { Component } from "react";

const withCounter=(WrappedComponent,increment)=>{

    class newCounter extends Component{
        constructor(props) {
            super(props)
          
            this.state = {
               count:0
            }
          }
          handleClick=()=>{
              this.setState(prevState=>{
                 return {count:prevState.count+increment}
              })
          }
        render(){
            return (<WrappedComponent
            count={this.state.count}
            increment={this.handleClick}
            {...this.props}
            />
            )
        }
    }
    return newCounter
}
export default withCounter