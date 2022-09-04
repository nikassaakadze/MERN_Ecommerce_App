import * as actionTypes from '../Constants/Constants'

export const getProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_PRODUCTS_REQUEST:
      return {
        loading: true,
        products: [],
      };
    case actionTypes.GET_ALL_PRODUCTS_RESPONSE_SUCCESS:
      return {
        products: action.payload,
        loading: false,
      };
    case actionTypes.GET_ALL_PRODUCTS_REQUEST:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};