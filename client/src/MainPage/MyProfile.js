import React from 'react'

function MyProfile({user, setUser}) {
    

  return (
    <div>
        <h1>My Profile</h1>
        <h2>Username: {user.username}</h2>

    </div>
  )
}

export default MyProfile