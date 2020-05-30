import React, { useState } from "react";
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

const RegisterButton = styled.button`
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

const Register = ({ handleIsHaveAccount }) => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  return (
    <Container>
      <Label>Name</Label>
      <InputText
        type="text"
        name="name"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <Label>Email</Label>
      <InputText
        type="email"
        name="email"
        value={email}
        onChange={(e) => setemail(e.target.value)}
      />
      <Label>Password</Label>
      <InputText
        type="password"
        name="password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
      />
      <Label>Confirm Password</Label>
      <InputText
        type="password"
        name="confirmPassword"
        value={confirmPassword}
        onChange={(e) => setconfirmPassword(e.target.value)}
      />
      <RegisterButton>Register</RegisterButton>
      <LinkButton onClick={handleIsHaveAccount}>
        I already have an account - login
      </LinkButton>
    </Container>
  );
};

export default Register;
