import styled, { keyframes } from "styled-components";

const animationSpin = keyframes`
from {
    transform: rotate(0deg)
    }
to{
    transform: rotate(360deg)
}
`;

const Spinner = styled.div`
  animation: ${animationSpin} 1.5s linear infinite;
  border: 6px solid #222;
  border-top: 6px solid #fff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  position: absolute;
  top: calc(50% - 20px);
  left: calc(50% - 20px);
  z-index: 2;
`;

export default Spinner;
