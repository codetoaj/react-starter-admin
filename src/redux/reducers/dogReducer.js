import { REQUEST_DOG, RECEIVED_DOG, ERROR_DOG } from '../actionTypes';

const countryReducer = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_DOG:
      return Object.assign({}, state, {
        loading: true
      });
    case RECEIVED_DOG:
      return Object.assign({}, state, {
        loading: false,
        url: action.url
      });
    case ERROR_DOG:
      return Object.assign({}, state, {
        loading: true,
        error: true
      });
    default:
      return state;
  }
}

export default countryReducer;