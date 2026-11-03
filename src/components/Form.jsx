import React, { useState } from 'react'

function Form() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [fullName, setFullName] = useState("");
    const[error,setError]=useState("");

    function handleSubmit(e){
      setError(
        firstName===""? "Name is required" :"",
        
      )
      setError(
        lastName ==="" ? "Last name is required":""
      )
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
     <p>{error}</p>

     <input 
        type="text" 
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
     />
     <p>{error}</p>

     <button type="submit" onClick={() => setFullName(`${firstName}  ${lastName}`)}>
       Submit
     </button> 
   </form>

   <p>{fullName}</p>
   </>
  )
}

export default Form