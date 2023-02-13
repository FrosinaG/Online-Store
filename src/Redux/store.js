import productsReducer, { productsFetch } from "./productsSliece";
import { productsApi } from "./productApi";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { getTotals } from "./cartSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
store.dispatch(productsFetch());
store.dispatch(getTotals());
export default store;
