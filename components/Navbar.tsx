import React from 'react'
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <ul>
        <li className='navbar-title'>Fake Agency</li>
        <div className='menu-list'>
        <li>Work</li>
        <li>About us</li>
        <li>Contact</li>

        </div>
        <li>Burger</li>

      </ul>
    </div>
  )
}

export default Navbar