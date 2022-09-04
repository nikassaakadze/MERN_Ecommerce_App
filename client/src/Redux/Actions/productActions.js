import * as actionTypes from "../Constants/Constants"
import axios from 'axios'

export const getAllProducts = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_ALL_PRODUCTS_REQUEST });

    const { data } = await axios.get("/get/products");

    dispatch({
      type: actionTypes.GET_ALL_PRODUCTS_RESPONSE_SUCCESS,
      payload: data,
    });
    
  } catch (error) {
    dispatch({
      type: actionTypes.GET_ALL_PRODUCTS_RESPONSE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
