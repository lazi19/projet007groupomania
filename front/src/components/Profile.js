import React, {Component} from 'react'
import axios from 'axios'
// function Profile() {
    class Profile extends Component  { 

        state = {
            id: {}
        }

        // componentDidMount() {
        //     // console.log(this.props.match.params.ProfileId);
        //     const id = this.props.match.params.ProfileId
            
        //     const requestOptions = {
        //         method: 'POST',
        //         headers: { 'Content-Type': 'application/json' },
        //         data: payload,
        //     };
            
        //     fetch('http://localhost:5000/users', requestOptions)
        //         .then(response => {
        //             //          this.setState({
        //             //     id: id
        //             // })
        //             console.log(response)
        //         })
        // }

        


        render(){
            return (

                    <div className="container mt10">
                        <h1>Profile</h1>

                        <ul className="list-group list-group-flush">
                            <li className=" list-group-item">ID: {this.state.id} </li>
                        </ul>
                        <button>Valider</button>
                        
                    </div>
                )

        }
    
}

export default Profile;
