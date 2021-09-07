import React, { useState } from 'react'
import FormUpdate from './FormUpdate'

function Compte() {
  const user = JSON.parse(localStorage.getItem('user'))
  const token = localStorage.getItem('token')
  const [displayUpdate, setDisplayUpdate] = useState(false)

  const removeCompte = (id) => {
    const requestOptions = {
      method: 'DELETE',
      headers: { Authorization: 'Bearer ' + token },
    }

    fetch(`http://localhost:5000/api/users/${id}`, requestOptions)
      .then((response) => {
        console.log(response)
        localStorage.clear()
        alert('Utilisateur supprimé')
        window.location = '/login'
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleClickAnnuler = () => {
    window.location = `/users/Profile/${user.id}`
  }

  // *********************changement des données

  const handleUpdate = () => {
    setDisplayUpdate(!displayUpdate)
  }

  return (
    <main className="container">
      <div className="row justify-content-center ">
        <div className="row maRow d-flex col-10  ">
          <div className=" col col-8 justify-content-end ">
            <h3 className="text-center ">
              {' '}
              Bienvenue <span>{user.firstname} !</span>
            </h3>
          </div>
          <hr />

          <div>
            <p className=" text-center ">Membre depuis le {user.createdAt}</p>
          </div>

          <div className="card-body mx-auto" style={{ maxWidth: '70%' }}>
            <div
              className="btn-info rounded p-3"
              style={{ backgroundColor: 'pink' }}
            >
              <button className="rounded p-2 " style={{ cursor: 'default' }}>
                <span className="m-3 font-weight-bold ">
                  Depuis cette page vous pouvez supprimer votre compte. La
                  suppression de votre compte entrainera également la
                  suppression de tous les commentaires et les images que vous
                  avez posté.
                </span>
              </button>
            </div>

            <div className="d-flex justify-content-center flex-wrap ">
              <button
                type="button"
                className="btn btn-danger m-3 font-weight-bold "
                onClick={() => removeCompte(user.id)}
              >
                SUPPRIMER VOTRE COMPTE
              </button>
              <button
                type="button"
                className="btn btn-secondary m-3 font-weight-bold "
                onClick={handleClickAnnuler}
              >
                Annuler
              </button>
              <button
                type="button"
                className="btn btn-secondary m-3 font-weight-bold "
                onClick={() => handleUpdate(user.id)}
              >
                changer vos donnees
              </button>
              {displayUpdate && <FormUpdate />}
              {/* <div id="injecterFormUpdate"></div> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Compte
