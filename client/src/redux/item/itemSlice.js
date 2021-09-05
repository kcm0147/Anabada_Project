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
    getBest8ItemsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    getBest8ItemsSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    getBest8ItemsFailure: (state, action) => {
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
    addWishItemRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    addWishItemSuccess: (state) => {
      state.loading = false;
    },
    addWishItemFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    removeWishItemRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    removeWishItemSuccess: (state) => {
      state.loading = false;
    },
    removeWishItemFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getWishItemsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    getWishItemsSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    getWishItemsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    buyItemRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    buyItemSuccess: (state) => {
      state.loading = false;
    },
    buyItemFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    participateItemsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    participateItemsSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    participateItemsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  },
});

export const ITEM = itemSlice.name;
export const {
  getAllItemsRequest,
  getAllItemsSuccess,
  getAllItemsFailure,
  getBest8ItemsRequest,
  getBest8ItemsSuccess,
  getBest8ItemsFailure,
  getItemsWithNameRequest,
  getItemsWithNameSuccess,
  getItemsWithNameFailure,
  addWishItemRequest,
  addWishItemSuccess,
  addWishItemFailure,
  removeWishItemRequest,
  removeWishItemSuccess,
  removeWishItemFailure,
  getWishItemsRequest,
  getWishItemsSuccess,
  getWishItemsFailure,
  buyItemRequest,
  buyItemSuccess,
  buyItemFailure,
  participateItemsRequest,
  participateItemsSuccess,
  participateItemsFailure
} = itemSlice.actions;
export const itemReducer = itemSlice.reducer;
