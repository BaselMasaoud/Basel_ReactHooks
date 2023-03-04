import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className='navbar'>
        <Link className='link' to='/' >Home</Link>
        <Link className='link' to='/login'>Login</Link>
        <Link className='link' to='register'>Register</Link>
    </nav>
  )
}
