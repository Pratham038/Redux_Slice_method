// productSlice.js
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  loading: false, // Add loading state
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});
export const { setProducts, setLoading } = productSlice.actions;

export const getallProducts = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.get(
      "https://frefishserver.onrender.com/api/products"
    );
    if (response.status == 200) {
      dispatch(setProducts(response.data));
    }
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

export default productSlice.reducer;
