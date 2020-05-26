import { call, put } from 'redux-saga/effects';
import {
  requestDog,
  requestDogSuccess,
  requestDogError
} from '../actions/dogActions';

export function* fetchDogAsync() {
  try {
    yield put(requestDog());
    const data = yield call(() => {
      return fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json());
    })
    yield put(requestDogSuccess(data));
  } catch(error) {
    yield put(requestDogError());
  }
}