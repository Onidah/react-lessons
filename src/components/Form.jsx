import React, { useState } from 'react'

function Form() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [fullName, setFullName] = useState("");

    function handleSubmit(e){
        e.preventDefault();

    }

  return (
   <>
   <form onSubmit={handleSubmit}>
     <input 
        type="text" 
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
     />

     <input 
        type="text" 
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
     />

     <button type="submit" onClick={() => setFullName(`${firstName}  ${lastName}`)}>
       Submit
     </button> 
   </form>

   <p>{fullName}</p>
   </>
  )
}

export default Form