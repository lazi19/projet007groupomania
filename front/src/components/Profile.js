import React, { useState,  useEffect } from 'react'

import '../styles/Profile.css'
import { Link } from 'react-router-dom'



function Profile() {
  
  const user = JSON.parse(localStorage.getItem('user')) 
  console.log("user:" + user.id)
  const [publications, setPublications] = useState([])

  console.log("afficher publications : " + publications)
  console.log("afficher setPublications : " + setPublications)
  
// se deconnecter
  const Logout = () => {
    console.log('logout')
    localStorage.removeItem('user')
    window.location = '/Login'
  }

// afficher tous les messages
  useEffect(() => {

      fetch('http://localhost:5000/api/messages')
      .then(response => response.json())
      .then((result) => {
        setPublications(result);
        // console.log("setPublications :", setPublications)
          console.log(result); 
          localStorage.setItem("dataMessage", JSON.stringify(result) );
          const userId = JSON.parse(localStorage.getItem('dataMessage.userId'))
          
          const dataMessage = JSON.parse(localStorage.getItem('dataMessage'))
         
          console.log("dataMessage.userId la cle de l'attachement  du message avec son user : " + userId)
          console.log("le id du message"  + publications.id)
          console.log("le id du user  :" + user.id); 
         
          // if ( publications.userId !== user.id ){ 
          //     let buttonSupprime= document.querySelector('.maBtn') ;
          //     buttonSupprime.disabled = false;
          //  } 

          
  //   if ( publications.userId !== user.id ){ 
  //     onclick=document.querySelector('.maBtn').disabled=false ; 
  // }

      })
      .catch((err) => console.log(err))
  }, [user.id]);  


// supprimer message
const removedMessage = (id) => {
  console.log('Le lien a été cliqué.');
// if ({ id: params.id });  
  const requestOptions = {
      method: 'DELETE',
      headers: {  Authorization: "Bearer " + user.token }
  }

  fetch( `http://localhost:5000/api/messages/${id}`, requestOptions) 
  .then((response) => {
      console.log(response);
     
      // localStorage.clear()
      alert('message supprimé')
      // window.location = '/login'
  })
   
    .catch((error) => {
      console.log(error)
    })

}

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
          <Link to={`/users/Publication/${user.id} `}className="btn maBtn">
            Publication
          </Link>
        </div>
      </section>

      {/* <!-- bloc avec tous le(s) message(s) --> */}
      <section className=" maRow p-3">
      <div>
            <span>
              {' '}
              Posté par {` ${user.firstname}`} le  {user.createdAt}
            </span>
        </div>

        <div id="cardMessageImage" className="card">
        
          {publications.map((publication) => (
            <div key={publication.id}>
              <div className="img">
                <img
                  src={publications.image}
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
              
              <hr></hr>
              <div>
                <button id="maBtn" className="maBtn"
                 onClick={() => removedMessage(publication.id)}
                //  disabled={ publication.id !== user.id }       
                >
                  supprimer Message<i className="bi bi-trash"></i>
                </button>

                <Link to="/users/Commentaire" className="btn maBtn">
                  Commenter
                </Link>
              </div>
              <hr></hr>
            </div>
          ))}
          
        </div>

      </section>

      {/* <!-- bloc avec tous le(s) commentaire(s) --> */}

      <section className=" maRow p-3">
        <div>
          <p> Soyez le premier à commenter cette publication </p>
        </div>

        <div>
          <span>
            Commentaire rédigé par {user.firstname}
            {/*{recupDataEtId.firstname}*/} le 13/08/2021 {/*{createdAt}*/}
          </span>
        </div>

        <div card-body>
          <p className="p-3">mon commentaire{/*{ commentaire }*/}</p>
        </div>

        <div>
          <button className="maBtn">
            supprimer commentaire<i className="bi bi-trash"></i>
          </button>
          <button className="maBtn">
            Modifier commentaire<i className="bi bi-trash"></i>
          </button>
          
        </div>
      </section>
    </main>
  )
}

export default Profile
