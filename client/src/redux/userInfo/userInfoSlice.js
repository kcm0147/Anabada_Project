import { createSlice } from "@reduxjs/toolkit";

export const userInfoSlice = createSlice({
  name: `USER_INFO`,
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  reducers: {
    getUserInfoRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    getUserInfoSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    getUserInfoFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const USER_INFO = userInfoSlice.name;
export const {
  getUserInfoRequest,
  getUserInfoSuccess,
  getUserInfoFailure,
} = userInfoSlice.actions;
export const userInfoReducer = userInfoSlice.reducer;
