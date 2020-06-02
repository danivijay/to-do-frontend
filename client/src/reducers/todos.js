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
    case "GET_TODOS":
      console.log("in GET_TODOS", action.payload);
      return {
        ...state,
        todos: action.payload,
      };
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "UPDATE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      };
    default:
      return state;
  }
};

export default reducer;
