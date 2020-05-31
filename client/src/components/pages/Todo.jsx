import React from "react";
import dayjs from "dayjs";
import styled from "styled-components";
import { connect } from "react-redux";

import List from "../List";
import Form from "../Form";

import { addTodo, updateTodo } from "actions/todo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Todo = ({ todos, addTodo, updateTodo }) => {
  console.log("todos", todos);

  const addTodoItem = (label, dueDate) => {
    const date = dayjs(dueDate);
    addTodo({ id: new Date(), label, dueDate: date, status: "active" });
  };

  const markAsCompleted = (id) => {
    // settodoItems(
    //   todoItems.map((item) =>
    //     item.id === id ? { ...item, status: "completed" } : item
    //   )
    // );
  };
  return (
    <Container>
      <Form add={addTodoItem} />
      <List items={todos} markAsCompleted={markAsCompleted} />
    </Container>
  );
};

const mapStateToProps = ({ todos: { todos } }) => ({ todos });
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (payload) => dispatch(addTodo(payload)),
    updateTodo: (payload) => dispatch(updateTodo(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
