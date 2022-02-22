import React,{useState} from 'react'

function HookCounter() {
    const initialValue=0;
const [count, setcount] = useState(initialValue)
  return (
    <div>
        Count:{count}
        <button onClick={()=>setcount(prevCount=>prevCount+1)}>Increment </button>
        <button onClick={()=>setcount(prevCount=>prevCount-1)}>Decrement </button>
        <button onClick={()=>setcount(initialValue)}>Reset </button>
    </div>
  )
}

export default HookCounter