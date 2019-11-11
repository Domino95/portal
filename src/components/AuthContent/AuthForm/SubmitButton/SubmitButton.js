import React from "react";
import styled from "styled-components";
import { LOGIN_TYPE } from "Pages/AuthPage/constants";

const SubmitStyle = styled.button`
  width: 120px;
  font-size: 1rem;
  height: 45px;
  background: rgb(64, 64, 64);
  color: white;
  border: 5px solid white;
  border-radius: 50px;
  transition: 0.3s;
  &:hover,
  &:focus {
    box-shadow: 0 0 2px 2px #343434;
  }
`

const SubmitButton = ({ formType }) => {
  let message;

  formType === LOGIN_TYPE
    ? (message = "Zaloguj się")
    : (message = "Zarejestruj");
  return <SubmitStyle>{message}</SubmitStyle>;
};

export default SubmitButton;
