import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <div id="title">Dashboard </div>
      <Link to="/dashboard/profile/470ef5cc-1325-4d29-b775-498df8cd163f"> Go To Profile  </Link>
      <Link to="/dashboard/main">  Go To Main</Link>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard