import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import requestService from "./requestService";

const initialState = {
    requests: [],
    isLoading: false,
};

export const getAll = createAsyncThunk(
    "requests/getAll",
    async () => {
        try {
            return await requestService.getAll();
        } catch (error) {
            console.error(error);
        }
    }
);

export const createRequest = createAsyncThunk(
    "requests/createRequest",
    async (test) => {
        try {
            return await requestService.createRequest(test);
        } catch (error) {
            console.error(error);
        }
    }
);

export const requestsSlice = createSlice({
    name: "requests",
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {
        builder.addCase(getAll.fulfilled, (state, action) => {
            state.requests = action.payload;
            state.isLoading = false
        });
    },
});

export default requestsSlice.reducer;