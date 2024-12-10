import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DTOMood, Mood } from "../utils/Types";
import { getMoods, postMood } from "../utils/api";

type MoodState = {
  moods: Mood[];
};

const initialState: MoodState = {
  moods: [],
};

export const fetchMoods = createAsyncThunk<
  Mood[],
  void,
  { rejectValue: string }
>("mood/fetchMoods", async (_, { rejectWithValue }) => {
  try {
    const response = await getMoods();
    return response;
  } catch (error) {
    return rejectWithValue("Something went wrong");
  }
});

export const fetchPostMood = createAsyncThunk<
  Mood,
  DTOMood,
  { rejectValue: string }
>("mood/fetchPostMood", async (data, { rejectWithValue }) => {
  try {
    const response = await postMood(data);
    return response;
  } catch (error) {
    return rejectWithValue("Something went wrong");
  }
});

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
  extraReducers: (builder) => {
    builder.addCase(fetchMoods.fulfilled, (state, action) => {
      state.moods = action.payload;
    });

    builder.addCase(fetchPostMood.fulfilled, (state, action) => {
      state.moods = [...state.moods, action.payload];
    });
  },
});

export const { addMood } = moodSlice.actions;

export default moodSlice.reducer;
