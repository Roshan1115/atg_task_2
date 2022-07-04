import React from 'react'
import UserDetail from './UserDetails'
import UserList from './UserList'
import img from './profile.png'
import { useState } from 'react'



function UsersHolder(props) {


  const [selectedUserId, setSelectedUserId] = useState()

  const {Users} = props

  const selectUser = (id) => {
    setSelectedUserId(id);
  }

  const selectedUser = Users.find( user => user.id == selectedUserId)

  return (
    <>


      <div className="userList">
        <div className="list_holder">
          <UserList 
            Users={Users}
            selectUser={selectUser}
            selectedId = {selectedUser?.id}
          />
        </div>
        <div className="detail_holder">
          <UserDetail
          selectedUser = {selectedUser}
           />
        </div>
      </div>
    </>
  )
}

export default UsersHolder