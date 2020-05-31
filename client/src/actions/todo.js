export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload: payload,
  };
};

export const updateTodo = (payload) => (dispatch) => {
  dispatch({
    type: UPDATE_TODO,
    payload: payload,
  });
};
