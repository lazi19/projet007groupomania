import React, { useState, useEffect } from 'react'
// import {  useLocation } from "react-router-dom";
import '../styles/Profile.css'
import { Link } from 'react-router-dom'
import Administrateur from './Administrateur';


function Profile() {

  const user = JSON.parse(localStorage.getItem('user'));
 
  const isAdmin = JSON.parse(localStorage.getItem('isAdmin'));
  // const isAdmin = user.isAdmin;
  console.log('isAdmin:' + isAdmin);
  console.log('user:' + user.id);
  console.log('firstname :' + user.firstname);

  const [publications, setPublications] = useState([]);



  // console.log('afficher publications : ' + publications)
  // console.log('afficher setPublications : ' + setPublications)

  // se deconnecter
  const Logout = () => {
    console.log('logout')
    localStorage.removeItem('user')
    window.location = '/Login'
  }

  // afficher tous les messages
  useEffect(() => {
    fetch('http://localhost:5000/api/messages')
      .then((response) =>{return response.json()} )
      .then((result) => {
        setPublications(result)
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
 

  // if ({ id : user.id }){
      
  //   document.getElementById('maBtn').style.display= "none"
  // }else{
  //   document.getElementById('maBtn').style.display = "contents"
  // }

  
     
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
      })

      .catch((error) => {
        console.log(error)
      })
  }

  // commenter message

  // const commenterMessage = (id) => {
  //   window.location = `/users/Commentaire/${id}`
  // }


 
  
  if (isAdmin === false){
    return (
      <main className="container mt10">
        <h2>Profile</h2>
        {/* <!-- bloc utilisateur --> */}
        <section className="container ">
          {/* ******* bloc bienvenu******* */}
          <div className="row maRow d-flex   ">
            <div className=" col col-8 justify-content-end ">
              <h3 className="text-center ">
                {' '}
                Bienvenue <span>{user.firstname}</span>
              </h3>
            </div>
            <div className=" col ">
              {/* <Link to="/Login" className="btn maBtn btnRedColorWhit " >Deconnection</Link>  */}
              <button onClick={Logout} className="btn maBtn btnRedColorWhit ">
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
          <div>
            <span>
              {' '}
              Posté par {` ${user.firstname}`} le {user.createdAt}
           
            </span>
          </div>
  
          <div id="cardMessageImage" className="card">
            {publications.map((publication) => (
              <div key={publication.id}>
                <span>
                  {' '}
                  Posté par {` ${publication.userId}`} le {publication.createdAt}
                </span>
                <div className="img">
                  <img
                    src={publication.image}
                    id="image"
                    alt="mon_image"
                    width="400"
                    className="card-img-top"
                  />
                  {/*<img  src= {	messageUrl	}  alt="mon_image" />*/}
                </div>
  
                <div card-body>
                  <p className="p-3" id="message">
                    {publication.message}
                  </p>
                </div>
  
                {/* <hr></hr> */}
                <div>
                  <button
                    id="maBtn"
                    className="maBtn"
                    onClick={() => removedMessage(publication.id)}
                    disabled={ publication.userId !== user.id ? true : false }
                    
                  >
                    supprimer Message<i className="bi bi-trash"></i>
                  </button>
  
                  {/* <button
                    id="maBtn"
                    className="maBtn"
                    onClick={commenterMessage(`${publication.id}`)} 
                    // onClick={window.location = `/users/Commentaire/${publication.id}`}
                  >
                    Commenter<i className="bi bi-trash"></i>
                  </button> */}
                  {/* <Link to="/users/Commentaire" className="btn maBtn" >
                    Commenter
                  </Link> */}
                  
                  {/* <Link to="commentaire" params ={{ id : ` ${publication.id} `}} className="btn maBtn" >
                    Commenter
                  </Link> */}
                </div>
                <hr></hr>
                   {/* <!-- bloc avec tous le(s) commentaire(s) --> */}
  
              {/* <section className=" maRow p-3"> */}
  
                {/* <div>
                  <p> Soyez le premier à commenter cette publication </p>
                </div> */}
  
                {/* <div>
                  <span>
                    Commentaire rédigé par {user.firstname} le date dynamique 
                    {recupDataEtId.firstname} {/*{createdAt}
                  </span>
  
                </div> 
                */}
  
                {/* <div card-body>
                  <p className="p-3">mon commentaire{ commentaire }</p>
                </div>
                 */}
  
                {/* <div>
                  <button className="maBtn">
                    supprimer commentaire<i className="bi bi-trash"></i>
                  </button>
                  <button className="maBtn">
                    Modifier commentaire<i className="bi bi-trash"></i>
                  </button>
                </div> */}
              {/* </section> */}
              {/* <hr></hr> */}
  
              </div>
            ))}
          </div>
  
        </section>
  
       
      </main>
    )
  } else {
    return  <Administrateur />
  }

 
}

export default Profile
