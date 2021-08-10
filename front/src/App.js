// import React, { Component } from 'react'
import './App.css';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';
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
                      <Route  path="/users/:id">
                            <Profile />
                      </Route>
                      {/* <Route path="/users/:id" component={Profile} /> */}
                      <Route  component={ErrorPage} />

                  </Switch>

              <Footer /> 

            
                  
      
          </div>

      </Router>
          
  )
}
export default App;

