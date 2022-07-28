import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const postTexts = createAsyncThunk(
  "text/postTexts",
  async (text, thunkAPI) => {
    try {
      const response = await axios.get(`/iecho?text=${text}`);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

const textSlice = createSlice({
  name: "text",
  initialState: { texts: [], loading: false, error: "" },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postTexts.fulfilled, (state, action) => {
      state.texts = [action.payload, ...state.texts];
      state.error = "";
    });
    builder.addCase(postTexts.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export default textSlice.reducer;
