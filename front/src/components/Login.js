// import React from 'react';
// import React, { Component } from 'react';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';
// import { useHistory } from "react-router-dom";
import '../styles/Signup.css'

function Login() {

  // const history = useHistory();
  //   console.log("history : " + history);

  // const { register, handleSubmit, formState } = useForm(formOptions);
  const { register, handleSubmit } = useForm()
  const [postId, setPostId] = useState(null)

  function onSubmit(data) {
    // display form data on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4))
    console.log(data)

    // POST request using fetch inside useEffect React hook

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }

    fetch('http://localhost:5000/api/users/login', requestOptions)
    .then((response) => {
      console.log(response)
      if (response.status !== 200) {
        throw new Error(response.status);        
      }
      return response.json()
    })

      .then((data) => {
        setPostId(data.id)
        console.log(data)
        localStorage.setItem('user', JSON.stringify(data))
        // localStorage.setItem("isAuthenticated", "true")
        window.location = `/users/Profile/${data.id}`

        if(data.id === 38){
          localStorage.setItem("isAdmin", "true")
        }else{
          localStorage.setItem("isAdmin", "false")
        }
      })
      .catch((error)=>{
        console.log(error + "  Utilisateur non trouvé ou Mot de passe incorrect !" );
        alert(error + " Utilisateur non trouvé ou Mot de passe incorrect !")
      })
     
  }

  return (
    <div className="creationCompte">
      <fieldset>
        <form
          id="formSignin"
          className="formSignin"
          name="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="creationCompt">Identifiez-vous</h2>
          <hr></hr>
          <div className="formPrenom">
            <label htmlFor="firstname">Prenom </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              required
              placeholder="Votre Nom"
              {...register('firstname')} //className={`form-control ${errors.firstname ? 'is-invalid' : ''}`}
            />
            {/* <div className="invalid-feedback">{errors.firstname?.message}</div> */}
          </div>

          <div className="formMail">
            <label htmlFor="mail">E-mail </label>
            <input
              type="email"
              id="mail"
              name="mail"
              required
              placeholder="email@serveur.com"
              {...register('mail')} //className={`form-control ${errors.mail ? 'is-invalid' : ''}`}
            />
            {/* <div className="invalid-feedback">{errors.mail?.message}</div> */}
          </div>

          <div className="formPassword">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Enter Password "
              {...register('password')} //className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            />
            {/* <div className="invalid-feedback">{errors.password?.message}</div> */}
            <br />
            <br />
          </div>

          <div className="clearfix">
            <button type="submit" className="signupbtn">
              Se connecter
            </button>
          </div>
        </form>
        <p>
          Vous n'êtes pas encore inscrit ?
          {' '}
          <Link to="/Signup">
            <strong> Crées un compte </strong>
          </Link>{' '}
        </p>
      </fieldset>
    </div>
  )
}

export default Login
