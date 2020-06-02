import React, { useEffect } from "react";
import dayjs from "dayjs";
import styled from "styled-components";
import { connect } from "react-redux";

import List from "../List";
import Form from "../Form";

import { getTodos, addTodo, updateTodo } from "actions/todo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Todo = ({ todos, getTodos, addTodo, updateTodo }) => {
  console.log("todos", todos);

  useEffect(() => {
    getTodos();
  }, []);

  const addTodoItem = (label, dueDate) => {
    const date = dayjs(dueDate);
    addTodo({ id: new Date(), label, dueDate: date, status: "active" });
  };

  const markAsCompleted = (id) => {
    updateTodo(id, { status: "complete" });
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
    getTodos: (payload) => dispatch(getTodos(payload)),
    addTodo: (payload) => dispatch(addTodo(payload)),
    updateTodo: (id, payload) => dispatch(updateTodo(id, payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
