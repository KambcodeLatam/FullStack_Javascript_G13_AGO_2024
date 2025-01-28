import React from 'react'
import './navbar.css'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className="container">

            <nav>
                <ul className="nav-links">
                    <li>
                        <a href="/">Home a</a>
                    </li>
                    <li>
                    <Link to='/'>Home</Link>
                    </li>
                    <li>
                    <NavLink to='/about' className={({ isActive }) => isActive ? 'active' : ''} >About</NavLink>
                    </li>
                </ul>
                {/* <div className="burger">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div> */}
            </nav>
        </div>
    </div>
  )
}

export default Navbar