import axios from 'axios';

import {
  SMURF_FETCH_START,
  SMURF_FETCH_SUCCESS,
  SMURF_FETCH_FAILURE,
  SMURF_ADD_START,
  SMURF_ADD_SUCCESS,
  SMURF_ADD_FAILURE
} from './actionTypes';

const endpoint = 'http://localhost:3333/smurfs';

export const fetchSmurfs = _ => dispatch => {
  dispatch({ type: SMURF_FETCH_START });

  return axios.get(endpoint)
              .then(({ data }) => dispatch({
                type: SMURF_FETCH_SUCCESS,
                payload: data
              }))
              .catch(err => dispatch({
                type: SMURF_FETCH_FAILURE,
                payload: err.response.data.error
              }));
};

export const addSmurf = s => dispatch => {
  dispatch({ type: SMURF_ADD_START });

  return axios.post(endpoint, s) 
              .then(({ data }) => dispatch({
                type: SMURF_ADD_SUCCESS,
                payload: data
              }))
              .catch(err => dispatch({
                type: SMURF_ADD_FAILURE,
                payload: err.response.data.error
              }));
};
