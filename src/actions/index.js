import axios from "axios";

export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAIL = "FETCH_SMURF_FAIL";
export const ADD_SMURF = "ADD_SMURF";
export const ADD_SMURF_START = " ADD_SMURF_START";
export const POST_ERROR = "POST_ERROR";
export const SUBMIT_ERROR = "SUBMIT_ERROR";

export const getSmurfs = () => (dispatch) => {
  dispatch({ type: FETCH_SMURF_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      console.log(res.data, "is this it?");
      dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_SMURF_FAIL, payload: err.message });
    });
};

export const newSmurf = (newSmurf) => (dispatch) => {
  dispatch({ type: ADD_SMURF_START });
  axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then((res) => {
      console.log(res.data, "here");
      dispatch({ type: ADD_SMURF, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: POST_ERROR, payload: err.message });
    });
};

export const setError = (err) => (dispatch) => {
  dispatch({ type: SUBMIT_ERROR, payload: err });
};
//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.
