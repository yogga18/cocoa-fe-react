import * as type from '../types';

export function getUsers() {
  return {
    type: type.GET_USERS_REQUEST,
  };
}

export function getUsersSuccess(users) {
  return {
    type: type.GET_USERS_SUCCESS,
    payload: users,
  };
}

export function getUsersFailure(error) {
  return {
    type: type.GET_USERS_FAILURE,
    payload: error,
  };
}
