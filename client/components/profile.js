import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Profile = () => {
   const { username } = useParams()
  return (
    <div>
      <div id="title"> Profile </div>
      <div id="username"> { username } </div>
      <Link to="/dashboard">    Go To Root    </Link>
      <Link to="/dashboard/main">       Go To main</Link>
    </div>
  )
    
}

Profile.propTypes = {}

export default Profile
