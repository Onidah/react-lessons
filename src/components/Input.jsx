import React, { useState } from 'react'

function Input() {
    const[firstName,setFirstName]=useState("");
  return (
    <div>
        <input type="text" 
        value={firstName}
        onChange={(e)=>setFirstName(e.target.value)}
        />
        <p>Name: {firstName}</p>
    </div>
  )
}

export default Input