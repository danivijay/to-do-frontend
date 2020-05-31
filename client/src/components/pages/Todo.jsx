import React, { useState } from "react";
import dayjs from "dayjs";
import styled from "styled-components";

import List from "../List";
import Form from "../Form";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const dummy = [
  { id: 1, label: "test", dueDate: dayjs(), status: "active" },
  {
    id: 2,
    label: "test2",
    dueDate: dayjs("2018-04-04T16:00:00.000Z"),
    status: "active",
  },
  {
    id: 3,
    label: "test2",
    dueDate: dayjs("2018-03-04T16:00:00.000Z"),
    status: "completed",
  },
  {
    id: 4,
    label: "test2",
    dueDate: dayjs("2017-03-04T16:00:00.000Z"),
    status: "completed",
  },
];

const Todo = () => {
  const [todoItems, settodoItems] = useState([...dummy]);

  const addTodo = (label, dueDate) => {
    const date = dayjs(dueDate);
    settodoItems([
      ...todoItems,
      { id: new Date(), label, dueDate: date, status: "active" },
    ]);
    console.log(todoItems);
  };

  const markAsCompleted = (id) => {
    settodoItems(
      todoItems.map((item) =>
        item.id === id ? { ...item, status: "completed" } : item
      )
    );
  };
  return (
    <Container>
      <Form add={addTodo} />
      <List items={todoItems} markAsCompleted={markAsCompleted} />
    </Container>
  );
};

export default Todo;
