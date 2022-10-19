import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Doc = () => {
  return (
    <div>
      <div className='nest-nav'>
        <ul className='nest-link'>
          <li>
            <NavLink to='html'>HTML</NavLink>
          </li>
          <li>
            <NavLink to='css'>CSS</NavLink>
          </li>
          <li>
            <NavLink to='bootstrap'>Bootstrap</NavLink>
          </li>
          <li>
            <NavLink to='tailwind'>TailwindCSS</NavLink>
          </li>
          <li>
            <NavLink to='material'>MaterialUI</NavLink>
          </li>
          <li>
            <NavLink to='javascript'>JavaScript</NavLink>
          </li>
          <li>
            <NavLink to='react'>React</NavLink>
          </li>
          <li>
            <NavLink to='html'>HTML</NavLink>
          </li>
          <li>
            <NavLink to='html'>HTML</NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
      
      <div></div>
    </div>
  )
}

export default Doc