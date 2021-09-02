
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import {ToggleButton} from '@material-ui/lab/ToggleButton';


function Administrateur() {       
    
    const [users, setUsers] = useState([])
    const [publications, setPublications] = useState([])
    const user = JSON.parse(localStorage.getItem('user'));


    // se deconnecter
  const Logout = () => {
    console.log('logout')
    localStorage.removeItem('user')
    window.location = '/Login'
  }
    // suppression d'un compte
    const SupprimerComptes = (id) => {        
             console.log('Le lien a été cliqué.');

        // useEffect((id) => {
            const requestOptions = {
                method: 'DELETE',
                headers: {  Authorization: "Bearer " + user.token }
             }
       
            fetch( `http://localhost:5000/api/users/${id}`, requestOptions) 
            .then((response) =>{return response.json()} )
            .then((response) => {
                console.log(response);            
                // localStorage.clear()
                window.confirm ('Utilisateur supprimé')
               window.location.reload(true);
               return;
            })
            
            .catch((error) => {
                console.log(error)
            }) 
        // }, [id])      
    }
      // Afficher tous les comptes
    const AfficherComptes=() => {

        fetch('http://localhost:5000/api/users')
         .then((response) =>{
             return response.json()
         })
         .then((result) => {
            setUsers(result)
            console.log(result) 
         })
         .catch((err) => console.log(err))
    }

    // afficher toutes les publication
    const AfficherPublications=() => {             
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
        console.log('Le lien a été cliqué.');

        const requestOptions = {
           method: 'DELETE',
           headers: {  Authorization: "Bearer " + user.token }
        }
  
       fetch( `http://localhost:5000/api/messages/${id}`, requestOptions) 
       .then((response) =>{return response.json()} )
       .then((response) => {
           console.log(response);            
           // localStorage.clear()
           window.confirm ('Publication supprimé')
          window.location.reload(true);
          return;
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
                                <h3 className="fs-4 ">
                                {' '}
                                Bienvenue <span>{` ${user.firstname}`}</span>
                                </h3>
                            </div>
                            <div className=" col ">
                                <Link to={`/users/Publication/${user.id} `} className="btn maBtn">
                                    Publication
                                </Link>
                                <button className="btn maBtn btnRedColorWhit " onClick={Logout}>Deconnection</button>
                            </div>
                        </div>
                        <div className="row maRow">
                            <button className="btn maBtn "  onClick={AfficherComptes}>
                            {/* <ToggleButton className="btn maBtn togg"  onClick={AfficherComptes}> */}
                                Afficher tous les utilisateurs{' '}
                            {/* </ToggleButton> */}
                            </button>
                            
                            {/*bloc des utilisateurs */} 
                            <div>
                                {users.map((user) => (
                                    <div key={user.id}>
                                        <div>
                                            <h4> {user.firstname} {user.lastname}</h4>
                                            {/* <h4> {` ${user.firstname}`} {` ${user.lastname}`}</h4> */}
                                        </div>
                                        <span> utilisateur créé le {user.createdAt}</span>
                                        <div>
                                            <button id="maBtn" className="maBtn" 
                                            onClick={ () => SupprimerComptes(user.id) }
                                            //  onClick={ () => SupprimerComptes(` ${user.id}`) }
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
                            <button className="btn maBtn" 
                            // href="/users/Publication/6 " 
                            onClick={AfficherPublications}>
                                Afficher toutes les publications
                            </button>
                            <div>
                                {publications.map((publication) => (
                                    <div key={publication.id}>

                                        <span> Posté par  {publication.userId} ,  {publication.createdAt}</span>
                                        <div className="img">                                        
                                            <img
                                                src={publication.file}
                                                id="image"
                                                alt="mon_image"
                                                width="400"
                                                className="card-img-top"
                                            />
                                        </div>

                                        <div>
                                            <p className="p-3" id="message">{ publication.message }</p>
                                        </div>

                                        <div>
                                            <button id="maBtn" className="maBtn" disabled="" 
                                            //  onClick={ () => SupprimerMessage(publication.id) }
                                            // onClick = {SupprimerMessage(publication.id)}
                                            onClick={ () => SupprimerMessage(publication.id) }
                                            >
                                                supprimer la publication
                                            </button>
                                        </div>

                                        <hr/>
                                  
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
