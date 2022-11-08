import { configureStore } from '@reduxjs/toolkit';

import { combineReducers } from 'redux';

import counterReducer from './counterReducer'
const rootReducer = combineReducers({
  statoContatore: counterReducer
})

const store = configureStore({
    reducer: rootReducer
})

export default store