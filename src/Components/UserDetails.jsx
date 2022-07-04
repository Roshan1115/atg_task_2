import React from 'react'
import imageUrl from './profile.png'

function UserDetails(props) {

  const {selectedUser : user} = props;

  return (
    <>
      <div className="Heading_holder">
        <p>USER DETAILS</p>
      </div>

      {
        (user) ?

        <div className="list details">
        <div className="top">
          <img src={imageUrl} alt="Profile Image" />
          <p>{user.profile.username}</p>
        </div>

        <div className="buttom">
          <div className="about text">
            <p>
            {user.Bio}
            </p>
          </div>

          <p>Full Name</p>
          <div className="text fname field">
            <p>{user.profile.firstName} {user.profile.lastName}</p>
          </div>

          <p>Job Title</p>
          <div className="text job field">
            <p>{user.jobTitle}</p>
          </div>

          <p>Email</p>
          <div className="text email field">
            <p>{user.profile.email}</p>
          </div>

        </div>
      </div>

        :

        <p
        style={{textAlign:'center', margin:'2rem 0rem'}}
        >Please select am user to see details</p>
      }

      
    </>
  )
}

export default UserDetails