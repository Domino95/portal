import React from "react";
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
  @media(max-width: 1024px){
  width: 90%;
  }
`
class UserPage extends React.Component {

  state = {
    user: ""
  };


  componentDidMount() {
    this.props.firebase.db.ref(`users/${this.props.firebase.getCurrentInfoUser().uid}`).on('value', snapshot => {
      const value = snapshot.val()
      const currentUser = value
      this.setState({ user: currentUser })
    })
  };

  componentWillUnmount() {
    console.log("woek")
    this.props.LogOutFunctions()
  }


  render() {


    if (this.state.user.sekretariat) {
      return (

        <Router>
          <Redirect to="/sekretariat" />
          < WrapperMain >
            <Header LogOutFunctions={this.props.LogOutFunctions} />
            <Component />
          </WrapperMain >
        </Router>

      )
    }

    if (this.state.user.doctor) {
      return (
        <Router>
          <Redirect to="/doctor" />
          < WrapperMain >
            <Header LogOutFunctions={this.props.LogOutFunctions} />
            <Component />
          </WrapperMain >
        </Router>
      )
    }

    return (

      < WrapperMain >
        <Header LogOutFunctions={this.props.LogOutFunctions} />
        <Navigation />
        <Component />
      </WrapperMain >
    );




  }
};

export default withRouter(withFirebase(UserPage));

