import React from 'react';
import styled from 'styled-components';
import { withFirebase } from '../../Firebase';

const SignOuttStyle = styled.button`
border-radius: 10px;
width: 110px;
font-size: 1rem;
height: 40px;
background: rgb(64, 64, 64);
color: white;
padding:2px;
transition: 0.3s;
&:hover
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