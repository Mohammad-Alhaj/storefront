import { configureStore } from "@reduxjs/toolkit";

import { combineReducers } from "redux";
// import reducer from './Prduct';
import cartSlice from './Carts'
import serverSlice from './getDataApi'
let reducers = combineReducers({
    // reducer:reducer,
    CartReducer:cartSlice,
    server:serverSlice
})


const store = configureStore({reducer: reducers})


export default store