import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SettingsState = {
  home: {
    planner: boolean;
    moodtracker: boolean;
    lists: boolean;
  };
  theme: {
    dark: boolean;
  };
  notifications: boolean;
};

const initialState: SettingsState = {
  home: {
    planner: true,
    moodtracker: true,
    lists: true,
  },
  theme: {
    dark: true,
  },
  notifications: false,
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<boolean>) => {
      state.theme.dark = action.payload;
    },
    changeHomePlanner: (state, action: PayloadAction<boolean>) => {
      state.home.planner = action.payload;
    },
    changeHomeMoodtracker: (state, action: PayloadAction<boolean>) => {
      state.home.moodtracker = action.payload;
    },
    changeHomeLists: (state, action: PayloadAction<boolean>) => {
      state.home.lists = action.payload;
    },
    changeNotifications: (state, action: PayloadAction<boolean>) => {
      state.notifications = action.payload;
    },
  },
});

export const {
  changeHomeLists,
  changeHomeMoodtracker,
  changeHomePlanner,
  changeNotifications,
  changeTheme,
} = settingsSlice.actions;

export default settingsSlice.reducer;
