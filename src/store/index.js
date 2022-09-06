// import {  combineReducers,configureStore  } from '@reduxjs/toolkit';
import { createStore,combineReducers} from 'redux';

// import { legacy_createStore as createStore} from 'redux'
import reducer from './Prduct';
import CartReducer from './Carts'
// import CartReducer from './Carts';
let reducers = combineReducers({
    reducer:reducer,
    CartReducer:CartReducer
})


const store = ()=>{
    return createStore (reducers)

}

export default store()