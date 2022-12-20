// import action
import { GET_USERS_REQUEST } from '../types';

// import action
import { getUsersSuccess, getUsersFailure } from '../actions/users';

// Import Saga
import { takeEvery, call, put } from 'redux-saga/effects';
import { USERS } from '../../helper/url_helpers';

function getApi() {
  return fetch(USERS, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
}

function* fetchUsers({ payload }) {
  try {
    const response = yield call(getApi, payload);
    yield put(getUsersSuccess(response));
    console.log('+++++++++', response);
  } catch (e) {
    yield put(getUsersFailure(e.message));
  }
}

function* userSaga() {
  yield takeEvery(GET_USERS_REQUEST, fetchUsers);
}

export default userSaga;
