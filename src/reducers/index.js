import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAIL,
  ADD_SMURF,
  ADD_SMURF_START,
  POST_ERROR,
  SUBMIT_ERROR,
} from "./../actions/index";

export const initialState = {
  smurfs: [],
  isLoading: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURF_START:
      return {
        ...state,
        isLoading: true,
        smurfs: [],
      };
    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isLoading: false,
        error: "",
      };
    case FETCH_SMURF_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case ADD_SMURF:
      return {
        ...state,
        smurfs: action.payload,
        error: "",
        isLoading: false,
      };
    case ADD_SMURF_START:
      return state;
    case POST_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case SUBMIT_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.
