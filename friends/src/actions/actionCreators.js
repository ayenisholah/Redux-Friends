import axios from 'axios';
import {
  GETTING_FRIENDS,
  GETTING_FRIENDS_SUCCESS,
  GETTING_FRIENDS_FAILURE,
  ADDING_FRIEND,
  ADD_FRIEND_SUCCESS,
  ADD_FRIEND_FAILURE,
  DELETING_FRIEND,
  DELETE_FRIEND_SUCCESS,
  DELETE_FRIEND_FAILURE,
  LOGIN_FAILURE,
  LOGGING_IN,
  LOGIN_SUCCESS
} from './actionTypes';

export function getFriends() {
  return (dispatch) => {
    dispatch({ type: GETTING_FRIENDS });

    const token = localStorage.getItem('token');
    const axiosConfig = token ? { headers: {'Authorization': token} }: null;

    axios.get('http://localhost:5000/api/friends', axiosConfig)
      .then(res => {
        dispatch({ type: GETTING_FRIENDS_SUCCESS, payload: res.data });
      })
      .catch(err => {
        const error = err.response.data.message;
        dispatch({ type: GETTING_FRIENDS_FAILURE, payload: error });
        console.log(error);
      });
    }
}