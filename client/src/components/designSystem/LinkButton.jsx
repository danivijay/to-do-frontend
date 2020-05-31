import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  margin-top: 5px;
  border: none;
  background: none;
  text-decoration: underline;
  align-self: center;
`;

const LinkButton = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default LinkButton;
