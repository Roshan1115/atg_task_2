import React from 'react'
import './App.css'
import UsersHolder from './/Components/UsersHolder'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress'


const ErrorMessage = () => {
  return(
    <>
      <h1>There is some problem in server. Please visit after some time.</h1>
    </>
  )
}



function App() {

  const [Users, setUsers] = useState();
  const [time, setTime] = useState(0)

  const Nodata = () => {

    let timeId = setInterval(() => {
        setTime(time+1);
    }, 1000);

    if(time > 3 || Users)
    {
      clearInterval(timeId);
    }
    return(
      <>
      {
        (time <= 3) ? <CircularProgress /> : <ErrorMessage />
      }
        
      </>
    )
  }

  console.log(time);



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