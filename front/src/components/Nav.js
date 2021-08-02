
import React from 'react';

import '../styles/Nav.css'

function Nav() {
    return <div>
                <nav> 
                     <a href="./Nav.js">
                            <img className="logo"  src="../img/icon-left-font-monochrome-color.png" alt="Logo Groupomania "/>
                     </a>                   

                    <ul>
                        <a href="./Login.js">s'identifier</a>
                        <a href="./Signup.js">s'inscrire</a>
                    </ul>
                </nav>

                <h1 className="">Bienvenue sur le Groupomania Social Network !</h1>
            </div>
}

export default Nav;
