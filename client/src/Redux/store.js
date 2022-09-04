import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";


  // import reducers
  import { getProductsReducer } from "./Reducers/productReducer";

  //combine reducers
  const reducer = combineReducers({
    productReducer: getProductsReducer
   });

  //apply middleware
  const middleware = [thunk];

  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware)),
  );
  
  export default store;
  