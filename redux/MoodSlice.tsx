import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Mood } from "../utils/Types";

type MoodState = {
  moods: Mood[];
};

const initialState: MoodState = {
  moods: [],
};

const moodSlice = createSlice({
  name: "mood",
  initialState,
  reducers: {
    addMood: (state, action: PayloadAction<Mood>) => {
      const existingMoodIndex = state.moods.findIndex(
        (m) => m.date.split("T")[0] === action.payload.date.split("T")[0]
      );
      if (existingMoodIndex >= 0) {
        state.moods[existingMoodIndex] = action.payload;
      } else {
        state.moods.push(action.payload);
      }
    },
  },
});

export const { addMood } = moodSlice.actions;

export default moodSlice.reducer;
