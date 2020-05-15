import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'

const dashboard = () => {
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title">dashboard </div>
          <Link to="/dashboard/profile/470ef5cc-1325-4d29-b775-498df8cd163f"> Go To Profile  </Link>
          <Link to="/dashboard/main">  Go To Main</Link>
        </div>
      </div>
    </div>
  )
}

dashboard.propTypes = {}

export default dashboard