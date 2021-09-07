import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import TextField from "@material-ui/core/TextField";
import '../styles/Publication.css'
// import axios from 'axios';

function Publication() {
  const recupData = JSON.parse(localStorage.getItem('user'))
  const token = recupData.token
  console.log(recupData)
  const userId = recupData.id

  console.log('userId : ' + userId)
  const [message, setMessage] = useState()
  const [file, setFile] = useState()

  const handleMessagePicture = (e) => {
    e.preventDefault()

    if (message || file) {
      console.log(file)
      console.log('message ***** : ' + message)

      const data = new FormData()
      data.append('message', message)
      data.append('image', file)
      data.append('userId', userId)

      console.log('data : ' + data)

      //  ******************************** Publication nouveau  message
      const requestOptions = {
        method: 'POST',
        headers: { Authorization: 'Bearer ' + token },
        body: data,
      }

      fetch('http://localhost:5000/api/messages', requestOptions)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          console.log(data)
          alert('Message crée')

          window.location = `/users/Profile/${userId}`
        })
        .catch((err) => console.log(err))
    } else {
      alert('Veuillez entrer un message ou une image')
    }
  }

  const handleClickAnnuler = () => {
   
    window.location = `/users/Profile/${userId}`
  }

  // ********************************modification message existant

  // const modifMessagePicture = (id) => {

  //   console.log('Le lien a été cliqué.');
  //   const requestOptions = {
  //       method: 'update',
  //       headers: {  Authorization: "Bearer " + recupData.token }
  //       body: 
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
            <h2 className="btn btn-dark h2btn-dark">
              {recupData.firstname} vous allez créer une nouvelle publication
            </h2>
          </div>
          <div className="row">
            <div className="col-12 justify-content-center form-group">
              <label htmlFor="newMessage">
                Donnez des détails sur votre publication.
              </label>{' '}
              <textarea
                className="form-control"
                v-model="newMessage"
                id="newMessage"
                name="message"
                rows="8"
                placeholder="Saisissez votre message. "
                onChange={(event) => {
                  const { value } = event.target
                  setMessage(value)
                }}
              />
            </div>
            <hr />
            <div className="col-12 justify-content-center text-center">
              <p className="text-center">
                Formats acceptés: jpg, jpeg, png et gif.
              </p>
            </div>
            <div className="col-12 justify-content-center">
              <div className="form-group justify-content-center ">
                <label htmlFor="File"></label>
                <input
                  type="file"
                  useRef="file"
                  name="image"
                  variant="contained"
                  className="form-control-file  flex-wrap: wrap "
                  id="file"
                  multiple={false}
                  accept=".jpg, .jpeg, .gif, .png"
                  onChange={(event) => {
                    const file = event.target.files[0]
                    setFile(file)
                  }}
                />
              </div>
            </div>
          </div>

          <div className="  m-2 p-2 ">
            <div>
              <button
                type="submit"
                className="btn btn-dark  m-2 p-2  btnValider "
                onClick={handleMessagePicture}
              >
                Valider
              </button>

              {/* <button type="submit" className="btn btn-dark  m-2 p-2"  
                  onClick={modifMessagePicture}  
                  >
                    Modifier message
                  </button> */}

              {/* <Link to="/users/Profile">
                    <div className="btn btn-danger   m-2 p-2">
                      {' '}
                      Annuler/Retour
                    </div>
                  </Link> */}
              <button
                type="button"
                className="btn btn-danger m-3 font-weight-bold "
                onClick={handleClickAnnuler}
              >
                Annuler/Retour
              </button>
            </div>
          </div>
          <div v-show="isInvalid" className="invalidBox m-2" key="invalid">
            <p id="">
              Vous ne pouvez pas envoyer une publication sans contenu (vous
              devez inclure texte ou image). Votre message doit faire moins de
              1500 caractères.
            </p>
          </div>
        </form>
      </section>
    </>
  )
}

export default Publication
