import React from "react";
import Header from "../../Layouts/Header"
import styled from "styled-components";
import Navigation from "../../Layouts/Navigation"
import Component from "../../Layouts/Component"






const BackgroundStyle = styled.div`

`





const WrapperMain = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 5px;
  height: 100%;
  
`


const UserPage = (props) => {
  return (
    <BackgroundStyle>
      <WrapperMain>
        <Header LogOutFunctions={props.LogOutFunctions} />
        <Navigation />
        <Component />
      </WrapperMain>
    </BackgroundStyle>
  )





};

export default UserPage;

