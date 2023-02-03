import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import newService from "./newService";

const initialState = {
  news: [],
  isLoading: false,
};

export const getAll = createAsyncThunk(
  "news/getAll",
  async () => {
    try {
      return await newService.getAllNews();
    } catch (error) {
      console.error(error);
    }
  }
);

export const newSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    
  },

  extraReducers: (builder) => {
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.news = action.payload; 
      state.isLoading = false
    });
    builder.addCase(getAll.pending, (state, action) => {
      state.isLoading = true; 
    });
  },
});

export default newSlice.reducer;