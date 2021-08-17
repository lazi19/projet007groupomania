import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Publication() {
  const recupDataEtId = JSON.parse(sessionStorage.getItem( "dataEtId"))

    const [file, setFile] = useState();
    const [message, setMessage] = useState();

    const handleMessagePicture = (e) => {
        e.preventDefault();


        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body:  JSON.stringify(file, message),
      };
      
      fetch('http://localhost:5000/api/postMessage', requestOptions)
          .then(response => response.json())
          .then(data => { console.log(data);
             window.location = "/users/Profile";
          })
          .catch((err) => console.log(err))

    }
  return (
   
    <>
      {/* Un seul bloc pour le contenu creation message  */}
      <section onSubmit={handleMessagePicture} class="row card bg-light m-5 p-3">
        <form 
        // enctype="multipart/form-data"
        >
          <div class="header p-1">
            <h2 class="btn btn-dark">
             {/* { recupDataEtId.firstname }  */}
             firstname vous allez créer une nouvelle publication
            </h2>
          </div>
          <div class="row">
            <div className="col-12 justify-content-center form-group">
              <label for="newMessage">
                Donnez des détails sur votre publication.
              </label>
              {' '}
              
              <textarea
                class="form-control"
                v-model="newMessage"
                id="newMessage"
                name="message"
                rows="8"
                placeholder="Saisissez votre message. (1500 caractères max)"
                required
                onChage={(e) => setMessage(e.target.message[0])}
                value={message}
              />
        
            </div>
            <div class="col-12 justify-content-center text-center">
              {/* <img alt="newImage" class="w-50 rounded" /> */}
              <p class="text-center">
                {' '}
                un aperçu de votre post apparaîtra ici. Formats acceptés: jpg,
                jpeg, png et gif.
              </p>
            </div>
            <div class="col-12 justify-content-center">
              <div class="form-group justify-content-center">
                <label for="File"> Choisir une nouvelle photo  </label> {' '}
                <input
                  type="file"
                //   ref="file"
                  name="file"
                  class="form-control-file"
                  id="file"
                  accept=".jpg, .jpeg, .gif, .png"
                  onChange={(e) => setFile(e.target.file)}
                  // onChange={(e) => setFile(e.target.file[0])}
                  value={file}
                /> 
              </div>
            </div>
          </div>

          <div class="  m-2 p-2 ">
                <div>
                  <button type="submit" class="btn btn-dark  m-2 p-2">
                    Valider
                  </button>

                  <Link to="/users/Profile">
                    <div class="btn btn-danger   m-2 p-2">
                      {' '}
                      Annuler/Retour
                    </div>
                  </Link>

                </div>
               
          </div>
          <div v-show="isInvalid" class="invalidBox m-2" key="invalid">
            <p>
              Vous ne pouvez pas envoyer de post sans contenu (vous devez
              inclure texte et image). Votre message doit faire moins de 1500
              caractères.
            </p>
          </div>
        </form>
      </section>
   
    </>
  )
}

export default Publication
