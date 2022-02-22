import React ,{useState,useEffect}from 'react'

function IntervalHook() {
    const [count, setcount] = useState(0)

    const tick=()=>{
        setcount(prevState=>prevState+1)
    }

    useEffect(()=>{
        const interval=setInterval(tick,1000)
        //component will mount
        return()=>{
            clearInterval(interval)
        }
    },[])
  return (
    <div>{count}</div>
  )
}

export default IntervalHook