import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
  try {
    const res = await axios.get('http://admin.refabry.com/api/all/product/get', { timeout: 10000 });
    return res.data.data;
  } catch (error) {
    // Handle the error (timeout, network, etc.)
    console.error("Error fetching products:", error);
    throw error;
  }
});

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch products";
      });
  }
});

export default productSlice.reducer;
