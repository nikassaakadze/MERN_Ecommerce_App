import * as actionTypes from "../Constants/Constants"
import axios from 'axios'
import storage from '../../util/firebase'
import {uploadBytes, ref, getDownloadURL } from "firebase/storage";

export const uploadProduct = (image, formData) => async (dispatch) => {
  try {

    const storageRef = ref(storage, image.name);

      dispatch({ 
        type: actionTypes.UPLOAD_PRODUCT_REQUEST 
      });

      await uploadBytes(storageRef, image) 

      getDownloadURL(ref(storage, `${image.name}`))
      .then((url) => {
          axios.post("/api/products", {
              headline: formData.headline,
              category: formData.category,
              description: formData.description,
              hero: url,
              location: formData.location,
              userName: formData.userName,
              mobileNumber: formData.mobileNumber,
              price: formData.price
          })

        dispatch({
          type: actionTypes.GET_ALL_PRODUCTS_RESPONSE_SUCCESS,
          // payload: dataUrl.config.url
        })
        
      })
    
  } catch (error) {
    dispatch({
      type: actionTypes.UPLOAD_PRODUCT_REQUEST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};