import React from 'react'
import UserCard from './UserCard'

function UserList(props) {
  const {Users, selectUser, selectedId} = props;
  return (
    <>
      <div className="Heading_holder">
        <p>USER LIST</p>
      </div>

      <div className="list">

      {
        Users.map( user => (
        <UserCard 
          user={user}
          selectUser={selectUser}
          selectedId={selectedId}
        />
        ))
      }
   
      </div>

    </>
  )
}

export default UserList