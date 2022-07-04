import React, { useEffect } from 'react'
import { useState } from 'react';
import imageUrl from './profile.png'

function UserCard(props) {
  
  const {user, selectUser, selectedId} = props;
  const [selected, setSelected] = useState(false);

  let bgStyle = {}

  if(selectedId && selectedId == user.id)
    bgStyle = {
      background: (selected) ? '#D5D5D5' : '#ECECEC'
    };

  return (
    <>
    <button
    onClick={() => {
      selectUser(user.id)
      setSelected(true)
    }}

    className="btn"
    >
      <div
      style={bgStyle}
       className="userCard">
          <img
          className='profileImage'
          src={imageUrl} alt="Profile Image" />

          <p>{`${user.profile.firstName} ${user.profile.lastName}`}</p>
        </div>
    </button>

    </>
  )
}

export default UserCard