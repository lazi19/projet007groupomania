import React from 'react';
import { useForm } from "react-hook-form";
import '../styles/Signup.css'


function Signup() {
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(data) {
        // display form data on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
        // return false;
        useEffect();
    }

    useEffect(() => {
        // POST request using fetch inside useEffect React hook
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ register })
        };
        fetch('https://reqres.in/api/posts', requestOptions)
            .then(response => response.json())
            .then(data => setPostId(data.id));
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

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
                            className={`form-control ${errors.lastname ? 'is-invalid' : ''}`}                          
                            />
                            <div className="invalid-feedback">{errors.lastname?.message}</div>
                        </div>

                        <div className="formPrenom">
                            <label htmlFor="firstname">Prenom </label>
                            <input  type="text"  id="firstname"  name="firstname"  required  placeholder="Votre Nnom"
                            {...register('firstname')} className={`form-control ${errors.firstname ? 'is-invalid' : ''}`}
                            />
                            <div className="invalid-feedback">{errors.firstname?.message}</div>
                        </div> 

                        <div className="formMail">
                            <label htmlFor="mail">E-mail </label>
                            <input type="email"  id="mail"  name="mail"  required  placeholder="mail@serveur.com"
                            {...register('mail')} className={`form-control ${errors.mail ? 'is-invalid' : ''}`} 
                            />
                            <div className="invalid-feedback">{errors.mail?.message}</div>
                        </div>

                        <div className="formPassword">
                            <label htmlFor="password">Mot de passe</label>
                            <input type="password"  id="password"  name="password"  required  placeholder="Enter Password "
                            {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} 
                            />
                            <div className="invalid-feedback">{errors.password?.message}</div>
                            <br /><br />
                        </div>

                       

                        <div className="clearfix">
                            <button type="submit" className="signupbtn" >Se connecter</button>
                        </div>
                    </form> 
                
                </fieldset>
        </div> 
    ) 
}

export default Signup;