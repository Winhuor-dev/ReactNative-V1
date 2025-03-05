import { all } from 'redux-saga/effects';
import { watchUserSaga } from './userSaga';
import { watchProductSaga } from './productSaga';

export function* rootSaga() {
  yield all([watchUserSaga(), watchProductSaga()]);
}