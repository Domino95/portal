import styled from "styled-components";

export const Wrapper = styled.p`
  flex-basis: 10%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* background-color: red; */
  font-size: 0.8rem;
`;
export const ChangerStyle = styled.button`
  background-color: transparent;
  border: none;
  margin-left: 5px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    transition: 0.2s;
    top: 90%;
    left: 0;
    height: 1px;
    width: 100%;
    background-color: black;
    transform: translateX(-100%);
  }
  &:hover::after {
    transform: translateX(0%);
  }
`;
