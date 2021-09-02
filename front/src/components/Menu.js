
import React from 'react';
import { Link, NavLink } from "react-router-dom";

import logo from "../images/logo.png";

import '../styles/Menu.css'



function Menu() {
    const user = JSON.parse(localStorage.getItem('user'));
    // const [id, setId] = useState(null);

    // if(user){
    //     setId(user.id) ;
    //     window.location = `/users/Profile/${id}`
    // }else{
    //     <Link to="/Login"></Link> 
    // } 
    
    // const id = user.id
//window.location.basename path="/Signup"
if(window.location.pathname === "/Signup" || window.location.pathname === "/Login"){
    return <header>
    <nav> 
        {/* <link>
        </link> */}
         {/* <Link to="/"> */}
                <img className="logo"  
                // src="../img/logo.png"
                src={logo} 
                alt="Logo Groupomania "
                />
         {/* </Link>                    */}

        <ul>
            <NavLink to="/Login">s'identifier</NavLink>
            <NavLink to="/Signup" >s'inscrire</NavLink>
           
        </ul>
    </nav>

    <h1 className="h1Menu">Bienvenue sur le Groupomania Social Network !</h1>
</header>

}else{
    return <header>
    <nav> 
        {/* <link>
        </link> */}
         {/* <Link to="/"> */}
                <img className="logo"  
                // src="../img/logo.png"
                src={logo} 
                alt="Logo Groupomania "
                />
         {/* </Link>                    */}

        <ul>
           
            <NavLink to="/users/Profile/:id" ><i className="fas fa-home"></i></NavLink>
        </ul>
    </nav>

    <h1 className="h1Menu">Bienvenue sur le Groupomania Social Network !</h1>
</header>
}



    
}

export default Menu;
