import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <ul>
            <li className='nav-item'> 
                <NavLink to='/'>
                    Home
                </NavLink>
                
            </li>
            <li className='nav-item'>
            <NavLink to='about'>
                    About
                </NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Navbar