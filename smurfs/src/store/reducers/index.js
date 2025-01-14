import {
  SMURF_FETCH_START,
  SMURF_FETCH_SUCCESS,
  SMURF_FETCH_FAILURE,
  SMURF_ADD_START,
  SMURF_ADD_SUCCESS,
  SMURF_ADD_FAILURE,
  SMURF_DELETE_START,
  SMURF_DELETE_SUCCESS,
  SMURF_DELETE_FAILURE
} from '../actions/actionTypes';

const initialState = {
  addingSmurf: false,
  deletingSmurf: false,
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
      return {
        ...state,
        addingSmurf: true
      };
    case SMURF_ADD_SUCCESS:
      return {
        ...state,
        addingSmurf: false,
        smurfs: action.payload
      };
    case SMURF_ADD_FAILURE:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload
      };
    case SMURF_DELETE_START:
      return {
        ...state,
        deletingSmurf: true
      };
    case SMURF_DELETE_SUCCESS:
      return {
        ...state,
        deletingSmurf: false,
        smurfs: action.payload
      };
    case SMURF_DELETE_FAILURE:
      return {
        ...state,
        deletingSmurf: false,
        error: action.payload
      };
    default:
      return state;
  }
}
