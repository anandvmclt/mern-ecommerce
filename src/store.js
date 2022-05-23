import { getAllProductsReducer } from "./src/reducer/productReducer";
import {combinedReducers} from 'redux';
import { createStore, applyMiddleware} from "redux";
import thunk from "react-redux"
import { composeWithDevTools } from 'redux-devtools-extension';

const finalReducer = combinedReducers({
    getAllProductsReducer : getAllProductsReducer
})

const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options
  });

const store = createStore(finalReducer,  composeWithDevTools(
    applyMiddleware(thunk)
  ))

  export default store