import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
// import FormApdate from './FormApdate';


function Compte() {
    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user)
    console.log("id : " + user.id)
    const history = useHistory();
    console.log(history);

    const [state, setState] = useState();

    const removeCompte = (id) => {
      
        console.log('Le lien a été cliqué.');

        const requestOptions = {
            method: 'DELETE',
            headers: {  Authorization: "Bearer " + user.token }
        }

        fetch( `http://localhost:5000/api/users/${id}`, requestOptions) 
        .then((response) => {
            console.log(response);          
            localStorage.clear()
            alert('Utilisateur supprimé')
            window.location = '/login'
        })
        .catch((error) => {
            console.log(error)
        }) 
                // localStorage.clear()
                // window.location.pathname="/Login"
                // localStorage.removeItem('user')
                // window.location = '/Login'
    }

    const handleClickAnnuler = () =>  {
        // window.location = '/users/Profile'
        window.location = `/users/Profile/${user.id}`

    }
   
    const handleUpdate = () =>  {
       
    //     // React.createElement(<h3 className='nacer'>affiche formulaire</h3>)
        window.location = `/users/Compte/${user.id}/FormApdate`

    //     // window.location = `/users/Profile/${user.id}`
    //         // const  handleChange = (e) => {
    //         // setState(e.target.value )
    //         // }
    }



    return (
        <main className="container" >

        
            <div className="row justify-content-center " >
                <div className="row maRow d-flex col-10  " >
                     <div className=" col col-8 justify-content-end ">
                         <h3 className="text-center "> Bienvenue <span>{user.firstname} !</span></h3> 
                    </div>
                    <hr/>

                    <div>
                        <p className=" text-center ">Membre depuis le {user.createdAt}</p>
                    </div>

                    <div className="card-body mx-auto" style={{ maxWidth: "70%" }} >
                        <div className="btn-info rounded p-3" style={{ backgroundColor:"pink",  }} >
                            <button className="rounded p-2 " 
                            style={{cursor: "default" }} >
                                <span className="m-3 font-weight-bold ">Depuis cette page vous pouvez supprimer votre compte. La suppression de votre compte entrainera également la suppression de tous les commentaires et les images que vous avez posté.
                                </span>
                            </button>
                        </div> 

                        <div className="d-flex justify-content-center ">
                            <button type="button" className="btn btn-danger m-3 font-weight-bold " onClick={() => removeCompte(user.id)} >SUPPRIMER VOTRE COMPTE</button>
                            <button type="button" className="btn btn-secondary m-3 font-weight-bold "  onClick={handleClickAnnuler} >Annuler</button>
                            {/* <button type="button" className="btn btn-secondary m-3 font-weight-bold "  
                            onClick={handleUpdate}
                             >changer les donnees</button> */}
                            
                             {/* <Link to="/users/Compte/:id/FormApdate"> */}
                                <button type="button" className="btn btn-secondary m-3 font-weight-bold "
                                onClick={handleUpdate}
                                > changer les donnees</button> 
                             {/* </Link>{' '} */}
                        </div>
                        

                    </div>
                                   
                </div>    
            </div>
        </main>
    )
}

export default Compte;
