
import React, { useState, useEffect } from 'react'


function Administrateur() {       
    
    const [users, setUsers] = useState([])
    const [publications, setPublications] = useState([])
    


    // suppression d'un compte
    // const SupprimerComptes = (id) => {
      
    //     console.log('Le lien a été cliqué.');

    //     const requestOptions = {
    //         method: 'DELETE',
    //         headers: {  Authorization: "Bearer " + token }
    //     }
    //     // useEffect(() => {
    //         fetch( `http://localhost:5000/api/users/${id}`, requestOptions) 
    //         .then((response) => {
    //             console.log(response);            
    //             localStorage.clear()
    //             alert('Utilisateur supprimé')
    //            window.location.reload(true);
    //         })
            
    //         .catch((error) => {
    //             console.log(error)
    //         }) 
    //     // }, [id])      
    // }




      // Afficher tous les compts
    const AfficherComptes=() => {

        fetch('http://localhost:5000/api/users')
         .then((response) => response.json())
         .then((result) => {
            setUsers(result)
            console.log(result)              
            console.log(users) 

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
                                Bienvenue <span>nom administrateur dynamique</span>
                                </h3>
                            </div>
                            <div className=" col ">
                                <button className="btn maBtn btnRedColorWhit ">Deconnection</button>
                            </div>
                        </div>
                        <div className="row maRow">
                            <button className="btn maBtn "  onClick={AfficherComptes}>
                                Afficher tous les utilisateurs{' '}
                            </button>
                            
                            {/*bloc des utilisateurs */} 
                            <div>
                                {users.map((user) => (
                                    <div key={user.id}>
                                        <div>
                                            <h4> {` ${user.firstname}`} {` ${user.lastname}`}</h4>
                                        </div>
                                        <span> utilisateur créé le {` ${user.createdAt}`}</span>
                                        <div>
                                            <button id="maBtn" className="maBtn" 
                                            //  onClick={SupprimerComptes((` ${user.id}`), (` ${user.token}`)) }
                                            //  onClick={SupprimerComptes((` ${user.id}`)) }
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
                            <button className="btn maBtn" href="/users/Publication/6 " onClick={AfficherPublications}>
                                Afficher toutes les publications
                            </button>

                            <div>
                                {publications.map((publication) => (
                                    <div key={publication.id}>

                                        <span> Posté par  firstname dynamique,  {` ${publication.createdAt}`}</span>
                                        <div className="img">
                                        
                                            <img
                                                // src={publication.file}
                                                id="image"
                                                alt="mon_image"
                                                width="400"
                                                className="card-img-top"
                                            />
                                        </div>

                                        <div>
                                            <p className="p-3" id="message">  {` ${publication.message}`}</p>
                                        </div>

                                        <div>
                                            <button id="maBtn" className="maBtn" disabled="">supprimer la publication<i className="bi bi-trash"></i>
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
