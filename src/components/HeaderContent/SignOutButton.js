import React from 'react';
import styled from 'styled-components';
import { withFirebase } from '../../Firebase';

const SignOuttStyle = styled.button`
border-radius: 10px;
width: 120px;
font-size: 1.1rem;
height: 45px;
background: rgb(64, 64, 64);
color: white;
padding:2px;

transition: 0.3s;
&:hover,
&:focus {
  box-shadow: 0 0 2px 2px #343434;
`




const SignOutButton = (props) => {

  return (

    <SignOuttStyle
      onClick={props.LogOutFunctions}>
      Wyloguj
        </SignOuttStyle>


  );
}



export default withFirebase(SignOutButton);