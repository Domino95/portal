import React from "react";
import styled from "styled-components";

const MessageStyle = styled.p`
  color: red;
  font-size: 0.7rem;
`;

const MessageToUser = ({ messageToUser }) => {
  console.log(messageToUser);
  return <MessageStyle>{messageToUser}</MessageStyle>;
};

export default MessageToUser;
