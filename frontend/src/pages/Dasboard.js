import React from 'react'
import Profile from '../components/Profile'

function Dasboard() {
  return (
    <div style={{
background:`url('/bg.png')`,
backgroundSize:'cover',
backgroundPosition:'center',
backgroundRepeat:'no-repeat',

    }} className='text-xl min-h-screen max-w-screen'>
      <Profile/>
    </div>
  )
}

export default Dasboard