import React from 'react'
import { NavLink } from 'react-router-dom'
const NavBar = () => {
  return (
    <nav>
      <NavLink to='/'> Home </NavLink>
      
      <NavLink to='/about'> About </NavLink> 
      <NavLink to='/product'> Products </NavLink>
    </nav>
  )
}

export default NavBar
