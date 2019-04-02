import streams from '../apis/streams';
import history from '../history';
import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
  SIGN_IN,
  SIGN_OUT
} from "./types";

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  }
};

export const createStream = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const { data: payload } = await streams.post('/streams', { ...formValues, userId });
  dispatch({
    type: CREATE_STREAM,
    payload
  });
  history.push('/');
};

export const fetchStreams = () => async dispatch =>{
  const { data: payload } = await streams.get('/streams');
  dispatch({
    type: FETCH_STREAMS,
    payload
  })
};

export const fetchStream = id => async dispatch =>{
  const { data: payload } = await streams.get(`/streams/${id}`);
  dispatch({
    type: FETCH_STREAM,
    payload
  })
};


export const editStream = (id, formValues) => async dispatch =>{
  const { data: payload } = await streams.patch(`/streams/${id}`, formValues);
  dispatch({
    type: EDIT_STREAM,
    payload
  });
  history.push('/');
};


export const deleteStream = id => async dispatch =>{
  await streams.delete(`/streams/${id}`);
  dispatch({
    type: DELETE_STREAM,
    payload: id
  });
  history.push('/');
};
