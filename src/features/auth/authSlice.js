import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const initialState = {
  user: null,
};
export const register = createAsyncThunk("auth/register", async (user) => {
  try {
    return await authService.register(user);
  } catch (error) {
    console.error(error);
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  // extraReducers: (builder) => {

  //   builder

  //     // .addCase(login.fulfilled, (state, action) => {

  //     //   state.user = action.payload;

  //     // })
  // },
});


export default authSlice.reducer;
