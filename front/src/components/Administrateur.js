import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Administrateur() {
  const [users, setUsers] = useState([])
  const [publications, setPublications] = useState([])
  const user = JSON.parse(localStorage.getItem('user'))
  const token = localStorage.getItem('token')
  
  // se deconnecter
  const Logout = () => {
    localStorage.removeItem('user')
    window.location = '/Login'
  }
  // suppression d'un compte
  const SupprimerComptes = (id) => {
    const requestOptions = {
      method: 'DELETE',
      headers: { Authorization: 'Bearer ' + token },
    }

    fetch(`http://localhost:5000/api/users/${id}`, requestOptions)
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        console.log(response)
        window.confirm('Utilisateur supprimé')
        window.location.reload(true)
        return
      })

      .catch((error) => {
        console.log(error)
      })
  }
  // Afficher tous les comptes
  const AfficherComptes = () => {
    fetch('http://localhost:5000/api/users')
      .then((response) => {
        return response.json()
      })
      .then((result) => {
        setUsers(result)
        console.log(result)
      })
      .catch((err) => console.log(err))
  }

  // afficher toutes les publication
  const AfficherPublications = () => {
    fetch('http://localhost:5000/api/messages')
      .then((response) => response.json())
      .then((result) => {
        setPublications(result)
        console.log(result)
      })
      .catch((err) => console.log(err))
  }

  // suppression de la publication

  const SupprimerMessage = (id) => {
    const requestOptions = {
      method: 'DELETE',
      headers: { Authorization: 'Bearer ' + token },
    }

    fetch(`http://localhost:5000/api/messages/${id}`, requestOptions)
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        console.log(response)
        window.confirm('Publication supprimé')
        window.location.reload(true)
        return
      })

      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <div>
      <hr></hr>
      <div>
        <h2 className="text-center fs-4"> Compte Administrateur</h2>
      </div>

      <section className="container ">
        <div className="row maRow d-flex   ">
          <div className=" col col-8 justify-content-end ">
            <h3 className=" fs-5 ">
              {' '}
              Bienvenue <span>{` ${user.firstname}`}</span>
            </h3>
          </div>
          <div className=" col ">
            <Link to={`/users/Publication/${user.id} `} className="btn maBtn">
              Publication
            </Link>
            <button className="btn maBtn btnRedColorWhit " onClick={Logout}>
              Deconnection
            </button>
          </div>
        </div>
        <div className="row maRow">
          <button className="btn maBtn " onClick={AfficherComptes}>
            Afficher tous les utilisateurs
          </button>

          {/*bloc des utilisateurs */}
          <div>
            {users.map((user) => (
              <div key={user.id}>
                <div>
                  <h4 className=" fs-6 ">
                    {' '}
                    Compte de {user.firstname} {user.lastname}
                  </h4>
                </div>
                <span> créé le {user.createdAt}</span>
                <div>
                  <button
                    id="maBtn"
                    className="maBtn"
                    onClick={() => SupprimerComptes(user.id)}
                  >
                    supprimer le compte<i className="bi bi-trash"></i>
                  </button>
                </div>
                <hr />
              </div>
            ))}
          </div>
        </div>
        {/* Fin bloc des utilisateurs */}

        {/* bloc des publication */}
        <div className="row maRow">
          <button className="btn maBtn" onClick={AfficherPublications}>
            Afficher toutes les publications
          </button>
          <div className="card p-3">
            {publications.map((publication) => (
              <div key={publication.id}>
                <span>
                  {' '}
                  Posté par {publication.userId} , {publication.createdAt}
                </span>
                <div className="img justify-content-center d-flex ">
                  {publication.messageUrl && (
                    <img
                      src={publication.messageUrl}
                      id="image"
                      alt="mon_image"
                      width="100"
                      className="card-img-top img-thumbnail w-75 m-4"
                    />
                  )}
                </div>

                <div>
                  {publication.message !== 'null' &&
                    publication.message !== 'undefined' && (
                      <p className="p-3" id="message">
                        {publication.message}
                      </p>
                    )}
                </div>

                <div>
                  <button
                    id="maBtn"
                    className="maBtn"
                    disabled=""
                    onClick={() => SupprimerMessage(publication.id)}
                  >
                    supprimer la publication
                  </button>
                </div>

                <hr />
              </div>
            ))}
          </div>

          {/* Fin bloc des publication */}
        </div>
      </section>
    </div>
  )
}

export default Administrateur
