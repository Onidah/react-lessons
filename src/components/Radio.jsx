import React, { useState } from 'react'

function Radio() {
    const[check,setCheck]=useState(null)
  return (
    <div>
        <input type="radio"
        name="gender"
        checked={check==="male"} value="male"
        onChange={(e)=>setCheck(e.target.value)} />Male

        <input type="radio"
        name="gender"
        checked={check==="female"} value="female"
        onChange={(e)=>setCheck(e.target.value)} />Female
    </div>
  )
}




export default Radio