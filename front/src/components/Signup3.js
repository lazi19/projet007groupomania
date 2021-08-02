import React, { useState, useEffect, useRef } from 'react';
import { useForm } from "react-hook-form";
// import useSignUp from "../hooks/useSignup";
// import { ErrorMessage } from '@hookform/error-message';

import '../styles/Signup.css';

interface FormData {
    
  lastname: String;
  firstname: String;
  mail: String;
  password: String;
  terms: boolean;
  }

const Signup = () => {  
    
    const { register, handleSubmit, errors } = useForm<FormData>({
        defaultValues: {
            name: "test",
            email: "email@email.com",
            password: "P@ssw0rd!",
            // terms: true,
          }, 
    });


    const onSubmit = data => {
        console.log("dataaaaaaa:", data);
        useEffect()
    }
    
    // const onError = (errors, e) => console.log(errors, e);

    useEffect(() => {
        // POST request using fetch inside useEffect React hook
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React Hooks POST Request Example' })
        };
        fetch('https://reqres.in/api/posts', requestOptions)
            .then(response => response.json())
            .then(data => setPostId(data.id));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);


    return (
        <div className="creationCompte">
                <fieldset>
                     <form id="formSignin" className="formSignin" name="form" onSubmit={handleSubmit(onSubmit)}>
                        <h2 className="creationCompt">Créer un compte</h2>
                        <hr></hr>
                        <div className="formNom">
                            <label htmlFor="lastname">Nom </label>
                            <input
                                type="text"  id="lastname"  required  placeholder="Votre Nnom"
                                {...register("lastname")} 
                            />
                           
                        </div>

                        <div className="formPrenom">
                            <label htmlFor="firstname">Prenom </label>
                            <input  type="text"  id="firstname"  required  placeholder="Votre Nnom"
                                    {...register("firstname")}/>
                        </div> 

                        <div className="formMail">
                            <label htmlFor="mail">E-mail </label>
                            <input type="email"  id="mail"  required  placeholder="mail@serveur.com"
                                   {...register("mail")}
                            />
                        </div>

                        <div className="formPassword">
                            <label htmlFor="password">Mot de passe</label>
                            <input type="password"  id="password"  name="password"  required  placeholder="Enter Password"
                                   {...register("password") }
                                //    {...register("password", { minLength: 8, pattern: [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/] }) }
                            />
                            {/* {errors.password  && "Doit être de 8 caractères, au moins une minuscule, au moins une majuscule, au moins un chiffreau, moins un caractère spécial"} */}
                        </div>

                        <div className="formConfirmPassword">
                            <label htmlFor="confirmPassword">Confirmation mot de passe</label>
                            <input type="password"  id="confirmPassword"  name="confirmPassword"  required  placeholder="Enter Password"
                                   {...register("confirmPassword")}
                            /><br /><br />
                        </div>

                        <div className="clearfix">
                            <button type="submit" className="signupbtn" disabled={isLoading}>
                                {isLoading
                                    ? 'LOADING'
                                    : 'Se Connecter'
                                }

                            </button>
                        </div>
                    </form> 
                    <p>Vous avez déjà un compte? <br />
                    <a href="./Login">Log in here</a>
                    </p>
                </fieldset>
        </div>  

    )
       
   
}

export default Signup;