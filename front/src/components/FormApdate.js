import React, { useState } from "react";

function FormApdate() {
    const user = JSON.parse(localStorage.getItem('user'));
    const id = user.id
    const [data, setData] = useState("");
    const [postId, setPostId] = useState(null);
    const [lastname, setLastname] = useState("");
    const [firstename, setFirstname] = useState("");
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
 

// mise a jour des données de user
    const  handleSubmit = (id) => {
      
          const requestOptions = {
            method: 'PUT',
            // headers: { 'Content-Type': 'application/json' },
            headers: {  Authorization: "Bearer " + user.token },
            body: JSON.stringify({
                lastname : lastname,
                firstname : firstename,
                mail : mail,
                password : password
            })
          };

        fetch(`http://localhost:5000/api/users/${id}`, requestOptions)
            .then(response => response.json())
            .then((data) => {
                setPostId(data.id)
                setData(data)
                console.log(data)
                localStorage.setItem('user', JSON.stringify(data))
                // localStorage.setItem("isAuthenticated", "true")
                // window.location = `/users/Profile/${data.id}`
               
            })
            .catch(err => {
                //On traite ici les erreurs éventuellement survenues
                // console.log( err + " utilistauer deja créer");
                alert(err )
            });
       
                
       
    }


    return (
          
        <form className='ml-3'
            // onSubmit={handleSubmit(id)}
            onSubmit={ () => handleSubmit(id)}
        >
            <label htmlFor="lastname">Nom         
                <input 
                type="text"
                    id="lastname"
                    name="lastname"
                    required
                    placeholder="Votre Nom" 
                    value={lastname} 
                    onChange={e => setLastname(e.target.value)}
                    />
             </label>

            <label htmlFor="firstname">Prenom         
                <input 
                    type="text"
                    id="firstname"
                    name="firstname"
                    required
                    placeholder="Votre Prenom" 
                    value={firstename} 
                    onChange={e => setFirstname(e.target.value)}
                    />
                </label>
                
            <label htmlFor="mail" class="col-sm-2 col-form-label "> E-mail         
                <input 
                class="form-control-plaintext mt-3 "
                    type="mail"
                    id="mail"
                    name="mail"
                    required
                    placeholder=" Votre Mail" 
                    value={mail} 
                    onChange={e => setMail(e.target.value)}
                />
             </label>

             <label htmlFor="password">Mot de passe         
                <input 
                    type="password"
                    id="password"
                    name="password"
                    required
                    placeholder="Votre mot de passe " 
                    minLength="8"
                    pattern="(?=.*\d)(?=.*[a-z]).{8,}"
                    // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title= "Mot de pasese doit contenir au moins un chiffre et une lettre majuscule et minuscule et au moins 8 caractères ou plus"
                    value={password} 
                    onChange={e => setPassword(e.target.value)}               

                />
             </label>
            


                <button class="btn btn-secondary m-2 " type="submit" value="Submit " >Envoyer les données</button>
             </form>
    )
}

export default FormApdate;
