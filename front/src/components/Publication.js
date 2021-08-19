import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import TextField from "@material-ui/core/TextField";
import axios from 'axios';

function Publication() {

  const recupData = JSON.parse(localStorage.getItem( "user"))
  const token = recupData.token;
    
    const [message, setMessage] = useState();
    const [file, setFile] = useState();

    const handleMessagePicture = (e) => {

         e.preventDefault();

         const data = new FormData();

         data.append("message", message);
         data.append("file", file);
        // const publicationMessageImageToken = {message, file, recupToken }
       
        console.log( file);
        console.log("message : " + message);
        console.log(  data);

      //   const requestOptions = {
      //     method: 'POST',
      //     headers: { 'Content-Type': 'application/json' },
        
      //     body:  JSON.stringify({
      //                 message,
      //                 file,
      //                 token
      //     }),
      // };
      
      // fetch('http://localhost:5000/api/messages', requestOptions)
      //     .then(response => response.json())
      //     .then(data => { console.log(data);
      //       //  window.location = "/users/Profile";
      //     })
      //     .catch((err) => console.log(err))
        
   axios
    .post("http://localhost:5000/api/messages", data, {
      headers: { Authorization: "Bearer " + token },
    })
    .then((res) => console.log(res), alert("Message crée"))
    .then(() => {document.location.reload()})
    .catch((err) => console.log(err));

      

    }


  return (
   
    <>
      {/* Un seul bloc pour le contenu creation message  */}
      <section class="row card bg-light m-5 p-3">
        <form 
        // enctype="multipart/form-data"
        >
          <div class="header p-1">
            <h2 class="btn btn-dark">
              { recupData.firstname }  vous allez créer une nouvelle publication
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
                placeholder="Saisissez votre message. "
                required
                // onChage={(e) => setMessage(e.target.message[0])}
                // value={message.value}
                onChange={(event) => {
                  const { value } = event.target;
                  setMessage(value);
                }}
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
                  // onChange={(e) => setFile(e.target.file[0])}
                  // onChange={(e) => setFile(e.target.file[0])}
                  // value={file.value}

                  onChange={(event) => {
                    const file = event.target.files[0];
                    setFile(file);
                  }}
                /> 
              </div>
            </div>
          </div>

          <div class="  m-2 p-2 ">
                <div>
                  <button type="submit" class="btn btn-dark  m-2 p-2"  onClick={handleMessagePicture}  >
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
