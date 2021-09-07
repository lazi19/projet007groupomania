import React, { useState, useEffect } from 'react'
import '../styles/FormApdate.css'

function FormApdate() {
  const user = JSON.parse(localStorage.getItem('user'))
  const id = user.id
  const [data, setData] = useState('')
  const [postId, setPostId] = useState('')
  const [lastname, setLastname] = useState('')
  const [firstname, setFirstname] = useState('')
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')


  

  const injecterFormApdate = new FormData();
  injecterFormApdate.append('lastname', lastname)
  injecterFormApdate.append('firstname', firstname)
  injecterFormApdate.append('mail', mail)
  injecterFormApdate.append('password', password)
  injecterFormApdate.append('id', id)

  // mise a jour des données de user
  console.log(lastname + " " + firstname +  " " + mail +  " " + password +  " " + id)
  console.log(id)
  console.log(injecterFormApdate)

  const HandleSubmit = (id) => {
    
      const requestOptions = {
          method: 'PUT',     
          headers: { Authorization : "Bearer " + user.token },
          // body: injecterFormApdate,
          body: {
              lastname,
              firstname,
              mail, 
              password,
              id
          
          } ,
      }

   
    console.log("une ligne avant le fetch")

    
    useEffect((id) => {
        fetch(`http://localhost:5000/api/users/${id}`, requestOptions)
        .then((response) => {
          return response.json()
        })
          .then((data) => {
            setPostId(data.id)
            setData(data)
            console.log(data)
            alert('User mis a jour')
            // localStorage.setItem('user', JSON.stringify(data))
            // localStorage.setItem("isAuthenticated", "true")
            // window.location = `/users/Profile/${data.id}`
          })
          .catch((err) => {
            alert(err)
          })
    }, [])
  }

  return (
    <form className="contact-form"
        onSubmit={HandleSubmit(user.id)}
    >
      <h2>Changer vos données</h2>
      <div className="form-content">
        <input
          style={{ background: 'none', borderBottom: ' 2px solid gray' }}
          type="text"
          id="lastname"
          name="lastname"

          onChange={(event) => {
            const { value } = event.target
            setLastname(value)
          }}

          // onChange={(e) => setLastname(e.target.value)}
          // value={lastname}
          placeholder="Nom "
          // autoComplete="off"
        />
        <input
          style={{ background: 'none', borderBottom: ' 2px solid gray' }}
          type="text"
          id="firstname"
          name="firstname"
         
          onChange={(event) => {
            const { value } = event.target
            setFirstname(value)
          }}
          // onChange={(e) => setFirstname(e.target.value)}
          // value={firstname}
          placeholder="Prénom"
        />
        <input
          style={{ background: 'none', borderBottom: ' 2px solid gray' }}
          type="email"
          id="mail"
          name="mail"

          onChange={(event) => {
            const { value } = event.target
            setMail(value)
          }}

          // onChange={(e) => setMail(e.target.value)}
          // value={mail}
          placeholder="mail"
          
        />
        <div className="email-content">
          {/* <label id="not-mail">Email non valide</label> */}
          <input
            style={{ background: 'none', borderBottom: ' 2px solid gray' }}
            // className=" donnee  "
            type="password"
            id="password"
            name="password"

            onChange={(event) => {
              const { value } = event.target
              setPassword(value)
            }}
            // onChange={(e) => setPassword(e.target.value)}
            // value={password}
            placeholder="Mot de passe "
            // autoComplete="off"
            minLength="8"
            pattern="(?=.*\d)(?=.*[a-z]).{8,}"
            title="Mot de pasese doit contenir au moins un chiffre, une lettre  et au moins 8 caractères ou plus"
          />
        </div>
      </div>
      <input
        className=" btn btn-secondary m-2 "
        type="submit"
        value="Envoyer"
       
      />
      <div className="form-message"></div>
    </form>
  )

  // return (

  //     <form className='ml-3'
  //         // onSubmit={handleSubmit(id)}
  //         onSubmit={ () => handleSubmit(id)}
  //     >
  //         <label htmlFor="lastname">Nom
  //             <input
  //             type="text"
  //                 id="lastname"
  //                 name="lastname"
  //                 required
  //                 placeholder="Votre Nom"
  //                 value={lastname}
  //                 onChange={e => setLastname(e.target.value)}
  //                 />
  //          </label>

  //         <label htmlFor="firstname">Prenom
  //             <input
  //                 type="text"
  //                 id="firstname"
  //                 name="firstname"
  //                 required
  //                 placeholder="Votre Prenom"
  //                 value={firstname}
  //                 onChange={e => setFirstname(e.target.value)}
  //                 />
  //             </label>

  //         <label htmlFor="mail" > E-mail
  //             <input
  //             class="form-control-plaintext mt-3 bg-white "
  //                 type="mail"
  //                 id="mail"
  //                 name="mail"
  //                 required
  //                 placeholder=" Votre Mail"
  //                 value={mail}
  //                 onChange={e => setMail(e.target.value)}
  //             />
  //          </label>

  //          <label htmlFor="password">Mot de passe
  //             <input
  //                 type="password"
  //                 id="password"
  //                 name="password"
  //                 required
  //                 placeholder="Votre mot de passe "
  //                 minLength="8"
  //                 pattern="(?=.*\d)(?=.*[a-z]).{8,}"
  //                 // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
  //                 title= "Mot de pasese doit contenir au moins un chiffre et une lettre majuscule et minuscule et au moins 8 caractères ou plus"
  //                 value={password}
  //                 onChange={e => setPassword(e.target.value)}

  //             />
  //          </label>
  //             <button class="btn btn-secondary m-2 " type="submit" value="Submit " >Envoyer les données</button>
  //          </form>
  // )
}

export default FormApdate
