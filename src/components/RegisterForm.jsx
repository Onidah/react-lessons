import React, { useState } from 'react'

function RegisterForm() {
    const[name,setName]=useState(""); 
    const[lastName,setlastName]=useState(""); 
    const[email,setEmail]=useState(""); 
    const[password,setPassword]=useState("");
    const[course,setCourse]=useState("");
    const[accepted,setAccepted]=useState(false);
    const [error,setError]=useState("")

    const handleSubmit=(e) =>{
        e.preventDefault();
        if (name === ""){
            setError ("Name is required")
        }else if(){

        }
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <div className='form-control'>
                <label htmlFor="name">First Name</label>
                <input type="text" 
                onChange={(e)=>setName(e.target.value)}
                value={name}
                id="name"
                />
            </div>

              <div className='form-control'>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" 
                onChange={(e)=>setlastName(e.target.value)}
                value={lastName}
                id="lastName"/>
            </div>

              <div className='form-control'>
                <label htmlFor="email">Email</label>
                <input type="text" 
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
                id='email'/>
            </div>

              <div className='form-control'>
                <label htmlFor="password">Password</label>
                <input type="password" 
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
                id="password"/>
            </div>

              <div className='form-control'>
                <select name="" id="" onChange={(e)=>setCourse(e.target.value)}
                    value={course}>
                    <option value="">COUSE TYPES</option>
                    <option value="html">html</option>
                    <option value="css">Css</option>
                    <option value="js">Js</option>
                </select>
                
            </div>
            
        </form>
    </div>
  )
}

export default RegisterForm