import React from 'react'
import  ReactDOM  from 'react-dom'

function Portal() {
  return  ReactDOM.createPortal(
    <h1>Portal</h1>,
  document.getElementById("port-root")
  )
}

export default Portal