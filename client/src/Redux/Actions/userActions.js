import * as actionTypes from "../Constants/Constants"
import axios from 'axios'

export const userRegistration = (formData) => async (dispatch) => {
  try{

    dispatch({
      type: actionTypes.CREATE_USER_REQUEST
    })

    axios({
      method: "post",
      data: {
        username: formData.username,
        password: formData.password,
        mobile: formData.mobile_number
      },  
      withCredentials: true,
      url: "/register"
    }).then(response => {
      dispatch({
        type: actionTypes.CREATE_USER_REQUEST_SUCCESS,
        payload: response
      })
    })

  }catch(error){

  }
}