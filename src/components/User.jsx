import React from 'react'

function User({user}) {
  return (
    <div>
        {user.username}
        {user.email}
        {user.phone}
    </div>
  )
}

export default User