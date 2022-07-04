import React from 'react'
import './App.css'
import UsersHolder from './/Components/UsersHolder'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress'


const errorMessage = () => {
  return(
    <>
      <h1>There is some problem in server. Please visit after some time.</h1>
    </>
  )
}

const Nodata = () => {
  window.setTimeout(errorMessage, 3000)
  return(
    <>
      <CircularProgress />
    </>
  )
}

function App() {

  const [Users, setUsers] = useState();

  useEffect(() => {
    axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users')
    .then(res => {
      // console.log(res);
      const data = res?.data;
      setUsers(data);
    })
    .catch(err => {
      // console.log(err);
    })
  })


  return (
    <>
      <div className="wrapper">
      {
        (Users) ?
          <UsersHolder Users={Users} />
          :
          <Nodata />
      }
          
      </div>

    </>
  )
}

export default App