import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {configureStore} from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import productReducer, { productsFetch } from "./features/productSlice";
import { productsApi } from './features/productsApi';
import cartReducer, {getTotal} from './features/cartSlice';

const store = configureStore({
  reducer:{
    products:productReducer,
    cart : cartReducer,
    [productsApi.reducerPath] : productsApi.reducer,

  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
    serializableCheck: false,
  }).concat(productsApi.middleware);

  }
});

store.dispatch(productsFetch())
store.dispatch(getTotal())



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>
);

