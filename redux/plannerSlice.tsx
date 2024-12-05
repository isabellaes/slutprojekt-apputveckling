import { createSlice } from "@reduxjs/toolkit";

type Item = {
  id: string;
  title: string;
  date: Date;
};

type plannerState = {
  items: Item[];
};

const initialState: plannerState = {
  items: [],
};

const plannerSlice = createSlice({
  name: "planner",
  initialState,
  reducers: {},
});

export const {} = plannerSlice.actions;

export default plannerSlice.reducer;
