import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export const Navbar = (props) => {
    return(
        <nav className='navbar'>
          <ul>
            {console.log(props.name)}
            <NavLink to="/"><li>Home</li></NavLink>
            <NavLink to="/about"><li>About</li></NavLink>
            <NavLink to="/contact"><li>Contact</li></NavLink>
            <li className='pseudo'>Swati Kumari</li>
          </ul>
        </nav>
  )
}


