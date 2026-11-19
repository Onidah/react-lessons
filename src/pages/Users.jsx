import React, { useEffect, useState } from 'react'
import AddUserForm from '../components/users/AddUserForm'
import UserList from '../components/users/UserList';
import EditUserForm from '../components/users/EditUserForm';

function Users() {

    const [users, setUsers] = useState([])
    const [editUser, setEditUser] = useState(null)

    const getUsers = () => {
        fetch("http://localhost:3000/users")
        .then((response) => response.json())
        .then((data) => setUsers(data))
    }

    useEffect(() => {
        getUsers();
    }, [])

    const updateUser = (name, email) => {
      fetch(`http://localhost:3000/users/${editUser.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      })
      .then(() => {
        getUsers();
        setEditUser(null)
      })
    }

    const deleteUser = (id) => {
      if (!window.confirm("Delete this user?")) return;

      fetch(`http://localhost:3000/users/${id}`, {
        method: "DELETE",
      }).then(() => {
        getUsers();
        if (editUser?.id === id) setEditUser(null);
      });
    }

  return (
    <div className='container'>
      {!editUser && <AddUserForm getUsers={getUsers} />}

      {editUser && (
        <EditUserForm
          key={editUser.id}
          user={editUser}
          onUpdate={updateUser}
          onCancel={() => setEditUser(null)}
        />
      )}

      <UserList
        users={users}
        onEdit={setEditUser}
        onDelete={deleteUser}
      />
    </div>
  )
}

export default Users