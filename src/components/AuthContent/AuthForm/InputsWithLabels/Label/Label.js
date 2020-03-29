import React from "react";
import styled from "styled-components";

const LabelStyle = styled.label`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
  font-size: 1.8rem;
`;

const Label = ({ name, icon }) => {
  return <LabelStyle className={icon} htmlFor={name} />;
};

export default Label;
