import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import activityService from "./activityService";

const initialState = {
  activities: [],
  isLoading: false,
  activity: {},
};

export const getAllActivities = createAsyncThunk(
  "activities/getAllActivities",
  async () => {
    try {
      return await activityService.getAllActivities();
    } catch (error) {
      console.error(error);
    }
  }
);

export const getActivity = createAsyncThunk(
  "activities/getActivityById",
  async (id) => {
    try {
      return await activitySlice.getActivityById(id);
    } catch (error) {
      console.error(error);
    }
  }
);

export const activitySlice = createSlice({
  name: "activities",
  initialState,
  reducers: {
    reset: (state)=>{
      state.isLoading = false
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getAllActivities.fulfilled, (state, action) => {
      state.activities = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getAllActivities.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getActivity.fulfilled, (state, action) => {
      state.activities=action.payload
    });
  },
});

export const { reset } = activitySlice.actions
export default activitySlice.reducer;
