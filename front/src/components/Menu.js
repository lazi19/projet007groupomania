import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../images/logo.png'

import '../styles/Menu.css'

function Menu() {
  const user = JSON.parse(localStorage.getItem('user'))

  if (
    window.location.pathname === '/Signup' ||
    window.location.pathname === '/Login'
  ) {
    return (
      <header>
        <nav>
          <img className="logo" src={logo} alt="Logo Groupomania " />

          <ul>
            <NavLink to="/Login">s'identifier</NavLink>
            <NavLink to="/Signup">s'inscrire</NavLink>
          </ul>
        </nav>

        <h1 className="h1Menu">
          Bienvenue sur le Groupomania Social Network !
        </h1>
      </header>
    )
  } else {
    return (
      <header>
        <nav>
          <img className="logo" src={logo} alt="Logo Groupomania " />

          <ul>
            <NavLink to="/users/Profile/:id">
              <i className="fas fa-home"></i>
            </NavLink>
          </ul>
        </nav>

        <h1 className="h1Menu">
          Bienvenue sur le Groupomania Social Network !
        </h1>
      </header>
    )
  }
}

export default Menu
