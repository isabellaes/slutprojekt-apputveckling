import { createSlice } from "@reduxjs/toolkit";

type MoodState = {};

const initialState: MoodState = {};

const moodSlice = createSlice({
  name: "mood",
  initialState,
  reducers: {},
});

export const {} = moodSlice.actions;

export default moodSlice.reducer;
