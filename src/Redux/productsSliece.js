import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  items: [],
  status: null,
};
export const productsFetch = createAsyncThunk(
  "products/productFetch",
  async () => {
    const response = await axios.get("http://localhost:5000/products");
    return response?.data;
  }

);
const productsSliece = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [productsFetch.pending]: (state, action) => {
      // immer
      state.state = "panding";
    },
    [productsFetch.fulfilled]: (state, action) => {
      // immer
      state.state = "success";
      state.items = action.payload;
    },
    [productsFetch.rejected]: (state, action) => {
      // immer
      state.state = "rejected";
    },
  },
});
export default productsSliece.reducer;
