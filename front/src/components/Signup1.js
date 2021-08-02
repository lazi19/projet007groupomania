import React, { useState } from 'react';
import '../styles/Signup.css'


function Signup() {

    const [state , setState] = useState({
        lastname: "",
        firstname:"",
        mail: "",
        password: "", 
        confirmPassword: "",
        errors: {}
    })
    

    onChange = (e) => {
		this.setState({ [e.target.id]: e.target.value });
	};

    onSubmit = (event) => {
        event.preventDfault();

        this.setState({
			lastname: "",
            firstname: "",
            mail: "",
            password: "",
            confirmPassword: ""
		})
    }
    
    const fetchSignup = e => {
        e.preventDefault()
        // console.log(this.state)
    
        fetch("http://localhost:3000/api/user/signup", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                lastname:this.state.lastname,
                firstname: this.state.firstname,
                mail: this.state.mail,
                password: this.state.password,
             })

        })  
        .then(response => response.json())    // .then(() => res.status(200).json({ message: "Utilisateur créé !" }))     
            .then(data => this.setState({ postId: data.id })) // redirectToHome(); 
            .catch(error =>{console.log(error)});

    }

    return (
        <div className="creationCompte" >
                <fieldset>
                     <form id="formSignin" className="formSignin" name="form" onSubmit={fetchSignup} > {/*onSubmit={this.onSubmit} */}
                        <h2 className="creationCompt">Créer un compte</h2>
                        <hr></hr>
                        <div className="formNom">
                            <label htmlFor="lastname">Nom </label>
                            <input  type="text"  id="lastname"  name="lastname"  required  placeholder="Votre Nnom"
                             onChange={this.onChange} 
                             value={this.state.lastname}
                             error={error.lastname}

                                                        
                            />
                        </div>

                        <div className="formPrenom">
                            <label htmlFor="firstname">Prenom </label>
                            <input  type="text"  id="firstname"  name="firstname"  required  placeholder="Votre Nnom"
                            onChange={this.onChange} 
                            value={this.state.firstname}
                            error={error.firstname}

                            />
                        </div> 

                        <div className="formMail">
                            <label htmlFor="mail">E-mail </label>
                            <input type="email"  id="mail"  name="mail"  required  placeholder="mail@serveur.com"
                             onChange={this.onChange} 
                             value={this.state.mail}
                             error={error.mail}
                            />
                        </div>

                        <div className="formPassword">
                            <label htmlFor="password">Mot de passe</label>
                            <input type="password"  id="password"  name="password"  required  placeholder="Enter Password "
                             onChange={this.onChange} 
                             value={this.state.password}
                             error={error.password}
                            /><br /><br />
                        </div>

                        <div className="formConfirmPassword">
                            <label htmlFor="confirmPassword">Mot de passe</label>
                            <input type="password"  id="confirmPassword"  name="confirmPassword"  required  placeholder="Enter Password "
                             onChange={this.onChange} 
                             value={this.state.confirmPassword}
                             error={error.confirmPassword}
                            /><br /><br />
                        </div>

                       

                        <div className="clearfix">
                            <button type="submit" className="signupbtn" >Se connecter</button>
                        </div>
                    </form> 
                    <p>Vous avez déjà un compte? <br />
                    <a href="./Login">Log in here</a>
                    </p>
                </fieldset>
        </div>  

    )
       
}

export default Signup;


// methode de Le Designer du Web

// import React, { Component } from 'react'
// // import React from 'react';
// import '../styles/Signup.css'


// export default class double extends Component {
//     state = {
//         lastname: '',
//         firstname: '',
//         mail: '',
//         password: '',
//         items: []
//     }

//     onChange = (event) => {
//         this.setState({
//             [event.target.name] : event.target.value
//         });
//         // console.log(this.state.firstname);
//     }

//     onSubmit = (event) => {
//         // event.preventDfault();
//          this.setState({
//             lastname: '',
//             firstname: '',
//             mail: '',
//             password: '',
//             items: [...this.state.items, {lastname: this.state.lastname, firstname: this.state.firstname, mail: this.state.mail, password: this.state.password }]
//          });  
//     }

//     renderCard = ( ) => {
//         return this.state.items.map((item, index) => {
//             return (
//                 <div className="card" key={index}>
//                     <div lassName="card-body" >
//                        <h2>Bonjour {item.lastname} { item.firstname}</h2>
//                        <hr />
                       
//                     </div>
//                 </div>
//             )
//         })
//     }


//     render() {
//         return (
           
//             <div className="creationCompte" >
//                 <fieldset>
//                     <form id="formSignin" className="formSignin" name="form" onSubmit={this.onSubmit} >
//                         <h2 className="creationCompt">Créer un compte</h2>
//                         <hr></hr>
//                         <div className="formNom">
//                             <label htmlFor="lastname">Nom </label>
//                             <input  type="text"  id="lastname"  name="lastname"  required  placeholder="Votre Nnom"
//                             onChange={this.onChange}
//                             value={this.state.lastname}
//                             />
//                         </div>

//                         <div className="formPrenom">
//                             <label htmlFor="firstname">Prenom </label>
//                             <input  type="text"  id="firstname"  name="firstname"  required  placeholder="Votre Nnom"
//                              onChange={this.onChange}
//                              value={this.state.firstname}
//                              />
//                         </div> 

//                         <div className="formMail">
//                             <label htmlFor="mail">E-mail </label>
//                             <input type="email"  id="mail"  name="mail"  required  placeholder="mail@serveur.com"
//                             onChange={this.onChange}
//                             value={this.state.mail}
//                             />
//                         </div>

//                         <div className="formPassword">
//                             <label htmlFor="password">Mot de passe</label>
//                             <input type="password"  id="password"  name="password"  required  placeholder="Enter Password "
//                              onChange={this.onChange}
//                              value={this.state.password}
//                             /><br /><br />
//                         </div>

                       
//                         <div className="clearfix">
//                             <button type="submit" className="signupbtn">Se connecter</button>
//                         </div>
//                     </form> 
                
//                 </fieldset>
//                 {this.renderCard()}
//             </div>  

            
//         )
//     }
// }