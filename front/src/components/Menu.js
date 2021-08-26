
import React from 'react';
import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo.png";

  

import '../styles/Menu.css'

function Menu() {
    return <header>
                <nav> 
                    <link>
                    </link>
                     <Link to="/">
                            <img className="logo"  
                            // src="../img/logo.png"
                            src={logo} 
                            alt="Logo Groupomania "
                            />
                     </Link>                   

                    <ul>
                        <NavLink to="/Login">s'identifier</NavLink>
                        <NavLink to="/Signup" >s'inscrire</NavLink>
                        <NavLink to="/users/Profile/:id" ><i class="fas fa-home"></i></NavLink>
                    </ul>
                </nav>

                <h1 className="h1Menu">Bienvenue sur le Groupomania Social Network !</h1>
            </header>
}

export default Menu;
