import styled from "styled-components";

//TEN KONTENER JEST NA WSZYSTKIE INPUTY + LABELE
export const AllInputsWithLabelsWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  flex-basis: ${({ length }) => (length === 4 ? "80%" : "60%")};
  /* background-color: blue; */
`;

//TEN KONTENER JEST NA POJEDYNCZY INPUT Z LABELEM
export const SingleInputWithLabelWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 50px;
  padding: 5px;

  @media(max-width:1024px){
     height: 40px;

  
      
    }
`;
