import React from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
  font-size: 0.8em;
`;

const Label = ({ children, ...props }) => {
  return <StyledLabel {...props}>{children}</StyledLabel>;
};

export default Label;
