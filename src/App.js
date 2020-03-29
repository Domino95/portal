import React, { Component } from "react";
import AuthPage from "../src/Pages/AuthPage/AuthPage";
import UserPage from "../src/Pages/UserPage/UserPage";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { login, user } from "routes/routes";
import { withRouter } from "react-router-dom";
import { withFirebase } from "./Firebase";





const Global = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;1
      outline: none;
      
  }
  button{
    cursor: pointer;
  }

  input{
  font-size: 15px;
  padding: 10px;
  height: 40px;
  margin-right: 20px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 3px inset black;
  background-color: #fff;
  
  &::placeholder {
    font-size: 0.8rem;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
`


class App extends Component {
  state = {
    isLoggedIn: false

  };

  logInUser = () => {
    this.setState({ isLoggedIn: true });
  };


  LogOutFunctions = () => {
    this.props.firebase.doSignOut()
    this.setState({ isLoggedIn: false })
  };



  render() {

    const { isLoggedIn } = this.state;


    return (
      <>
        <Global />
        <Router>
          {!isLoggedIn && <Redirect to={login} />}
          {isLoggedIn ? (
            <Route
              path={user}
              render={() => <UserPage LogOutFunctions={this.LogOutFunctions} />} />

          ) : (
              <Route
                path={login}

                render={() => <AuthPage logInUser={this.logInUser} />}
              />
            )}
        </Router>
      </>
    );
  }
}

export default withRouter(withFirebase(App));
