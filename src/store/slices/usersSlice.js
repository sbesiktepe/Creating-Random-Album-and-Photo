import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "../thunks/userFetchThunk";
import { addUser } from "../thunks/userAddThunk";
import { removeUser } from "../thunks/userRemoveThunk";

const usersSlice = createSlice({
  name: "users",
  initialState: { isLoading: false, data: [], error: null },
  reducers: {},
  extraReducers(builder) {
    // fetchUser
    builder.addCase(fetchUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    //addUser;
    builder.addCase(addUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.push(action.payload);
    });
    builder.addCase(addUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    });
    //removeUser;
    builder.addCase(removeUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(removeUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = state.data.filter((user) => user.id !== action.payload.id);
    });
    builder.addCase(removeUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    });
  },
});

export const usersReducer = usersSlice.reducer;
