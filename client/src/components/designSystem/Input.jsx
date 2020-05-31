import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  margin-top: 3px;
  margin-bottom: 7px;
  height: ${({ type }) => (type == "date" ? "2.5em" : "2em")};
  font-size: 1em;
  padding: 0 0.4em;
  border: 1px solid #bdbdbd;
`;

const Input = (props) => {
  return <StyledInput {...props} />;
};

export default Input;
