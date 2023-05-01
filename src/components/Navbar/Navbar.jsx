import React from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-left">
            <h3>RentWheels</h3>
        </div>
        <div className="navbar-right">
            <ul>
                <li><Link to='/'>Login</Link></li>
                <li><Link to='/signup'>SignUp</Link></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
