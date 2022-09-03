// import {  combineReducers,configureStore  } from '@reduxjs/toolkit';
import { createStore} from 'redux';

// import { legacy_createStore as createStore} from 'redux'
import reducer from './Prduct';

// let result = combineReducers(reducer)

const store = ()=>{
    return createStore (reducer)

}

export default store()