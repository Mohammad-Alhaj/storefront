// import {  combineReducers,configureStore  } from '@reduxjs/toolkit';
import { createStore,combineReducers,applyMiddleware} from 'redux';

// import { legacy_createStore as createStore} from 'redux'
import reducer from './Prduct';
import CartReducer from './Carts'
import server from './getDataApi'
import thunk from "redux-thunk";
// import CartReducer from './Carts';
let reducers = combineReducers({
    // reducer:reducer,
    CartReducer:CartReducer,
    server:server
})


const store = ()=>{
    return createStore (reducers,applyMiddleware(thunk))

}

export default store()