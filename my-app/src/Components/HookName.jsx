import React,{useState} from 'react'

function HookName() {
    const [name, setName] = useState({firstName:"",lastName:""})
  return (
    <form action="">
        <input type="text" value={name.firstName} onChange={e=>setName({...name,firstName:e.target.value})}/>
        <input type="text" value={name.lastName} onChange={e=>setName({...name,lastName:e.target.value})}/>
        <h2>Your First Name:{name.firstName}</h2>
        <h2>Your Last Name:{name.lastName}</h2>
    </form>
  )
}

export default HookName