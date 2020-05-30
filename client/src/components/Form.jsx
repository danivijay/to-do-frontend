import React, { useState } from "react";

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
    <div>
      <input
        type="text"
        name="label"
        value={label}
        onChange={(e) => setlabel(e.target.value)}
      />
      <input
        type="date"
        name="dueDate"
        value={dueDate}
        onChange={(e) => setdueDate(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
};

export default Form;
