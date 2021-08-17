import React from 'react'



function Compte() {
    const firstname = "firstnameDynamique";

     
    return (
        <main class="container" >

        
            <div class="row justify-content-center " >
                <div className="row maRow d-flex col-10  " >
                     <div className=" col col-8 justify-content-end ">
                         <h3 className="text-center "> Bienvenue <span>{firstname}{/*{recupDataEtId.firstname}*/} !</span></h3> 
                    </div>
                    <hr/>

                    <div>
                        <p className=" text-center ">Membre depuis le {/*{createdAt}*/}</p>
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
                            <button type="button" class="btn btn-danger m-3 font-weight-bold ">SUPPRIMER VOTRE COMPTE</button>
                            <button type="button" class="btn btn-secondary m-3 font-weight-bold "  >Annuler</button>

                        </div>
                        

                    </div>
                                   
                </div>    
            </div>
        </main>
    )
}

export default Compte;
