import React, { useState } from 'react';

import '../styles/Profile.css'
import img from '../images/IMG_0141.JPG';
import { Link } from "react-router-dom";

    // class Profile extends Component  { 
    function Profile() { 
            const recupDataEtId = JSON.parse(sessionStorage.getItem( "dataEtId")) 
            const firstname = "firstnameDynamique";
            const [items, setItems] = useState([]);

            const Logout = () => {
                console.log("logout");                
                localStorage.removeItem("dataUser");
                window.location = "/Login";
            }
            
            // fetch('http://localhost:5000/api/postMessage')
            // .then(response => response.json())
            // .then(getMessages(result) => {

            //     console.log(result);
            // console.log(result.id_message);
            // sessionStorage.setItem("id_message", JSON.stringify(result.id_message) );
            //     setItems(result.items);
            //     console.log(setItems);
            // 
               
            // })
            // .catch((err) => console.log(err))
           

            return (

                    <main className="container mt10">
                       
                            <h2>Profile</h2>
                            {/* <!-- bloc utilisateur --> */}
                            <section class="container ">
                                {/* ******* bloc bienvenu******* */}
                                <div className="row maRow d-flex   " >
                                    <div className=" col col-8 justify-content-end ">
                                          <h3 className="text-center "> Bienvenue <span>{firstname}{/*{recupDataEtId.firstname}*/} !</span></h3> 
                                    </div>
                                    <div class=" col ">
                                    {/* <Link to="/Login" class="btn maBtn btnRedColorWhit " >Deconnection</Link>  */}
                                    <button onClick={Logout} class="btn maBtn btnRedColorWhit " >Deconnection</button> 
                                    </div>
                                </div>

                                 {/* ******* bloc des boutons comp publication commenter******* */}
                                <div class="row maRow" >
                                   
                                    <Link to="/users/Compte" class="btn maBtn" >Compte</Link>
                                    <Link to="/users/Publication" class="btn maBtn" >Publication</Link>
                                    
                                </div> 
                            </section>

                            {/* <!-- bloc avec tous le(s) message(s) --> */}
                            <section class=" maRow p-3">
                                <div> 
                                    <span> Posté par {firstname}{/*{recupDataEtId.firstname}*/} le 13/08/2021 {/*{createdAt}*/}</span> 
                                </div>

                                <div id="cardMessageImage" class="card" >
                                        {items.map((item) =>
                                        <div key={item.id}>

                                            <div class ="img" >
                                                <img src={img}
                                                // src={items.image} 
                                                id="image" alt="mon_image"    width="400" class="card-img-top" /> 
                                                {/*<img  src= {	messageUrl	}  alt="mon_image" />*/} 
                                            </div>

                                            <div card-body>
                                                <p class ="p-3" id="message">mon message 
                                                {/* {items.message} */}
                                                </p> 
                                            </div>

                                        </div>
                                        )};
                                </div>
                                
                                
                                <div>
                                    <button class="maBtn">supprimer Message<i class="bi bi-trash"></i></button>
                                    <Link to="/users/Commentaire"  class="btn maBtn" >Commenter</Link>
                                </div>

                            </section> 

                            {/* <!-- bloc avec tous le(s) commentaire(s) --> */}

                            <section class=" maRow p-3">
                                <div>
                                    <p> Soyez le premier à commenter cette publication  </p>
                                </div>

                                <div>
                                    <span>Commentaire rédigé  par {firstname}{/*{recupDataEtId.firstname}*/} le 13/08/2021 {/*{createdAt}*/}</span> 
                                </div>
                                
                                <div card-body>
                                    <p class ="p-3" >mon commentaire{ /*{ commentaire }*/}</p> 
                                </div>

                                <div>
                                    <button class="maBtn">supprimer commentaire<i class="bi bi-trash"></i></button>
                                </div>

                            </section> 
                                
                      
                    </main>
            )

        
    
    }

    export default Profile;
