import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: `USER`,
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  reducers: {
    loginRequest: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logoutRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    logoutSuccess: (state) => {
      state.loading = false;
      state.data = null;
    },
    logoutFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const USER = userSlice.name;
export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  logoutRequest,
  logoutSuccess,
  logoutFailure,
} = userSlice.actions;
export const userReducer = userSlice.reducer;
