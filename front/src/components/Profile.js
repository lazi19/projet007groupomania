import React, { useState, useEffect } from 'react'
import '../styles/Profile.css'
import { Link } from 'react-router-dom'
import Administrateur from './Administrateur'

function Profile() {
  const user = JSON.parse(localStorage.getItem('user'))
  const isAdmin = JSON.parse(localStorage.getItem('isAdmin'))
  const token = JSON.parse(localStorage.getItem('isAdmin'))
  const [publications, setPublications] = useState([])

  if (!user) {
    window.location = `/`
  }

  // se deconnecter
  const Logout = () => {
    localStorage.clear()
    window.location = '/Login'
  }

  // *************** afficher tous les messages
  useEffect(() => {
    fetch('http://localhost:5000/api/messages')
      .then((response) => {
        return response.json()
      })
      .then((result) => {
        setPublications(result)
        localStorage.setItem('dataMessage', JSON.stringify(result))
      })
      .catch((err) => console.log(err))
  }, [])

  // supprimer message
  const removedMessage = (id) => {
    console.log('Le lien a été cliqué.')

    const requestOptions = {
      method: 'DELETE',
      headers: { Authorization: 'Bearer ' + token },
    }

    fetch(`http://localhost:5000/api/messages/${id}`, requestOptions)
      .then((response) => {
        alert('message supprimé')
        window.location.reload(`/users/Profile/${user.id}`)
      })

      .catch((error) => {
        console.log(error)
      })
  }

  if (isAdmin === false) {
    return (
      <main className="container mt10">
        <h2>Profile</h2>
        {/* <!-- bloc utilisateur --> */}
        <section className="container ">
          {/* ******* bloc bienvenu******* */}
          <div className="row maRow d-flex   ">
            <div className=" col col-8  ">
              <h3>
                {' '}
                Bienvenue <span>{user.firstname}</span>
              </h3>
            </div>
            <div className=" col  ">
              <button
                onClick={Logout}
                className="btn maBtn btnRedColorWhit  ml-auto"
              >
                Deconnection
              </button>
            </div>
          </div>

          {/* ******* bloc des boutons  publication commenter******* */}
          <div className="row maRow">
            <Link to={`/users/Compte/${user.id}`} className="btn maBtn">
              Compte
            </Link>
            <Link to={`/users/Publication/${user.id} `} className="btn maBtn">
              Publication
            </Link>
          </div>
        </section>

        {/* <!-- bloc avec tous le(s) message(s) --> */}

        <section className=" maRow p-3">
          <div id="cardMessageImage" className="card">
            {publications.map((publication) => (
              <div key={publication.id}>
                <span>
                  {' '}
                  Posté par {` ${publication.userId}`} le{' '}
                  {publication.createdAt}
                </span>
                <div className="img justify-content-center d-flex ">
                  {/*cette écriture nous permet de ne rien afficher même pas le alt si y a pas d'image */}
                  {publication.messageUrl && (
                    <img
                      // src= {(publication.messageUrl)? publication.messageUrl : ''  }
                      src={publication.messageUrl}
                      id="image"
                      alt="mon_image"
                      width="100"
                      className="card-img-top img-thumbnail w-75 m-4 "
                    />
                  )}
                </div>

                <div card-body>
                  {/*cette écriture nous permet de ne rien s'il n'y a pas de message */}
                  {publication.message !== 'null' &&
                    publication.message !== 'undefined' && (
                      <p className="p-3" id="message">
                        {publication.message}
                      </p>
                    )}
                </div>

                <div>
                  {publication.userId === user.id && (
                    <button
                      id="maBtn"
                      className="maBtn"
                      onClick={() => removedMessage(publication.id)}
                    >
                      supprimer Message<i className="bi bi-trash"></i>
                    </button>
                  )}
                </div>

                <hr></hr>
              </div>
            ))}
          </div>
        </section>
      </main>
    )
  } else {
    return <Administrateur />
  }
}

export default Profile
