import styled from "styled-components";

export const PageStyle = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(235, 235, 235);
  display:flex;
  justify-content:center;
  align-items:center;
 
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-around;
  height: 50%;
  width: 25%;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 2px 5px white;
  
  @media(max-width:1024px){
    height: 40%;
    width: 70%;
    
  }
`;
