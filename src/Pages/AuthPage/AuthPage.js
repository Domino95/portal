import React, { Component } from "react";
import AuthForm from "components/AuthContent/AuthForm/AuthForm";
import FormChanger from "components/AuthContent/FormChanger/FormChanger";
import { LOGIN_TYPE, REGISTER_TYPE } from "./constants";
import { PageStyle, ContentWrapper } from "./AuthPageStyle";
import MessageToUser from "components/AuthContent/MessageToUser/MessageToUser";
class AuthPage extends Component {
  state = {
    formType: LOGIN_TYPE,
    messageToUser: ""
  };

  // funkcja, która zmienia typ formularza
  changeFormType = () => {
    const { formType } = this.state;

    if (formType === LOGIN_TYPE) {
      this.setState({ formType: REGISTER_TYPE });
    } else {
      this.setState({ formType: LOGIN_TYPE });
    }
  };

  // funkcja, która daje informacje dla użytkownika jeśli wpisał źle hasło, zły email itd. przyjmuję jako argument wiadomość z formularza i przekazuje ją dalej.
  sendMessageToUser = messageToUser => {
    this.setState({
      messageToUser
    });
  };

  render() {
    const { formType, messageToUser } = this.state;
    const { logInUser } = this.props;
    return (
      <PageStyle>
        <ContentWrapper>
          <h2 style={{ marginTop: "10px", marginBottom: "10px" }}>Portal Pacjenta</h2>
          <MessageToUser messageToUser={messageToUser} />
          <AuthForm
            sendMessageToUser={this.sendMessageToUser}
            logInUser={logInUser}
            formType={formType}
            changeFormType={this.changeFormType}

          />
          <FormChanger
            formType={formType}
            changeFormType={this.changeFormType}
          />
        </ContentWrapper>
      </PageStyle>
    );
  }
}

export default AuthPage;
