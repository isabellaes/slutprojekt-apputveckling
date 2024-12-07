import { createSlice } from "@reduxjs/toolkit";
import { Item } from "../utils/Types";

type plannerState = {
  items: Item[];
};

const initialState: plannerState = {
  items: [
    {
      id: "1",
      title: "Hämta medicin",
      date: new Date("2024-12-8T10:00:00"),
    },
    {
      id: "2",
      title: "Jobb",
      date: new Date("2024-12-12T10:00:00"),
    },
    {
      id: "3",
      title: "Möte",
      date: new Date("2024-12-17T10:00:00"),
    },
  ],
};

const plannerSlice = createSlice({
  name: "planner",
  initialState,
  reducers: {},
});

export const {} = plannerSlice.actions;

export default plannerSlice.reducer;
