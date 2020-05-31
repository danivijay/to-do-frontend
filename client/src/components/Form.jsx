import React, { useState, Fragment } from "react";
import styled from "styled-components";

import Label from "components/designSystem/Label";
import Input from "components/designSystem/Input";
import Button from "components/designSystem/Button";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

const NameBlock = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  flex-grow: 4;
  flex-basis: 50%;
`;

const DueDateBlock = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  flex-basis: 30%;
  @media (max-width: 356px) {
    flex-basis: 100%;
    width: 100%;
  }
`;

const ButtonBlock = styled.div`
  display: flex;
  flex-grow: 1;
  flex-basis: 100%;
`;

const Form = ({ add }) => {
  const [label, setlabel] = useState("");
  const [dueDate, setdueDate] = useState("");

  const handleAddTodo = () => {
    console.log("here");
    add(label, dueDate);
    setlabel("");
    setdueDate("");
  };

  return (
    <Container>
      <NameBlock>
        <Label>Todo Item</Label>
        <Input
          type="text"
          name="label"
          value={label}
          onChange={(e) => setlabel(e.target.value)}
        />
      </NameBlock>
      <DueDateBlock>
        <Label>Due Date</Label>
        <Input
          type="date"
          name="dueDate"
          value={dueDate}
          onChange={(e) => setdueDate(e.target.value)}
        />
      </DueDateBlock>
      <ButtonBlock>
        <Button fullWidth onClick={handleAddTodo}>
          Add
        </Button>
      </ButtonBlock>
    </Container>
  );
};

export default Form;
