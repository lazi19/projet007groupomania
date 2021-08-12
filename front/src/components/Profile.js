// import React, {Component} from 'react'

import { redirect } from "next/dist/next-server/server/api-utils";

// function Profile() {
    // class Profile extends Component  { 
        function Profile() { 
            const recupDataEtId = JSON.parse(sessionStorage.getItem( "dataEtId")) 
            const firstname= "assia";

            const Logout = () => {
                console.log("logout");
               redirect<Login />
            }


            return (

                    <div className="container mt10">
                        <div>
                            <h1>Profile</h1>
                            {/* <h2> Bonjour, <span>{recupDataEtId.firstname}</span></h2> */}

                            <h2> Bonjour, <span>{firstname}</span></h2>

                            <button onClick={Logout} >Deconnection</button>

                        </div>
                        <div>

                        </div>
                        
                        {/* <ul className="list-group list-group-flush">
                            <li className=" list-group-item">ID: {this.state.id} </li>
                        </ul>
                        <button>Valider</button> */}
                        
                    </div>
                )

        
    
}

export default Profile;
