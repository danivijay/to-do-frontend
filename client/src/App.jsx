import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

import Todo from "./components/Todo";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

const Wrapper = styled.div`
  margin: auto;
  text-align: center;
  max-width: 600px;
  display: flex;
  justify-content: center;
  padding: 30px 0;
`;

function App() {
  return (
    <Router>
      <Fragment>
        <NavBar />
        <Wrapper>
          <Switch>
            <Route path="/todo">
              <Todo />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Wrapper>
      </Fragment>
    </Router>
  );
}

export default App;
