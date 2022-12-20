import * as type from '../types';

const initialState = {
  users: [],
  isLoading: false,
  isFetching: false,
  error: null,
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case type.GET_USERS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case type.GET_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: action.payload ?? [],
      };
    case type.GET_USERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload ?? [],
      };
    default:
      return state;
  }
}
