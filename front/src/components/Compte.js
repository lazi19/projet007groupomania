
import React from "react";


function Compte() {
    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user)
    console.log("id : " + user.id)
   const id = user.id

    const removeCompte = (id) => {
      
        console.log('Le lien a été cliqué.');

        const requestOptions = {
            method: 'DELETE',
            headers: {  Authorization: "Bearer " + user.token }
        }

        fetch( `http://localhost:5000/api/users/${id}` , requestOptions) 
        .then((response) => {
            console.log(response);
           
            // localStorage.clear()
            alert('Utilisateur supprimé')
            // window.location = '/login'
          })
         
          .catch((error) => {
            console.log(error)
          }) 
                // localStorage.clear()
                // window.location.pathname="/Login"
                // localStorage.removeItem('user')
                // window.location = '/Login'
    }
    return (
        <main class="container" >

        
            <div class="row justify-content-center " >
                <div className="row maRow d-flex col-10  " >
                     <div className=" col col-8 justify-content-end ">
                         <h3 className="text-center "> Bienvenue <span>{user.firstname} !</span></h3> 
                    </div>
                    <hr/>

                    <div>
                        <p className=" text-center ">Membre depuis le {user.createdAt}</p>
                    </div>

                    <div class="card-body mx-auto" style={{ maxWidth: "70%" }} >
                        <div class="btn-info rounded p-3" style={{ backgroundColor:"pink",  }} >
                            <button class="rounded p-2 " 
                            style={{cursor: "default" }} >
                                <span class="m-3 font-weight-bold ">Depuis cette page vous pouvez supprimer votre compte. La suppression de votre compte entrainera également la suppression de tous les commentaires et les images que vous avez posté.
                                </span>
                            </button>
                        </div> 

                        <div class="d-flex justify-content-center ">
                            <button type="button" class="btn btn-danger m-3 font-weight-bold " onClick={() => removeCompte(user.id)} >SUPPRIMER VOTRE COMPTE</button>
                            <button type="button" class="btn btn-secondary m-3 font-weight-bold "  >Annuler</button>

                        </div>
                        

                    </div>
                                   
                </div>    
            </div>
        </main>
    )
}

export default Compte;
