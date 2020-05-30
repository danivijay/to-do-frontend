import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: auto;
  text-align: center;
  max-width: 600px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  border-bottom: 1px #e0e0e0 solid;
`;

const Title = styled.div`
  align-self: auto;
`;

const Links = styled.div`
  align-self: auto;
`;

const LogoutButton = styled.button`
  padding: 4px;
`;

const NavBar = () => {
  return (
    <Wrapper>
      <Container>
        <Title>
          <h1>Todo</h1>
        </Title>
        <Links>
          <LogoutButton>logout</LogoutButton>
        </Links>
      </Container>
    </Wrapper>
  );
};

export default NavBar;
