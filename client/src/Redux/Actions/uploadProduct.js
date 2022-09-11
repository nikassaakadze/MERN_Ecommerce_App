import * as actionTypes from "../Constants/Constants"
import axios from 'axios'
import storage from '../../util/firebase'
import {uploadBytes, ref, getDownloadURL } from "firebase/storage";

export const uploadProduct = (image, formData) => async (dispatch) => {

  console.log(formData)
  try {

      dispatch({ 
        type: actionTypes.UPLOAD_PRODUCT_REQUEST 
      });

      var imageLinks = []

      await image.find(item => {
        uploadBytes(ref(storage, item[0].name), item[0]).then(() => {
          getDownloadURL(ref(storage, `${item[0].name}`)).then(url => {
            imageLinks.push(url)
            if(image.length == imageLinks.length){
              axios.post("/add_product", {
                headline: formData.headline,
                category: formData.category,
                hero: imageLinks,
                description: formData.description,
                location: formData.location,
                userName: formData.username,
                mobileNumber: formData.mobile_number,
                price: formData.price,
                title: formData.title
            })
            }
          })
        })
      })

      dispatch({
        type: actionTypes.GET_ALL_PRODUCTS_RESPONSE_SUCCESS,
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
}