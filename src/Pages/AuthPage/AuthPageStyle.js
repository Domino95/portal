import styled from "styled-components";

export const PageStyle = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(235, 235, 235);
`;

export const ContentWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-around;
  height: 60%;
  width: 90%;
  max-width: 450px;
  max-height: 450px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 2px 5px white;
`;
