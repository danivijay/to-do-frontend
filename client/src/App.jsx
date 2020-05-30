import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import dayjs from "dayjs";

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

function App() {
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
    <div className="App">
      <Form add={addTodo} />
      <List items={todoItems} markAsCompleted={markAsCompleted} />
    </div>
  );
}

export default App;
