import {
  FETCH_DOG,
  REQUEST_DOG,
  RECEIVED_DOG,
  ERROR_DOG
} from '../actionTypes';

export const requestDog = () => {
  return { type: REQUEST_DOG };
};

export const requestDogSuccess = (data) => {
  return { type: RECEIVED_DOG, url: data.message };
};

export const requestDogError = () => {
  return { type: ERROR_DOG };
};

export const fetchDog = () => {
  return { type: FETCH_DOG };
};