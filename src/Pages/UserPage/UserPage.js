import React, { useEffect, useState } from "react";
import Header from "../../Layouts/Header"
import styled from "styled-components";
import Navigation from "../../Layouts/Navigation"
import Component from "../../Layouts/Component"
import { withFirebase } from "../../Firebase";
import { withRouter } from "react-router-dom";
import { BrowserRouter as Router, Redirect } from "react-router-dom";






const WrapperMain = styled.div`
  width: 75%;
  margin: auto;
  margin-bottom: 5px;
  height: 100%;

`


const UserPage = (props) => {
  const [user, setUser] = useState({})


  useEffect(() => {
    props.firebase.db.ref(`users/${props.firebase.getCurrentInfoUser().uid}`).on('value', snapshot => {
      const value = snapshot.val()
      const currentUser = value
      setUser(currentUser)
    })
  }, []);


  if (user.sekretariat) {
    return (

      <Router>
        <Redirect to="/sekretariat" />
        < WrapperMain >
          <Header LogOutFunctions={props.LogOutFunctions} />
          <Component />
        </WrapperMain >
      </Router>

    )
  }
  return (

    < WrapperMain >
      <Header LogOutFunctions={props.LogOutFunctions} />
      <Navigation />
      <Component />
    </WrapperMain >
  );





};

export default withRouter(withFirebase(UserPage));

