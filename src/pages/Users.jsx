import React, { useEffect, useState } from 'react'
import AddUserForm from '../components/users/AddUserForm'
import UserList from '../components/users/UserList';
import EditUserForm from '../components/users/EditUserForm';

function Users() {

    const[users,setUsers]=useState([])
     const [name, setName] = useState("");
      const [email, setEmail] = useState("");

    const getUsers=()=>{
        fetch("http://localhost:3001/users")
        .then((response)=>response.json())
        .then((data)=>setUsers(data))
    }

    useEffect(()=>{
        getUsers();
       
    },[])

    const updateUser=(name,email)=>{

      fetch("http://localhost:3001/users/${edit.id}", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    })
      .then(()=>{
        getUsers();
        setUserEdit("nul")
      })
    }


  return (
    <div className='container'>
      {!editUser && <AddUserForm  getUsers={getUsers}/>}

        {editUser &&
          <EditUserForm 
          key={editUser.id}/>
          user={user}
          onUpdate={updateUser}
          onCancel={()=>setEditUser(null)}
        }
        {
           <UserList users={users}
           onEdit={setEditUser}/>
        }
    </div>
  )
}

export default Users