import { call, put, takeEvery } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import {
  FETCH_USERS_START, fetchUsersSuccess, fetchUsersFailure,
  CREATE_USER_START, createUserSuccess, createUserFailure,
  UPDATE_USER_START, updateUserSuccess, updateUserFailure,
  DELETE_USER_START, deleteUserSuccess, deleteUserFailure,
} from '../actions/userActions';

function* fetchUsersSaga() {
  try {
    const response: AxiosResponse = yield call(axios.get, 'https://dummyjson.com/users');
    yield put(fetchUsersSuccess(response.data));
  } catch (error: any) {
    yield put(fetchUsersFailure(error.message));
  }
}

function* createUserSaga(action: any) {
  try {
    const response: AxiosResponse = yield call(axios.post, 'https://dummyjson.com/users/add', action.payload);
    yield put(createUserSuccess(response.data));
  } catch (error: any) {
    yield put(createUserFailure(error.message));
  }
}

function* updateUserSaga(action: any) {
  try {
    const { id, user } = action.payload;
    const response: AxiosResponse = yield call(axios.put, `https://dummyjson.com/users/${id}`, user);
    yield put(updateUserSuccess(response.data));
  } catch (error: any) {
    yield put(updateUserFailure(error.message));
  }
}

function* deleteUserSaga(action: any) {
  try {
    yield call(axios.delete, `https://dummyjson.com/users/${action.payload}`);
    yield put(deleteUserSuccess(action.payload));
  } catch (error: any) {
    yield put(deleteUserFailure(error.message));
  }
}

export function* watchUserSaga() {
  yield takeEvery(FETCH_USERS_START, fetchUsersSaga);
  yield takeEvery(CREATE_USER_START, createUserSaga);
  yield takeEvery(UPDATE_USER_START, updateUserSaga);
  yield takeEvery(DELETE_USER_START, deleteUserSaga);
}