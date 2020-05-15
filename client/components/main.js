import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div>
      <div id="title"> Main </div> 
      <Link to="/dashboard/profile/470ef5cc-1325-4d29-b775-498df8cd163">Go To Profile</Link>
      <Link to="/dashboard">      Go To Root</Link>
    </div>
  )
}

Main.propTypes = {}

export default Main