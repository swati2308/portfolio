import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export const Navbar = (props) => {
    return(
        <nav>
          <ul>
            {console.log(props.name)}
            <NavLink to="/"><li>Home</li></NavLink>
            <NavLink to="/about"><li>About Me</li></NavLink>
            <NavLink to="/myskills"><li>My Skills</li></NavLink>
            <NavLink to="/portfolio"><li>Portfolio</li></NavLink>
            <NavLink to="/contact"><li>Contacts</li></NavLink>
          </ul>
        </nav>
  )
}




