import React, { useEffect } from "react";
import dayjs from "dayjs";
import styled from "styled-components";
import { connect } from "react-redux";

import List from "../List";
import Form from "../Form";

import { getTodos, addTodo, updateTodo, deleteTodo } from "actions/todo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Todo = ({ todos, getTodos, addTodo, updateTodo, deleteTodo }) => {
  console.log("todos", todos);

  useEffect(() => {
    getTodos();
  }, []);

  const addTodoItem = (label, dueDate) => {
    const date = dueDate;
    addTodo({ label, dueDate: date, status: "active" });
  };

  const markAsCompleted = (id) => {
    updateTodo(id, { status: "complete" });
  };

  const deleteTodoItem = (id) => {
    deleteTodo(id);
  };

  return (
    <Container>
      <Form add={addTodoItem} />
      <List
        items={todos}
        markAsCompleted={markAsCompleted}
        deleteTodo={deleteTodoItem}
      />
    </Container>
  );
};

const mapStateToProps = ({ todos: { todos } }) => ({ todos });
const mapDispatchToProps = (dispatch) => {
  return {
    getTodos: (payload) => dispatch(getTodos(payload)),
    addTodo: (payload) => dispatch(addTodo(payload)),
    updateTodo: (id, payload) => dispatch(updateTodo(id, payload)),
    deleteTodo: (id) => dispatch(deleteTodo(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
