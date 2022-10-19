import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  

  return (
    <div className='nav'>
      <div className='navbar'>
        <div className='nav-logo'>
          <p>sama3l</p>
        </div>
        <div className='nav-link'>
          <ul className='link'>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink to='/doc'>Doc</NavLink>
            </li>
            <li>
              <NavLink to='/tools'>Tools</NavLink>
            </li>
            <li>
              <NavLink to='/connect'>Connect</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar