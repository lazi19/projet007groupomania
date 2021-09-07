
// import React from 'react';
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import '../styles/Signup.css';


function Signup() {
    const { register, handleSubmit } = useForm();
    const [postId, setPostId] = useState(null);
    const user = JSON.parse(localStorage.getItem( "user"));
    const [id, setId] = useState(null);
    
    if(user){
        setId(user.id) ;
        window.location = `/users/Profile/${id}`
    }else{
        <Link to="/Login"></Link> 
    }
    function onSubmit(data) {
        // display form data on success

        alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
        console.log(data); 

        // POST request using fetch 

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        };
        
        fetch('http://localhost:5000/api/users', requestOptions)
            .then(response =>{
                if (response.status !== 201) {
                    throw  new Error( response.status ) ;
                }

                return response.json()
            })

            .then((data)=> {
                setPostId(data.id) ;
                window.location = "/Login"
                // <Link to="/Login"></Link> 
            })
            .catch(err => {
                //On traite ici les erreurs éventuellement survenues
                console.log( err + " utilistauer deja créer");
                alert(err + " utilistauer deja créer")
            });

    }

    return (
        <div className="creationCompte" >
                <fieldset>
                    <form id="formSignin" className="formSignin" name="form" onSubmit={handleSubmit(onSubmit)}>
                        <h2 className="creationCompt">Créer un compte</h2>
                        <hr></hr>
                        <div className="formNom">

                            <label htmlFor="lastname">Nom </label>
                            <input  type="text"  id="lastname"  name="lastname"  required  placeholder="Votre Nom"
                            {...register('lastname')}  
                            />

                        </div>

                        <div className="formPrenom">

                            <label htmlFor="firstname">Prenom </label>
                            <input  type="text"  id="firstname"  name="firstname"  required  placeholder="Votre Prénom"
                            {...register('firstname')} 
                            />
                           
                        </div> 

                        <div className="formMail">

                            <label htmlFor="mail">E-mail </label>
                            <input type="email"  id="mail"  name="mail"  required  placeholder="email@serveur.com"
                            {...register('mail')}
                            />
                           
                        </div>

                        <div className="formPassword">

                            <label htmlFor="password">Mot de passe</label>
                            <input type="password"  id="password"  name="password"  required  placeholder="Mot de passe "
                             minLength="8"
                             pattern="(?=.*\d)(?=.*[a-z]).{8,}"
                             title= "Mot de pasese doit contenir au moins un chiffre, une lettre  et au moins 8 caractères ou plus"
                            {...register('password')}
                            />
                            <br /><br />
                        </div>                       

                        <div className="clearfix">
                            <button type="submit" className="signupbtn" >S'inscrire</button>
                        </div>
                    </form> 
                    <p>Vous avez déjà un compte ? <Link to="/Login"><strong> Se connecter </strong></Link>   </p>
                
                </fieldset>
        </div> 
    ) 
}

export default Signup;