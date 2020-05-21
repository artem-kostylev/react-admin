import { configureStore } from '@reduxjs/toolkit';
import auth from './auth';
import products from './products';

const store = configureStore({
  reducer: { auth, products }
});

export default store;
