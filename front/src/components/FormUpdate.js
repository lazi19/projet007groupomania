import React, { useState } from 'react'
import '../styles/FormUpdate.css'

function FormUpdate() {
  const user = JSON.parse(localStorage.getItem('user'))
  const token = localStorage.getItem('token')

  const id = user.id

  const [lastname, setLastname] = useState(user.lastname)
  const [firstname, setFirstname] = useState(user.firstname)
  const [mail, setMail] = useState(user.mail)
  const [password, setPassword] = useState(user.password)

  // mise a jour des données de user
  const HandleSubmit = (e) => {
    e.preventDefault()
    const requestOptions = {
      method: 'PUT',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        lastname,
        firstname,
        mail,
        password,
        id,
      }),
    }

    console.log('une ligne avant le fetch')

    fetch(`http://localhost:5000/api/users/${id}`, requestOptions)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data)
        alert('User mis a jour')
        localStorage.setItem('user', JSON.stringify(data))
        localStorage.setItem('isAuthenticated', 'true')
        window.location = `/users/Profile/${data.id}`
      })
      .catch((err) => {
        alert(err)
      })
  }

  return (
    <form className="contact-form" onSubmit={HandleSubmit}>
      <h2>Changer vos données</h2>
      <div className="form-content">
        <input
          style={{ background: 'none', borderBottom: ' 2px solid gray' }}
          type="text"
          id="lastname"
          name="lastname"
          onChange={(e) => setLastname(e.target.value)}
          value={lastname}
          placeholder="Nom "
        />
        <input
          style={{ background: 'none', borderBottom: ' 2px solid gray' }}
          type="text"
          id="firstname"
          name="firstname"
          onChange={(e) => setFirstname(e.target.value)}
          value={firstname}
          placeholder="Prénom"
        />
        <input
          style={{ background: 'none', borderBottom: ' 2px solid gray' }}
          type="email"
          id="mail"
          name="mail"
          onChange={(e) => setMail(e.target.value)}
          value={mail}
          placeholder="mail"
        />
        <div className="email-content">
          <input
            style={{ background: 'none', borderBottom: ' 2px solid gray' }}
            type="password"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Mot de passe "
            minLength="8"
            pattern="(?=.*\d)(?=.*[a-z]).{8,}"
            title="Mot de pasese doit contenir au moins un chiffre, une lettre  et au moins 8 caractères ou plus"
          />
        </div>
      </div>
      <input
        className=" btn btn-secondary m-2 "
        type="submit"
        value="Envoyer"
      />
      <div className="form-message"></div>
    </form>
  )
}

export default FormUpdate
