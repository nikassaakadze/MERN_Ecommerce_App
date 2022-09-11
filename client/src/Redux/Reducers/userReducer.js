import * as actionTypes from '../Constants/Constants'

export const userRegistrationReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case actionTypes.CREATE_USER_REQUEST:
      return {
        loading: true,
        user: {},
      };
    case actionTypes.CREATE_USER_REQUEST_SUCCESS:
      return {
        user: action.payload,
        loading: false,
      };
    case actionTypes.CREATE_USER_REQUEST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.CLEAN_STATE:
      return state;
    default:
      return state;
  }
};