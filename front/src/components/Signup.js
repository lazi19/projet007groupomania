
// import React from 'react';
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as Yup from 'yup';
import '../styles/Signup.css';


function Signup() {

//  // form validation rules 
//  const validationSchema = Yup.object().shape({
//    
//     firstname: Yup.string()
//         .required('First Name is required'),
//     lastname: Yup.string()
//         .required('Last name is required'),
//     // dob: Yup.string()
//     //     .required('Date of Birth is required')
//     //     .matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/, 'Date of Birth must be a valid date in the format YYYY-MM-DD'),
//     mail: Yup.string()
//         .required('Email is required')
//         .mail('Email is invalid'),
//     password: Yup.string()
//         .min(6, 'Password must be at least 6 characters')
//         .required('Password is required'),
//     confirmPassword: Yup.string()
//         .oneOf([Yup.ref('password'), null], 'Passwords must match')
//         .required('Confirm Password is required'),
//     acceptTerms: Yup.bool()
//         .oneOf([true], 'Accept Ts & Cs is required')
// });

// const formOptions = { resolver: yupResolver(validationSchema) };



    // const { register, handleSubmit, formState } = useForm(formOptions);
    const { register, handleSubmit } = useForm();
    // const { errors } = formState;
    const [postId, setPostId] = useState(null);
  
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
                    throw new Error(response.status)
                  }
                return response.json()} )

            .then((data)=> {
                setPostId(data.id) 
                window.location = "/Login"
            })
            .catch(err => {
                //On traite ici les erreurs éventuellement survenues
                console.log( err);
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
                            <input  type="text"  id="lastname"  name="lastname"  required  placeholder="Votre Nnom"
                            {...register('lastname')}  
                            // className={`form-control //${errors.lastname ? 'is-invalid' : ''}`}                          
                            />
                            {/* <div className="invalid-feedback">{errors.lastname?.message}</div> */}
                        </div>

                        <div className="formPrenom">
                            <label htmlFor="firstname">Prenom </label>
                            <input  type="text"  id="firstname"  name="firstname"  required  placeholder="Votre Nnom"
                            {...register('firstname')} //className={`form-control ${errors.firstname ? 'is-invalid' : ''}`}
                            />
                            {/* <div className="invalid-feedback">{errors.firstname?.message}</div> */}
                        </div> 

                        <div className="formMail">
                            <label htmlFor="mail">E-mail </label>
                            <input type="email"  id="mail"  name="mail"  required  placeholder="email@serveur.com"
                            {...register('mail')} //className={`form-control ${errors.mail ? 'is-invalid' : ''}`} 
                            />
                            {/* <div className="invalid-feedback">{errors.mail?.message}</div> */}
                        </div>

                        <div className="formPassword">
                            <label htmlFor="password">Mot de passe</label>
                            <input type="password"  id="password"  name="password"  required  placeholder="Enter Password "
                            {...register('password')} //className={`form-control ${errors.password ? 'is-invalid' : ''}`} 
                            />
                            {/* <div className="invalid-feedback">{errors.password?.message}</div> */}
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







// // import React, { useState } from 'react';
// import { useForm } from "react-hook-form";
// import useSignUp from "../hooks/useSignup";
// import { ErrorMessage } from '@hookform/error-message';
// import '../styles/Signup.css'


// const Signup = () => {
//     const { register, errors, handleSubmit } = useForm();
//     const { data, error, isLoading, signUp } = useSignUp();
//     console.log('data', data)
//     console.log('error', error)
//     console.log('isLoading', isLoading)
   
//     console.log('=============')

//     const onSubmit = data => {
//         console.log("dataaaaaaa     :", data);
//         signUp(data)
//     }
    
//     const onError = (errors, e) => console.log(errors, e);

//     return (
//         <div className="creationCompte">
//                 <fieldset>
//                      <form id="formSignin" className="formSignin" name="form" onSubmit={handleSubmit(onSubmit)}>
//                         <h2 className="creationCompt">Créer un compte</h2>
//                         <hr></hr>
//                         <div className="formNom">
//                             <label htmlFor="lastname">Nom </label>
//                             <input
//                                 type="text"  id="lastname"  required  placeholder="Votre Nnom"
//                                 {...register("lastname")} 
//                             />
                           
//                         </div>

//                         <div className="formPrenom">
//                             <label htmlFor="firstname">Prenom </label>
//                             <input  type="text"  id="firstname"  required  placeholder="Votre Nnom"
//                                     {...register("firstname")}/>
//                         </div> 

//                         <div className="formMail">
//                             <label htmlFor="mail">E-mail </label>
//                             <input type="email"  id="mail"  required  placeholder="mail@serveur.com"
//                                    {...register("mail")}
//                             />
//                         </div>

//                         <div className="formPassword">
//                             <label htmlFor="password">Mot de passe</label>
//                             <input type="password"  id="password"  name="password"  required  placeholder="Enter Password"
//                                    {...register("password") }
//                                 //    {...register("password", { minLength: 8, pattern: [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/] }) }
//                             />
//                             {/* {errors.password  && "Doit être de 8 caractères, au moins une minuscule, au moins une majuscule, au moins un chiffreau, moins un caractère spécial"} */}
//                         </div>

//                         <div className="formConfirmPassword">
//                             <label htmlFor="confirmPassword">Confirmation mot de passe</label>
//                             <input type="password"  id="confirmPassword"  name="confirmPassword"  required  placeholder="Enter Password"
//                                    {...register("confirmPassword")}
//                             /><br /><br />
//                         </div>

//                         <div className="clearfix">
//                             <button type="submit" className="signupbtn" disabled={isLoading}>
//                                 {isLoading
//                                     ? 'LOADING'
//                                     : 'Se Connecter'
//                                 }

//                             </button>
//                         </div>
//                     </form> 
//                     <p>Vous avez déjà un compte? <br />
//                     <a href="./Login">Log in here</a>
//                     </p>
//                 </fieldset>
//         </div>  

//     )
       
// }

// export default Signup;