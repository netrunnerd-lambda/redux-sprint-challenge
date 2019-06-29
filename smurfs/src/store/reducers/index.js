import {
  SMURF_FETCH_START,
  SMURF_FETCH_SUCCESS,
  SMURF_FETCH_FAILURE,
  SMURF_ADD_START,
  SMURF_ADD_SUCCESS,
  SMURF_ADD_FAILURE
} from '../actions/actionTypes';

const initialState = {
  addingSmurf: false,
  error: null,
  fetchingSmurfs: false,
  smurfs: []
};

export default function (state = initialState, action) {
  switch(action.type) {
    case SMURF_FETCH_START:
      return {
        ...state,
        fetchingSmurfs: true
      };
    case SMURF_FETCH_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload
      };
    case SMURF_FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        fetchingSmurfs: false
      };
    case SMURF_ADD_START:
      return state;
    case SMURF_ADD_SUCCESS:
      return state;
    case SMURF_ADD_FAILURE:
      return state;
    default:
      return state;
  }
};
