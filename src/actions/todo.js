import api from "helpers/api";
import axios from "axios";

export const GET_TODOS = "GET_TODOS";
export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const DELETE_TODO = "UPDATE_TODO";

const baseURL = "https://to-do-expressjs.herokuapp.com/api/v1";

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
  return axios.patch(`${baseURL}/todo/${id}`, payload).then((data) => {
    if (data?.data?.success) {
      dispatch({
        type: UPDATE_TODO,
        payload: data?.data?.data,
      });
    }
  });
};

export const deleteTodo = (id) => (dispatch) => {
  return axios.delete(`${baseURL}/todo/${id}`).then((data) => {
    if (data?.data?.success) {
      dispatch({
        type: DELETE_TODO,
        payload: { id },
      });
    }
  });
};

export const addTodo = (payload) => (dispatch) => {
  return axios.post(`${baseURL}/todo`, payload).then((data) => {
    if (data?.data?.success) {
      dispatch({
        type: ADD_TODO,
        payload: data?.data?.data,
      });
    }
  });
};
