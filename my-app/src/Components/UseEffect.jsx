import React ,{useState,useEffect} from 'react'

function UseEffect() {
const [count, setcount] = useState(0)
const [name, setname] = useState("")
useEffect(()=>{
    console.log("useEfect-update document");
    document.title=`you click ${count} times`
},[count])
  return (
    <div>
        <input type="text" value={name} onChange={(e)=>setname(e.target.value)} />
        <button onClick={()=>setcount(prevCount=>prevCount+1)}>Count {count}</button>
    </div>
  )
}

export default UseEffect