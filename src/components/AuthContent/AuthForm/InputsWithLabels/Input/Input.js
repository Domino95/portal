import React from "react";
import styled from "styled-components";
import { PASSWORD, REP_PASSWORD } from "Pages/AuthPage/constants";
const InputStyle = styled.input`
  font-size: 15px;
  padding: 10px;
  height: 100%;
  width: 70%;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 3px inset black;
  &::placeholder {
    font-size: 0.8rem;
  }
  &:focus {
    background-color: #ddd;
  }
  @media(max-width:1024px){
  
    
  }
`;

const Input = ({ placeholder, value, handleSetInput, name }) => {
  return (
    <>
      <InputStyle
        id={name}
        onChange={handleSetInput}
        value={value}
        placeholder={placeholder}
        type={name === PASSWORD || name === REP_PASSWORD ? "password" : "email"}
      />
    </>
  );
};

export default Input;
