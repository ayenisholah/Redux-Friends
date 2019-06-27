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
} from '../actions/actionTypes';
import { SlowBuffer } from 'buffer';

export function friendsReducer(sliceOfState = [], action) {
  switch (action.type) {
    case GETTING_FRIENDS_SUCCESS:
      return action.payload;
    case ADD_FRIEND_SUCCESS:
      return action.payload;
    case DELETE_FRIEND_SUCCESS:
      return action.payload;
    default:
      return sliceOfState;
  }
}

export function errorMessageReducer(sliceOfState = '', action) {
  switch (action.type) {
    case GETTING_FRIENDS_FAILURE:
      return action.payload;
    case GETTING_FRIENDS_SUCCESS:
      return sliceOfState = '';

    case ADD_FRIEND_FAILURE:
      return action.payload;
    case ADD_FRIEND_SUCCESS:
      return sliceOfState = '';

    case DELETE_FRIEND_FAILURE:
      return action.payload;
    case DELETE_FRIEND_SUCCESS:
      return sliceOfState = '';

    case LOGIN_FAILURE:
      return action.payload;
    case LOGIN_SUCCESS:
      return sliceOfState;

    default:
      return sliceOfState;
  }
}