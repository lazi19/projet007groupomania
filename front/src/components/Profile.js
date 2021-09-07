import React, { useState, useEffect } from 'react'
// import {  useLocation } from "react-router-dom";
import '../styles/Profile.css'
import { Link } from 'react-router-dom'
import Administrateur from './Administrateur'
import ReactDOM from 'react-dom'

function Profile() {
  const user = JSON.parse(localStorage.getItem('user'))
  const isAdmin = JSON.parse(localStorage.getItem('isAdmin'))
  // const isAdmin = user.isAdmin;

  const [publications, setPublications] = useState([])

  const [id, setId] = useState(null)

  if (!user) {
    window.location = `/`
  }

  console.log('isAdmin:' + isAdmin)
  console.log('user:' + user.id)
  console.log('firstname :' + user.firstname)

  // console.log('afficher publications : ' + publications)
  // console.log('afficher setPublications : ' + setPublications)

  // se deconnecter
  const Logout = () => {
    console.log('logout')
    localStorage.removeItem('user')
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

        // if(publications.message=== undefined){
        //   document.getElementById('message').innerHTML= ""
        // }

        console.log(result)

        localStorage.setItem('dataMessage', JSON.stringify(result))

        // const dataMessage = JSON.parse(localStorage.getItem('dataMessage'))

        // console.log("dataMessage.userId la cle de l'attachement  du message avec son user : " + userId)
        // console.log('le id du message : ' + publications.map((id) => id[0] )
        console.log('le id du user  :' + user.id)

        // if ( publications.userId !== user.id ){
        //     let buttonSupprime= document.querySelector('.maBtn') ;
        //     buttonSupprime.disabled = false;
        //  }

        //   if ( publications.userId !== user.id ){
        //     onclick=document.querySelector('.maBtn').disabled=false ;
        // }
      })
      .catch((err) => console.log(err))
  }, [user.id])


  // supprimer message
  const removedMessage = (id) => {
    console.log('Le lien a été cliqué.')

    const requestOptions = {
      method: 'DELETE',
      headers: { Authorization: 'Bearer ' + user.token },
    }

    fetch(`http://localhost:5000/api/messages/${id}`, requestOptions)
      .then((response) => {
        console.log(response)

        // localStorage.clear()
        alert('message supprimé')
        // window.location = '/login'
        window.location.reload(`/users/Profile/${user.id}`)
        // window.location = `/users/Profile/${user.id}`
      })

      .catch((error) => {
        console.log(error)
      })
  }

  const handelUpdateMessage = (id) => {
    // document.childElementCount
    ;<form>
      <textarea
        className="form-control"
        v-model="newMessage"
        id="newMessage"
        name="message"
        rows="8"
        placeholder="Saisissez votre message. "
        //  onChange={(event) => {
        //   const { value } = event.target;
        //   setMessage(value);
        // }}
      />
      <div className="form-group justify-content-center ">
        <label htmlFor="File"></label>
        <input
          type="file"
          useRef="file"
          name="image"
          variant="contained"
          className="form-control-file  flex-wrap: wrap "
          id="file"
          multiple={false}
          accept=".jpg, .jpeg, .gif, .png"
          // onChange={(event) => {
          //   const file = event.target.files[0];
          //   setFile(file);
          // }}
        />
      </div>
    </form>
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
              {/* <Link to="/Login" className="btn maBtn btnRedColorWhit " >Deconnection</Link>  */}
              <button  onClick={Logout} className="btn maBtn btnRedColorWhit  ml-auto">
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

                {/* <hr></hr> */}
                <div>
                  {publication.userId === user.id && (
                    <button
                      id="maBtn"
                      className="maBtn"
                      onClick={() => removedMessage(publication.id)}
                      // disabled={ publication.userId !== user.id ? true : false }
                    >
                      supprimer Message<i className="bi bi-trash"></i>
                    </button>
                  )}
                </div>

                <div>
                  {publication.userId === user.id && (
                    <button
                      id="maBtn"
                      className="maBtn"
                      onClick={() => handelUpdateMessage(publication.userId)}
                    >
                      Modifier Message<i className="bi bi-trash"></i>
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
