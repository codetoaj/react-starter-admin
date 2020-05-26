import { takeEvery } from 'redux-saga/effects';
import { FETCH_DOG } from '../actionTypes';
import { fetchDogAsync } from './dogSaga';

export default function* rootSaga() {
  yield takeEvery(FETCH_DOG, fetchDogAsync);
}