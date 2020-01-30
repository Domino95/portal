import React from "react";
import InputsWithLabels from "./InputsWithLabels/InputsWithLabels";
import SubmitButton from "./SubmitButton/SubmitButton";
import {
  PASSWORD,
  REP_PASSWORD,
  EMAIL,
  LOGIN_TYPE,
  REGISTER_TYPE,
  inputs_incorrect,
  email_incorrect,
  nick_or_password_incorrect,
  password_length_incorrect,
  repassword_incorrect,
  user_already_registered,
  DISPLAY_NAME,
  no_name_and_surname
} from "Pages/AuthPage/constants";
import AuthFormStyle from "./AuthFormStyle";
import { withFirebase } from "../../../Firebase";
import { withRouter } from "react-router-dom";
import { user } from "routes/routes";




class AuthForm extends React.Component {
  state = {
    email: "",
    password: "",
    repassword: "",
    displayName: ""

  };

  componentWillMount() {
    this.props.firebase.getCurrentUser()
  }

  clearInputs = () => {
    this.setState({
      email: "",
      repassword: "",
      password: "",
      displayName: ""
    });
  };

  handleSetInput = (e, name) => {
    const { value } = e.target;
    if (name === EMAIL) this.setState({ email: value });
    else if (name === PASSWORD) this.setState({ password: value });
    else if (name === REP_PASSWORD) this.setState({ repassword: value });
    else if (name === DISPLAY_NAME) this.setState({ displayName: value });

  };



  formValidation = (email, password, repassword, displayName) => {

    const { formType, sendMessageToUser, firebase } = this.props;


    if (!email || !password) {
      this.clearInputs();
      return sendMessageToUser(inputs_incorrect);
    } else if (email.indexOf("@") < 0) {
      this.clearInputs();
      return sendMessageToUser(email_incorrect);
    } else if (password.length < 8) {
      this.clearInputs();
      return sendMessageToUser(password_length_incorrect);
    }

    else if (formType === LOGIN_TYPE) {
      firebase
        .doSignInWithEmailAndPassword(email, password)
        .then(authUser => {
          this.props.history.push(user);
          return authUser && this.props.logInUser();
        })
        .catch(err => {
          console.log(err);
          this.props.sendMessageToUser(nick_or_password_incorrect);
        });
      this.props.firebase.setSession()

    }


    else if (formType === REGISTER_TYPE) {
      if (!repassword) {
        this.clearInputs(inputs_incorrect);
        return sendMessageToUser();
      } else if (password !== repassword) {
        this.clearInputs();
        return sendMessageToUser(repassword_incorrect);
      } else if (!displayName) {
        this.clearInputs();
        return sendMessageToUser(no_name_and_surname);
      } else {
        firebase
          .doCreateUserWithEmailAndPassword(email, password)
          .then(authUser => {
            return this.props.firebase
              .user(authUser.user.uid)
              .set({
                displayName,
                phoneNumber: '',
                pesel: '',
                email: email.toLowerCase()
              });
          })
          .then(() => {
            alert("Rezerwacja przebiegla pomyslnie!")
            this.props.changeFormType()
          })

          .catch(err => {
            console.log(err);
            if (err.code === "auth/email-already-in-use") {
              this.clearInputs();
              sendMessageToUser(user_already_registered);
            }
          });
        this.props.firebase.setSession()
      }
    }
  };

  logInOrRegister = e => {
    e.preventDefault();
    const { email, password, repassword, displayName } = this.state;
    if (this.formValidation(email, password, repassword, displayName)) {
      return this.props.logInUser(email, password);
    }
  };




  render() {
    const { password, email, repassword, displayName } = this.state;
    const { formType } = this.props;

    return (
      <AuthFormStyle noValidate onSubmit={this.logInOrRegister} action="submit" >
        <InputsWithLabels
          formType={formType}
          password={password}
          email={email}
          repassword={repassword}
          handleSetInput={this.handleSetInput}
          displayName={displayName}
        />
        <SubmitButton formType={formType} />
      </AuthFormStyle>
    );
  }
}

export default withRouter(withFirebase(AuthForm));
