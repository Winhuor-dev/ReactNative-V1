import { call, put, takeEvery } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import {
  FETCH_PRODUCTS_START, fetchProductsSuccess, fetchProductsFailure,
  CREATE_PRODUCT_START, createProductSuccess, createProductFailure,
  UPDATE_PRODUCT_START, updateProductSuccess, updateProductFailure,
  DELETE_PRODUCT_START, deleteProductSuccess, deleteProductFailure,
} from '../actions/productActions';

function* fetchProductsSaga() {
  try {
    const response: AxiosResponse = yield call(axios.get, 'https://dummyjson.com/products');
    yield put(fetchProductsSuccess(response.data));
  } catch (error: any) {
    yield put(fetchProductsFailure(error.message));
  }
}

function* createProductSaga(action: any) {
  try {
    const response: AxiosResponse = yield call(axios.post, 'https://dummyjson.com/products/add', action.payload);
    yield put(createProductSuccess(response.data));
  } catch (error: any) {
    yield put(createProductFailure(error.message));
  }
}

function* updateProductSaga(action: any) {
  try {
    const { id, product } = action.payload;
    const response: AxiosResponse = yield call(axios.put, `https://dummyjson.com/products/${id}`, product);
    yield put(updateProductSuccess(response.data));
  } catch (error: any) {
    yield put(updateProductFailure(error.message));
  }
}

function* deleteProductSaga(action: any) {
  try {
    yield call(axios.delete, `https://dummyjson.com/products/${action.payload}`);
    yield put(deleteProductSuccess(action.payload));
  } catch (error: any) {
    yield put(deleteProductFailure(error.message));
  }
}

export function* watchProductSaga() {
  yield takeEvery(FETCH_PRODUCTS_START, fetchProductsSaga);
  yield takeEvery(CREATE_PRODUCT_START, createProductSaga);
  yield takeEvery(UPDATE_PRODUCT_START, updateProductSaga);
  yield takeEvery(DELETE_PRODUCT_START, deleteProductSaga);
}