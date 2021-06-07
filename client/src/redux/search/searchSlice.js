import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: `SEARCH`,
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
  },
});

export const SEARCH = searchSlice.name;
export const {
  getAllItemsRequest,
  getAllItemsSuccess,
  getAllItemsFailure,
} = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
