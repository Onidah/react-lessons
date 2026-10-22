import React, { useState } from 'react'

function Form() {
    const[firstName,setFirstName]=useState("");
    const[lastName,setLastName]=useState("");
    function handleSubmit(e){
        e.preventDefault()
        console.log(firstName,lastName);
    }

  return (
   <>
   <form onSubmit={handleSubmit}>
     <input type="text" 
        value={firstName}
        onChange={(e)=>setFirstName(e.target.value)}
        />

        <input type="text" 
        value={lastName}
        onChange={(e)=>setLastName(e.target.value)}
        />
        <button type='submit' onSubmit={()=>{
           <p>{firstName.value}</p> 
        }}>Create</button>
   </form>
   </>
  )
}

export default Form