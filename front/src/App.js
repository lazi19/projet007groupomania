import React from 'react'
import './App.css';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';
import Commentaire from './components/Commentaire';
import Publication from './components/Publication';
import Compte from './components/Compte';
import Administrateur from './components/Administrateur';
import ErrorPage from './components/ErrorPage';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";


function App() {

  return (
    
      <Router>
          <div>
              <Menu />
              
                  <Switch>
                      <Route exact path="/">
                            <Signup />
                      </Route>

                      <Route  path="/Signup">
                            <Signup />
                      </Route>

                      <Route  path="/Login">
                            <Login />
                      </Route>

                      {/* <Route >
                            <ErrorPage />
                      </Route> */}
                      <Route  path="/users/Profile" >
                            <Profile />
                      </Route>

                      <Route  path="/users/Publication" >
                            <Publication />
                      </Route>

                       <Route  path="/users/Commentaire" >
                            <Commentaire />
                      </Route> 

                       {/* <Route name = "commentaire" path="/users/Commentaire/:id" >
                            <Commentaire />
                      </Route>  */}


                      <Route  path="/users/Compte" >
                            <Compte />
                      </Route>
                      
                      <Route  path="/users/Profile/:id">
                            <Profile />
                      </Route>
                      {/* <Route path="/users/:id" component={Profile} /> */}
                      
                      <Route  path="/users/Administrateur" >
                            <Administrateur />
                      </Route>

                      <Route  component={ErrorPage} />

                  </Switch>

              <Footer /> 
          </div>

      </Router>
          
  )
}
export default App;

