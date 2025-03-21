// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/userReducer'; // Ensure this path is correct and the reducers file exists

const store = configureStore({
  reducer: rootReducer
});

export default store;
