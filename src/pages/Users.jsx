import React, { useEffect, useState } from 'react'
import AddUserForm from '../components/users/AddUserForm'

function Users() {

    const[users,setUsers]=useState([])

    const getUsers=()=>{
        fetch("http://localhost:3001/users")
        .then((response)=>response.json())
        .then((data)=>setUsers(data))
    }

    useEffect(()=>{
        getUsers();
    },[])


  return (
    <div>
        <AddUserForm getUsers={getUsers}/>
        {
            users.map((user)=>(
                <p>{user.name}</p>
                
            ))
        }
    </div>
  )
}

export default Users