import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-content: space-around;
  max-width: 500px;
`;

const Label = styled.label`
  font-size: 0.8em;
`;

const InputText = styled.input`
  margin-top: 3px;
  margin-bottom: 7px;
`;

const LoginButton = styled.button`
  margin-top: 5px;
  min-width: 300px;
  padding: 2px 0;
  align-self: center;
`;

const LinkButton = styled.button`
  margin-top: 5px;
  border: none;
  background: none;
  text-decoration: underline;
  align-self: center;
`;

const Register = ({ handleIsNotHaveAccount }) => {
  return (
    <Container>
      <Label>Email</Label>
      <InputText type="email" name="email" value="" />
      <Label>Password</Label>
      <InputText type="password" name="password" value="" />
      <LoginButton>Login</LoginButton>
      <LinkButton onClick={handleIsNotHaveAccount}>
        I don't have an account - register
      </LinkButton>
    </Container>
  );
};

export default Register;
