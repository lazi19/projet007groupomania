
// import React, { Component } from 'react';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';
// import { useHistory } from "react-router-dom";
import '../styles/Signup.css'

function Login() {
  const user = JSON.parse(localStorage.getItem( "user"));
  const [id, setId] = useState(null);
  
  if(user){
      setId(user.id) ;
      window.location = `/users/Profile/${id}`
  }else{
      <Link to="/Login"></Link> 
  }

  // const history = useHistory();
  //   console.log("history : " + history);

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

        if(data.id === 1){
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
              placeholder="Votre Prenom"
              {...register('firstname')} 
            />
           
          </div>

          <div className="formMail">
            <label htmlFor="mail">E-mail </label>
            <input
              type="email"
              id="mail"
              name="mail"
              required
              placeholder="email@serveur.com"
              {...register('mail')} 
            />
           
          </div>

          <div className="formPassword">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Mot de passe "
              {...register('password')}
            />
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
