import styled from "styled-components";

export default styled.button`
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  padding: 10px;
  align-self: center;
  font-size: 1em;
  border: 0;
  border-radius: 2px;
  color: white;
  background: #03a9f4;
  &:hover {
    background: #18b7ff;
  }
`;
