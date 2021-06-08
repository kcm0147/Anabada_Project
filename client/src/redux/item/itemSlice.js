import { createSlice } from "@reduxjs/toolkit";

export const itemSlice = createSlice({
  name: `ITEM`,
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  reducers: {
    getAllItemsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    getAllItemsSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    getAllItemsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getItemsWithNameRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    getItemsWithNameSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    getItemsWithNameFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const ITEM = itemSlice.name;
export const {
  getAllItemsRequest,
  getAllItemsSuccess,
  getAllItemsFailure,
  getItemsWithNameRequest,
  getItemsWithNameSuccess,
  getItemsWithNameFailure,
} = itemSlice.actions;
export const itemReducer = itemSlice.reducer;
