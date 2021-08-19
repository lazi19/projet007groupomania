import React, { useState,  useEffect } from 'react'

import '../styles/Profile.css'
import { Link } from 'react-router-dom'



function Profile() {
  const user = JSON.parse(localStorage.getItem('user'))
  console.log("user:" + user.id)
  const [publications, setPublications] = useState([])

  const Logout = () => {
    console.log('logout')
    localStorage.removeItem('user')
    window.location = '/Login'
  }


  useEffect(() => {

      fetch('http://localhost:5000/api/messages')
      .then(response => response.json())
      .then((result) => {
        setPublications(result);
        // console.log("setPublications :", setPublications)
          console.log(result); 
          localStorage.setItem("dataMessage", JSON.stringify(result) );
          // const userId = JSON.parse(localStorage.getItem('dataMessage.userId'))
          const dataMessage = JSON.parse(localStorage.getItem('dataMessage'))
          const allUserId = dataMessage.map((a) => a.userId)
          console.log(allUserId); 
      })
      .catch((err) => console.log(err))
}, []);

                      
//  if ( user.id===1//publications.userId = user.id 
//   ){
 
//   var btnDesabled = document.getElementById('maBtn').disabled;
//  } else {
//     // button = ;
//   }






  return (
    <main className="container mt10">
      <h2>Profile</h2>
      {/* <!-- bloc utilisateur --> */}
      <section class="container ">
        
        {/* ******* bloc bienvenu******* */}
        <div className="row maRow d-flex   ">
          <div className=" col col-8 justify-content-end ">
            <h3 className="text-center ">
              {' '}
              Bienvenue <span>{user.firstname}</span>
            </h3>
          </div>
          <div class=" col ">
            {/* <Link to="/Login" class="btn maBtn btnRedColorWhit " >Deconnection</Link>  */}
            <button onClick={Logout} class="btn maBtn btnRedColorWhit ">
              Deconnection
            </button>
          </div>
        </div>

        {/* ******* bloc des boutons  publication commenter******* */}
        <div class="row maRow">
          <Link to="/users/Compte" class="btn maBtn">
            Compte
          </Link>
          <Link to="/users/Publication" class="btn maBtn">
            Publication
          </Link>
        </div>
      </section>

      {/* <!-- bloc avec tous le(s) message(s) --> */}
      <section class=" maRow p-3">
        <div>
          <span>
            {' '}
            Posté par {user.firstname} le  {user.createdAt}
          </span>
        </div>

        <div id="cardMessageImage" class="card">
          {publications.map((publication) => (
            <div key={publication.id}>
              <div class="img">
                <img
                  src={publications.image}
                  id="image"
                  alt="mon_image"
                  width="400"
                  class="card-img-top"
                />
                {/*<img  src= {	messageUrl	}  alt="mon_image" />*/}
              </div>

              <div card-body>
                <p class="p-3" id="message">
                  
                  {publication.message}
                </p>
              </div>
              
              <hr></hr>
              <div>
                <button id="maBtn" class="maBtn" 
                // disabled={!`${key=publication.id}`}
                >
                  supprimer Message<i class="bi bi-trash"></i>
                </button>
                <Link to="/users/Commentaire" class="btn maBtn">
                  Commenter
                </Link>
              </div>
              <hr></hr>
            </div>
          ))}
          
        </div>

      </section>

      {/* <!-- bloc avec tous le(s) commentaire(s) --> */}

      <section class=" maRow p-3">
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
          <p class="p-3">mon commentaire{/*{ commentaire }*/}</p>
        </div>

        <div>
          <button class="maBtn">
            supprimer commentaire<i class="bi bi-trash"></i>
          </button>
        </div>
      </section>
    </main>
  )
}

export default Profile
