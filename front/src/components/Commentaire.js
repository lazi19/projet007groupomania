import React, { useState } from 'react';
import { Link } from 'react-router-dom'

function Commentaire() {
    // const user = JSON.parse(sessionStorage.getItem( "user"))
    const recupData = JSON.parse(localStorage.getItem( "user"))
    const userMessage = 18
    
    const [commentaire, setCommentaire] = useState();

// poster un commentaire
    const handleCommentaire = (e) => {
        e.preventDefault();


        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body:  JSON.stringify({
              commentaire,
              userMessage
              
             
            }),
        };
      

        fetch('http://localhost:5000/api/commentaires', requestOptions)
        .then(response => response.json())
        .then(data => { console.log(data);
          //  window.location = "/users/Profile";
        })
        .catch((err) => console.log(err))

    }

  return (
    <main className="">
      <section className="row card bg-light m-5 p-3">
        <form enctype="multipart/form-data"   onSubmit={handleCommentaire}  >
          <div className="header">
            <h2 className="d-block p-2 bg-black text-white lead text-center ">
             {recupData.firstname} vous commentez la publication numéro   {/*{userMessage} */}
              <span className="badge font-weight-bold badge-light">
                idValeurDynamique de la publication
              </span>
            </h2>
          </div>

          <div className="row">
            <div className="col-12 justify-content-center form-group">
              <label for="newComment">À vos claviers...</label>
              <textarea
                className="form-control"
                id="newComment"
                name="comment"
                rows="8"
                placeholder=" Saisissez votre commentaire ici. (1500 caractères max) "
                required
                onChage={(e) => setCommentaire(e.target.commentaire[0])}
                value={commentaire}
             />
            </div>
          </div>
          <div className="d-flex justify-content-between flex-wrap">
            <div>
              <button
                type="submit"
                className="btn btn-dark  font=weight-bold btn-block m-2 p-2"
              >
                Valider
              </button>
            </div>

            <div>
              <Link
                to="/users/Profile"
                className="btn btn-danger btn-block m-2 p-2"
              >
                Annuler/Retour
              </Link>
            </div>
          </div>
          <div className="invalidBox m-2">
            {/*style="display: none" */}
            <p>
              {' '}
              Vous devez renseigner la case " Saisissez votre commentaire ici en
              respectant les instructions (1500 caractères max) "
            </p>
          </div>
        </form>
      </section>
    </main>
  )
}

export default Commentaire
