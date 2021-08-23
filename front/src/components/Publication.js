import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import TextField from "@material-ui/core/TextField";
// import axios from 'axios';


function Publication() {

  const recupData = JSON.parse(localStorage.getItem( "user"))
  // const token = recupData.token;
  console.log(recupData)
   const userId =  recupData.id;
  
   console.log("userId : " + userId)
    const [message, setMessage] = useState();
    const [file, setFile] = useState();

    const handleMessagePicture = (e) => {

         e.preventDefault();

        //  const data = new FormData();

        //  data.append("message", message);
        //  data.append("file", file);
        //  data.append("userId", userId);
        //  data.append("firstname", firstname);
        // const publicationMessageImageToken = {message, file, recupToken }
       
        console.log( file);
        console.log("message : " + message);
        // console.log(data);

//Publication nouveau du message
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        
          body:  JSON.stringify({
                      message,
                      file,
                      userId
                     
          }),
      };
      
      fetch('http://localhost:5000/api/messages', requestOptions)
          .then(response => response.json())
          .then(data => { console.log(data);
            
            //  window.location = `/users/Profile/${id}`;
          })
          .catch((err) => console.log(err))
    }

    

    
//modification message existant

// const modifMessagePicture = (id) => {
 
//   console.log('Le lien a été cliqué.');
//   const requestOptions = {
//       method: 'update',
//       headers: {  Authorization: "Bearer " + recupData.token }
//   }

//   fetch( `http://localhost:5000/api/messages/${id}`, requestOptions) 
//   .then((response) => {
//       console.log(response);
     
//       // localStorage.clear()
//       alert('message modifier')
//       // window.location = '/login'
//     })
   
//     .catch((error) => {
//       console.log(error)
//     }) 
// }


  return (
   
    <>
      {/* Un seul bloc pour le contenu creation message  */}
      <section className="row card bg-light m-5 p-3">
        <form 
        // enctype="multipart/form-data"
        >
          <div className="header p-1">
            <h2 className="btn btn-dark">
              { recupData.firstname }  vous allez créer une nouvelle publication
            </h2>
          </div>
          <div className="row">
            <div className="col-12 justify-content-center form-group">
              <label htmlFor="newMessage">
                Donnez des détails sur votre publication.
              </label>
              {' '}
              
              <textarea
                className="form-control"
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
            <div className="col-12 justify-content-center text-center">
              {/* <img alt="newImage" className="w-50 rounded" /> */}
              <p className="text-center">
                {' '}
                un aperçu de votre post apparaîtra ici. Formats acceptés: jpg,
                jpeg, png et gif.
              </p>
            </div>
            <div className="col-12 justify-content-center">
              <div className="form-group justify-content-center">
                <label htmlFor="File"> Choisir une nouvelle photo  </label> {' '}
                <input
                  type="file"
                  useRef="file"
                  name="file"
                  className="form-control-file"
                  id="file"                 
                  multiple={false}
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

          <div className="  m-2 p-2 ">
                <div>
                  <button type="submit" className="btn btn-dark  m-2 p-2"  onClick={handleMessagePicture}  >
                    Valider
                  </button>
                 
                  {/* <button type="submit" className="btn btn-dark  m-2 p-2"  
                  onClick={modifMessagePicture}  
                  >
                    Modifier message
                  </button> */}

                  <Link to="/users/Profile">
                    <div className="btn btn-danger   m-2 p-2">
                      {' '}
                      Annuler/Retour
                    </div>
                  </Link>

                </div>
               
          </div>
          <div v-show="isInvalid" className="invalidBox m-2" key="invalid">
            <p id=''>
              Vous ne pouvez pas envoyer de post sans contenu (vous devez
              inclure texte ou image). Votre message doit faire moins de 1500
              caractères.
            </p>
          </div>
        </form>
      </section>
   
    </>
  )
}

export default Publication
