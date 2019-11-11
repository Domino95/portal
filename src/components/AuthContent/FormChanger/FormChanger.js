import React from "react";
import { LOGIN_TYPE } from "Pages/AuthPage/constants";
import { Wrapper, ChangerStyle } from "./FormChangerStyle";

const FormChanger = ({ changeFormType, formType }) => {
  let firstMessage, buttonMessage;
  
  if (formType === LOGIN_TYPE) {
    firstMessage = "Nie jesteś zarejestrowany?";
    buttonMessage = "Stwórz konto";
  } else {
    firstMessage = "Posiadasz już konto?";
    buttonMessage = "Zaloguj się";
  }

  return (
    <Wrapper>
      {firstMessage}
      <ChangerStyle onClick={changeFormType}>{buttonMessage}</ChangerStyle>
    </Wrapper>
  );
};

export default FormChanger;
