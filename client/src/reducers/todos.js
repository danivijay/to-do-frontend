import dayjs from "dayjs";

const initialState = {
  todos: [
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
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
