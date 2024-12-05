import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./ListSlice";
import moodreducer from "./MoodSlice";
import plannerReducer from "./plannerSlice";

export const store = configureStore({
  reducer: {
    list: listReducer,
    mood: moodreducer,
    planner: plannerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
