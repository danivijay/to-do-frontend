import api from "helpers/api";
import axios from "axios";

export const GET_TODOS = "GET_TODOS";
export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

const baseURL = "http://localhost:4000/api/v1";

export const getTodos = () => (dispatch) => {
  // console.log(`${baseURL}/todo`);
  axios.get(`${baseURL}/todo`).then((data) => {
    // console.log({ data });
    if (data?.data?.success) {
      // console.log("nested data", data?.data?.data);
      dispatch({
        type: GET_TODOS,
        payload: data?.data?.data,
      });
    }
  });
};

export const updateTodo = (id, payload) => (dispatch) => {
  console.log(id, payload);
  axios.patch(`${baseURL}/todo/${id}`, payload).then((data) => {
    if (data?.data?.success) {
      dispatch({
        type: UPDATE_TODO,
        payload: data?.data?.data,
      });
    }
  });
};

export const addTodo = (payload) => (dispatch) => {
  axios.post(`${baseURL}/todo`, payload).then((data) => {
    return dispatch({
      type: ADD_TODO,
      payload: payload,
    });
  });
};
